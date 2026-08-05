import { headers } from "next/headers";
import { slugify } from "@/utils/slugify";
import { parseSku } from "@/utils/buildSku";

const CATEGORY_API = "http://localhost:8010/api/category/v1";
const PLP_API = "http://localhost:8040/api/plp/v1";
const PDP_API = "http://localhost:8040/api/pdp/v1";

const SESSION_ID_KEY = "x-session-id";

async function getTransactionId() {
  const headersList = await headers();
  return headersList.get(SESSION_ID_KEY) ?? crypto.randomUUID();
}

// Common fetch wrapper so every Commerce API call carries the same
// x-session-id header the backend uses to track the session.
async function commerceFetch(url, options = {}) {
  const transactionId = await getTransactionId();

  return fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      [SESSION_ID_KEY]: transactionId,
    },
  });
}

async function fetchCategoryAPI(query) {
  const params = query ? `${query}&batchSize=100` : "batchSize=100";
  const url = `${CATEGORY_API}?${params}`;
  const response = await commerceFetch(url, { cache: "no-store" });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Category API error ${response.status}: ${error}`);
  }

  return response.json();
}

// Top-level categories (menu groupings, e.g. "Engagement Rings"). The API
// has no reliable "no parent" filter param, so this fetches everything and
// keeps only entries with no parentCategoryId -- anything WITH one is a
// subcategory and belongs in its parent's dropdown, not the main nav bar.
export async function getCategories(language = "de") {
  const res = await fetchCategoryAPI(`language=${language}`);
  return {
    ...res,
    data: (res.data || []).filter(
      (category) => !category.category_details?.parentCategoryId,
    ),
  };
}

// Leaf subcategories under a parent (the actual PLP-linked entries, e.g.
// "Solitaire" under "Engagement Rings").
export async function getSubCategories(parentCategoryId, language = "de") {
  const filterQuery = JSON.stringify({
    category_details: { isLastLevel: true },
  });
  const search = JSON.stringify({ pathToParent: parentCategoryId });

  const query = `filterQuery=${encodeURIComponent(filterQuery)}&search=${encodeURIComponent(search)}&language=${language}`;
  return fetchCategoryAPI(query);
}

// The PLP route is /{locale}/{categorySlug}/{subCategorySlug} -- slugs, not
// the categoryId/subCategoryId the Commerce PLP API actually needs. Walks
// the same category tree Navigation.jsx builds its links from and matches
// on the same slugify(displayName) it uses, to recover the real ids.
export async function resolveCategoryIds(categorySlug, subCategorySlug, language = "de") {
  const { data: categories = [] } = await getCategories(language);

  const category = categories.find(
    (c) =>
      slugify(
        c.category_details?.displayCategoryName?.en ??
          c.category_details?.categoryName ??
          "",
      ) === categorySlug,
  );
  if (!category) return null;

  const { data: subCategories = [] } = await getSubCategories(
    category.category_id,
    language,
  );
  const subCategory = subCategories.find(
    (sc) =>
      slugify(
        sc.category_details?.displayCategoryName?.en ??
          sc.category_details?.categoryName ??
          "",
      ) === subCategorySlug,
  );
  if (!subCategory) return null;

  return { categoryId: category.category_id, subCategoryId: subCategory.category_id };
}

export async function getPLP(categoryId, subCategoryId, language = "de") {
  const query = `categoryId=${categoryId}&subCategoryId=${subCategoryId}`;
  const response = await commerceFetch(`${PLP_API}/${language}?${query}`, { cache: "no-store" });
  
  if (!response.ok) {
    const error = await response.text();
    throw new Error(`PLP API error ${response.status}: ${error}`);
  }
  
  const { data } = await response.json();
  return data?.plp;
}

export async function getPDP(slug, sku, language = "de") {
  const query = `${slug}/${sku}`;
  const response = await commerceFetch(`${PDP_API}/${language}/design/${query}`);
  if (!response.ok) {
    const error = await response.text();
    throw new Error(`PDP API error ${response.status}: ${error}`);
  }

  // Keep the full `{status, data, meta}` envelope -- callers (page.js,
  // api/pdp/route.js) destructure `{ data, meta }` off the return value, so
  // `data` here must stay the whole payload, not just its `.data` field.
  const payload = await response.json();
  const selections = sku ? parseSku(payload.data.options, sku) : null;
  if (!selections) return payload;

  const options = payload.data.options.map((option) => {
    // Not encoded in the SKU (its current value has no valueCode yet) --
    // keep this option's original defaults untouched.
    if (!(option.name in selections)) return option;

    return {
      ...option,
      values: option.values.map((value) => ({
        ...value,
        isSelected: selections[option.name] === value.valueCode,
      })),
    };
  });

  return { ...payload, data: { ...payload.data, options } };
}
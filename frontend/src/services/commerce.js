// import plpResponse from "@/mock/cms/plpexperience";
import plpApiData from "@/mock/cms/plpApiData";

const CATEGORY_API = "http://localhost:8010/api/category/v1";

async function fetchCategoryAPI(query) {
  const url = query ? `${CATEGORY_API}?${query}` : CATEGORY_API;
  const response = await fetch(url, { cache: "no-store" });

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
export async function getCategories() {
  const res = await fetchCategoryAPI();

  return {
    ...res,
    data: (res.data || []).filter(
      (category) => !category.category_details?.parentCategoryId,
    ),
  };
}

// Leaf subcategories under a parent (the actual PLP-linked entries, e.g.
// "Solitaire" under "Engagement Rings").
export async function getSubCategories(parentCategoryId) {
  const filterQuery = JSON.stringify({
    category_details: { isLastLevel: true },
  });
  const search = JSON.stringify({ pathToParent: parentCategoryId });

  const query = `filterQuery=${encodeURIComponent(filterQuery)}&search=${encodeURIComponent(search)}`;
  return fetchCategoryAPI(query);
}


export async function getPLP(categoryId){
    return plpApiData;
}
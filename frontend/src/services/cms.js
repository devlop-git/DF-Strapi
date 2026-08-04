import axios from "axios";
import homePopulate from "./queries/homepage";
import plpPopulate from "./queries/plpPage";
import { parseSku } from "@/utils/buildSku";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_STRAPI_URL + "/api",
});

export async function getHomepage(locale, market) {
  const url = `/home-pages?filters[market][slug][$eq]=${market}&locale=${locale}&${homePopulate}`;
  const res = await api.get(url);
  if (res.status !== 200) {
    throw new Error("Failed to fetch homepage");
  }
  return res.data.data[0];
}

export async function getPLPExperience(locale) {
  const url = `/plp-pages?locale=${locale}&${plpPopulate}`;
  const res = await api.get(url);
  return res.data.data;
}

export async function getPDPExperience(slug, sku, language = "de") {
  const res = await api.get(`http://localhost:8040/api/pdp/v1/${language}/design/${slug}/${sku}`)
  const payload = res.data.data ? res.data : {}
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

export async function getMarket() {
  const res = await api.get("/markets");
  return res.data.data;
}

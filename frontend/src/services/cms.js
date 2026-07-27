import axios from "axios";
import homePopulate from "./queries/homepage";
import plpPopulate from "./queries/plpPage";
import pdpApiData from "@/mock/cms/pdpExperience";
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

// `sku` identifies the exact selected configuration (e.g.
// "CLRN349_MS03MT1600MFCT00ST0300SF0102000302"), built by utils/buildSku.
// A real Commerce/PIM PDP endpoint would return `options` with `isSelected`
// mirroring whatever sku was requested. This mock always holds one fixed
// combination, so every option click (which navigates to a new
// /design/{slug}/{sku} URL and re-fetches here) would otherwise come back
// with the SAME defaults and wipe out whatever the shopper just picked.
// We simulate the real behaviour by decoding `sku` and overriding
// `isSelected` to match it before returning.
export async function getPDPExperience(sku) {
  const payload = pdpApiData.data ? pdpApiData : { data: pdpApiData, meta: {} };

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

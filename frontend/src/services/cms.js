import axios from "axios";
import homePopulate from "./queries/homepage";
import plpPopulate from "./queries/plpPage";

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
  // const url = `/plp-pages?locale=${locale}&${plpPopulate}`;
  const url = `/plp-pages?locale=en&populate[plp_section][on][sections.feature-highlights][populate][items][populate][desktopIcon]=true&populate[plp_section][on][sections.feature-highlights][populate][items][populate][mobileIcon]=true&populate[plp_section][on][sections.feature-highlights][populate][items][populate][tabIcon]=true&populate[plp_section][on][plp.faq][populate][faqItem][populate]=%2A&populate[plp_section][on][plp.banner-info][populate]=%2A&populate[plp_section][on][plp.guide-section][populate][guideItem][populate][desktopIcon]=true&populate[plp_section][on][plp.guide-section][populate][guideItem][populate][mobileIcon]=true&populate[plp_section][on][plp.guide-section][populate][guideItem][populate][tabIcon]=true&populate[plp_section][on][plp.read-more-content][populate]=%2A&populate[plp_section][on][plp.banner-configuration][populate]=%2A&populate[plp_section][on][plp.product-listing][populate]=%2A`;
  const res = await api.get(url);
  return res.data.data;
}

export async function getMarket() {
  const res = await api.get("/markets");
  return res.data.data;
}

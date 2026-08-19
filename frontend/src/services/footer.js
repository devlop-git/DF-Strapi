import axios from "axios";
import footerPopulate from "./queries/footer";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_STRAPI_URL + "/api",
});

export async function getFooter(locale) {
  const res = await api.get(`/footer?locale=${locale}&${footerPopulate}`);

  return res.data.data;
}

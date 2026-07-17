import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_STRAPI_URL + "/api",
});

export async function getHeader(locale) {
  const res = await api.get(
    `/header?locale=${locale}&populate=*`
  );

  return res.data.data;
}
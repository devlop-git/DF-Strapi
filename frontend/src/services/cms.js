import axios from "axios";
import homePopulate from "./queries/homepage";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_STRAPI_URL + "/api",
});

export async function getHomepage(locale) {
  // const res = await api.get(
  //   `/homepage?locale=${locale}&populate=*`
  // );
  // const url = `/home-pages?locale=${locale}&${homePopulate}`;
  // const url = `/home-pages?filters[market][slug][$eq]=uk&locale=${locale}&${homePopulate}`;
  const url =
    "http://localhost:1337/api/home-pages?filters[market][slug][$eq]=germany&locale=de&populate=*";
  const res = await api.get(url);
  console.log(res.data);
  if (res.status !== 200) {
    throw new Error("Failed to fetch homepage");
  }

  return res.data.data[0];
}

export async function getPLPExperience(locale) {
  const res = await api.get(
    "http://localhost:1337/api/plp-experience?locale=en&populate=*",
  );
  return res.data.data;
}

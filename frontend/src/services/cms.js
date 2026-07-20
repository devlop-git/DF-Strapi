import axios from "axios";
import homePopulate from "./queries/homepage";
import plpPopulate from "./queries/plpPage";


const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_STRAPI_URL + "/api",
});

export async function getHomepage(locale,market) {
  const url = `/home-pages?filters[market][slug][$eq]=${market}&locale=${locale}&${homePopulate}`;
  const res = await api.get(url)
   if (res.status !== 200) {
        throw new Error("Failed to fetch homepage");
    }

    return res.data.data[0];

}

export async function getPLPExperience(locale){
  const url = `/plp-pages?locale=${locale}&${plpPopulate}`
  console.log(url);
  const res = await api.get(url);
  console.log('plp--',res.data.data);
  return res.data.data;
}

export async function getMarket(){
  const res= await api.get('/markets');
  return res.data.data;
}
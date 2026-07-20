import { getCookie } from "./cookie";

export async function getCurrentLocale() {
  const locale = await getCookie("language");

  return locale || "de";
}
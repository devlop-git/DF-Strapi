import { cookies } from "next/headers";

export async function getCookie(name) {
  const cookieStore = await cookies();
  return cookieStore.get(name)?.value;
}
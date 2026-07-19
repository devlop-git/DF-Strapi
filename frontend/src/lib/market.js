export async function getCurrentMarket() {
  return process.env.NEXT_PUBLIC_MARKET || "germany";
}
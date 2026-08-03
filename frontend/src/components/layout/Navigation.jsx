import React from "react"
import DesktopNavigation from "./DesktopNavigation"
import MobileNavigation from "./MobileNavigation"
import { getCategories, getSubCategories } from "@/services/commerce"

const Navigation = async ({ locale }) => {
  const categoryRes = await getCategories(locale)
  const categories = categoryRes.data

  const navigation = await Promise.all(
    categories?.map(async (category) => {
      const res = await getSubCategories(category.category_id, locale)

      return {
        ...category,
        children: res.data || [],
      }
    }),
  )

  return (
    <div>
      <div className="hidden lg:block">
        <DesktopNavigation navigation={navigation} />
      </div>
      <div className="block lg:hidden">
        <MobileNavigation navigation={navigation} />
      </div>
    </div>
  )
}

export default Navigation

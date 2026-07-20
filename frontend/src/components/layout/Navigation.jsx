import React from "react"
import DesktopNavigation from "./DesktopNavigation"
import MobileNavigation from "./MobileNavigation"
import { getCategories, getSubCategories } from "@/services/commerce"

const Navigation = async () => {
  const categoryRes = await getCategories()
  const categories = categoryRes.data

  const navigation = await Promise.all(
    categories?.map(async (category) => {
      const res = await getSubCategories(category.category_id)

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

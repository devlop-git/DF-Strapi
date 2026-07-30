import Link from "next/link";
import { FaAngleDown } from "react-icons/fa";
import { slugify } from "@/utils/slugify";

export default function Navigation({ locale, navigation = [] }) {
  if (!navigation?.length) return null;

  return (
    <nav className="hidden h-10 items-center justify-center lg:flex">
      <ul className="flex items-center">
        {navigation.map((category) => {
          const { category_id, category_details, children = [] } = category;

          const categoryName =
            category_details?.displayCategoryName?.en ??
            category_details?.categoryName ??
            "Category";

          return (
            <li key={category_id} className="group relative">
              {/* Parent Category: menu grouping only, not a real PLP page
                  (isLastLevel: false), so it's a hover trigger, not a link. */}
              <span className="flex h-10 items-center gap-1 px-5 text-[13px] font-medium uppercase tracking-wide text-[#111] transition-colors group-hover:text-[#A5744A]">
                {categoryName}

                {children.length > 0 && (
                  <FaAngleDown size={11} className="mt-[1px]" />
                )}
              </span>

              {/* Mega-menu panel: full-width strip below the bar, with a
                  "STYLE" column listing this category's real subcategories
                  (grouped by matching category_id -> parentCategoryId via
                  getSubCategories in services/commerce.js). Other mega-menu
                  columns (Stone/Shape/Metal/Price shortcuts, "Popular
                  Categories" imagery) aren't built yet -- that data comes
                  from the Commerce filter API / Strapi CMS, neither of
                  which is wired up here. */}
              {children.length > 0 && (
                <div
                  className="
                    invisible
                    absolute
                    left-0
                    top-full
                    z-50
                    w-130
                    translate-y-2
                    border
                    border-[#ECE6DE]
                    bg-white
                    opacity-0
                    shadow-2xl
                    transition-all
                    duration-300
                    group-hover:visible
                    group-hover:translate-y-0
                    group-hover:opacity-100
                  "
                >
                  <div className="px-8 py-6">
                    <p className="mb-4 text-xs font-semibold tracking-wide text-[#A5744A]">
                      STYLE
                    </p>
                    <ul className="grid grid-cols-3 gap-x-8 gap-y-4">
                      {children.map((subCategory) => {
                        const {
                          category_id: subCategoryId,
                          category_details: subCategoryDetails,
                        } = subCategory;

                        const subCategoryName =
                          subCategoryDetails?.displayCategoryName?.en ??
                          subCategoryDetails?.categoryName ??
                          "Sub Category";

                        return (
                          <li key={subCategoryId}>
                            <Link
                              href={`/${slugify(categoryName)}/${slugify(subCategoryName)}`}
                              className="text-sm text-gray-700 transition-colors hover:text-[#A5744A]"
                            >
                              {subCategoryName}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

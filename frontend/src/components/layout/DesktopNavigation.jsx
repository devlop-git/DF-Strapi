import Link from "next/link";
import { FaAngleDown } from "react-icons/fa";

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
              {/* Parent Category */}
              <Link
                href={`/plp/${category_id}`}
                className="flex h-10 items-center gap-1 px-5 text-[13px] font-medium uppercase tracking-wide text-[#111] transition-colors hover:text-[#A5744A]"
              >
                {categoryName}

                {children.length > 0 && (
                  <FaAngleDown size={11} className="mt-[1px]" />
                )}
              </Link>

              {/* Dropdown */}
              {children.length > 0 && (
                <div
                  className="
                    invisible
                    absolute
                    left-0
                    top-full
                    z-50
                    w-72
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
                  <ul className="py-2">
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
                            href={`/plp/${subCategoryId}`}
                            className="
                              block
                              px-6
                              py-3
                              text-sm
                              text-gray-700
                              transition-colors
                              hover:bg-[#F8F5F1]
                              hover:text-[#A5744A]
                            "
                          >
                            {subCategoryName}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

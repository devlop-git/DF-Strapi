// import Link from "next/link";
// import { FaAngleDown } from "react-icons/fa";

// import { getCategories, getSubCategories } from "@/services/commerce";

// export default async function Navigation({ locale }) {
//   const categoryRes = await getCategories();
//   const categories = categoryRes.data;

//   const navigation = await Promise.all(
//     categories.map(async (category) => {
//       const res = await getSubCategories(category.category_id);

//       return {
//         ...category,
//         children: res.data || [],
//       };
//     })
//   );

//   return (
//     <nav className="hidden lg:flex items-center justify-center gap-10">
//       {navigation.map((category) => (
//         <div
//           key={category.category_id}
//           className="group relative"
//         >
//           <Link
//             href={`/${locale}/plp/${category.category_id}`}
//             className="flex items-center gap-1 text-sm uppercase tracking-wide font-medium hover:text-amber-600 transition"
//           >
//             {category.category_details.displayCategoryName.en}

//             {category.children.length > 0 && (
//               <FaAngleDown size={15} />
//             )}
//           </Link>

//           {category.children.length > 0 && (
//             <div
//               className="
//               invisible
//               opacity-0
//               group-hover:visible
//               group-hover:opacity-100
//               transition-all
//               duration-200

//               absolute
//               left-0
//               top-full
//               mt-4

//               bg-black
//               rounded-md
//               shadow-xl
//               border

//               min-w-[260px]
//               z-50
//             "
//             >
//               <div className="py-3">
//                 {category.children.map((sub) => (
//                   <Link
//                     key={sub.category_id}
//                     href={`/${locale}/plp/${sub.category_id}`}
//                     className="block px-5 py-3 text-sm hover:bg-gray-100 hover:text-black transition"
//                   >
//                     {
//                       sub.category_details.displayCategoryName
//                         .en
//                     }
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>
//       ))}
//     </nav>
//   );
// }
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa";

import {
  getCategories,
  getSubCategories,
} from "@/services/commerce";

export default async function Navigation({ locale }) {
  const categoryRes = await getCategories();
  const categories = categoryRes.data;

  const navigation = await Promise.all(
    categories?.map(async (category) => {
      const res = await getSubCategories(category.category_id);

      return {
        ...category,
        children: res.data || [],
      };
    })
  );

  return (
    <nav className="hidden lg:flex items-center justify-center h-16">
      <ul className="flex items-center">
        {navigation?.map((category) => (
          <li
            key={category.category_id}
            className="group relative"
          >
            {/* Parent Category */}
            <Link
              href={`/${locale}/plp/${category.category_id}`}
              className="
                flex
                items-center
                gap-1
                px-5
                h-16
                text-[13px]
                uppercase
                tracking-wide
                font-medium
                text-[#111]
                hover:text-[#A5744A]
                transition-colors
              "
            >
              {category.category_details.displayCategoryName.en}

              {category.children.length > 0 && (
                <FaAngleDown
                  size={11}
                  className="mt-[1px]"
                />
              )}
            </Link>

            {/* Dropdown */}
            {category.children.length > 0 && (
              <div
                className="
                  absolute
                  left-0
                  top-full
                  w-72

                  invisible
                  opacity-0
                  translate-y-2

                  group-hover:visible
                  group-hover:opacity-100
                  group-hover:translate-y-0

                  transition-all
                  duration-300

                  bg-white
                  border
                  border-[#ECE6DE]
                  shadow-2xl
                  z-50
                "
              >
                <div className="py-2">
                  {category.children.map((sub) => (
                    <Link
                      key={sub.category_id}
                      href={`/${locale}/plp/${sub.category_id}`}
                      className="
                        block
                        px-6
                        py-3

                        text-sm
                        text-gray-700

                        hover:bg-[#F8F5F1]
                        hover:text-[#A5744A]

                        transition-colors
                      "
                    >
                      {
                        sub.category_details
                          .displayCategoryName.en
                      }
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
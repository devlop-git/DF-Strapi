import categoriesMockData from "@/mock/commerce/categories";
import subcategoriesResponse from "@/mock/commerce/subcategories";
// import plpResponse from "@/mock/cms/plpexperience";
import plpApiData from "@/mock/cms/plpApiData";

const API = "https://app-center.nevejewels.com/apapi/mdm/category/getAll";

async function fetchAPI(endpoint) {
  const response = await fetch(`${API}${endpoint}`, {
    cache: "no-store",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",

      Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEVE_TOKEN}`,

      entityId:
        "ECO-PROCU-20240518000000-OTH-00001/ECO-NEVEJ-20251104053811-OTH-000001/COM-NAVGR-20251112093649-OTH-000001/COR-MUMBA-20251112102322-OTH-000002",
      roleId: "ROLE-003",
      isCompress: "false"
    },
  });

  if (!response.ok) {
     const error = await response.text();
    throw new Error(`API Error ${response.status}: ${error}`);
  }

  return response.json();
}

// Categories
export async function getCategories() {
//     const filterQuery = {
//         category_details: {
//             isLastLevel: false,
//             pathToParent: "",
//         }
//     }

//     const params = new URLSearchParams({
//         filterQuery: JSON.stringify(filterQuery),
//     });
//   return fetchAPI(`?${params.toString()}`);
    return categoriesMockData;
}

// sub
export async function getSubCategories(parentCategoryId) {
//   const filterQuery = {
//     category_details: {
//       isLastLevel: true,
//       pathToParent: parentId,
//     }
//   };

//   const params = new URLSearchParams({
//     filterQuery: JSON.stringify(filterQuery),
//   });

//   return fetchAPI(`?${params.toString()}`);
    return {
    ...subcategoriesResponse,
    data: subcategoriesResponse.data.filter(
      (item) =>
        item.category_details.parentCategoryId === parentCategoryId
    ),
  };
}


export async function getPLP(categoryId){
    return plpApiData;
}
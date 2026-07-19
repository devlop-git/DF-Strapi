export function reorderFilters(filters = [], order = []) {

  if (!order.length) return filters;

  const filterMap = new Map(
    filters?.map(filter => [filter.code, filter])
  );

  const orderedFilters = [];

  // Add filters according to Strapi order
  order.forEach(code => {
    if (filterMap.has(code)) {
      orderedFilters.push(filterMap.get(code));
      filterMap.delete(code);
    }
  });

  // Append remaining filters
  orderedFilters.push(...filterMap.values());

  return orderedFilters;
}
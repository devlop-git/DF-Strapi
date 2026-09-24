import ringSizeChartFallback from "@/data/ringSizeChart.json";
import jewelleryCarePlanFallback from "@/data/jewelleryCarePlanTable.json";

// Keyed by (lowercased) `heading` so multiple placeholder tables can coexist
// without one's fallback data leaking into another's empty table.
const TABLE_FALLBACKS_BY_HEADING = {
  [ringSizeChartFallback.heading.toLowerCase()]: ringSizeChartFallback,
  [jewelleryCarePlanFallback.heading.toLowerCase()]: jewelleryCarePlanFallback,
};

// Generic Strapi-driven table: `columns` + `rows` (each row's `values[i]`
// lines up with `columns[i]` by position) covers both a label/value matrix
// (protection-plan pricing, `highlightFirstColumn: true`) and a plain
// reference table (ring-size chart, `highlightFirstColumn: false`).
// `groupsCount` splits the rows evenly across that many side-by-side tables
// that repeat the same column headers, for long lists like the ring chart.
function TableGroup({ columns, rows, highlightFirstColumn, headerColor, highlightColumnColor }) {
  return (
    <table className="w-full min-w-[300px] border-collapse overflow-hidden rounded-md border border-[#E5E0DA] text-sm">
      <thead>
        <tr style={{ backgroundColor: headerColor }} className="text-white">
          {columns.map((column, index) => (
            <th
              key={column?.id ?? index}
              className={`px-4 py-4 font-medium ${
                index === 0 && highlightFirstColumn ? "text-left" : "text-center"
              }`}
            >
              {column?.label}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={row?.id ?? rowIndex} className="border-b border-[#E5E0DA] last:border-b-0">
            {columns.map((column, colIndex) => {
              const value = row?.values?.[colIndex]?.value;

              if (colIndex === 0 && highlightFirstColumn) {
                return (
                  <th
                    key={column?.id ?? colIndex}
                    scope="row"
                    style={{ backgroundColor: highlightColumnColor }}
                    className="px-4 py-4 text-left font-medium text-white"
                  >
                    {value}
                  </th>
                );
              }

              return (
                <td
                  key={column?.id ?? colIndex}
                  className="px-4 py-4 text-center text-[#171717]"
                >
                  {value}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// TEMPORARY: some tables' rows will eventually come from a real API/data
// entry -- until that's wired up, fall back to static JSON (matched by
// `heading`) whenever a table's CMS `columns`/`rows` are empty. Remove each
// fallback once its real data source is integrated.
export default function ComparisonTable({ data }) {
  const fallback = TABLE_FALLBACKS_BY_HEADING[data?.heading?.toLowerCase()];
  const columns = data?.columns?.length ? data.columns : fallback?.columns || [];
  const rows = data?.rows?.length ? data.rows : fallback?.rows || [];
  const highlightFirstColumn = data?.highlightFirstColumn !== false;
  const groupsCount = Math.max(1, data?.groupsCount || 1);
  const headerColor = data?.headerColor || "#A0704F";
  const highlightColumnColor = data?.highlightColumnColor || "#A0704F";

  const chunkSize = Math.ceil(rows.length / groupsCount);
  const groups = Array.from({ length: groupsCount }, (_, i) =>
    rows.slice(i * chunkSize, (i + 1) * chunkSize)
  ).filter((group) => group.length > 0);

  return (
    <section className="w-full">
      <div className="max-w-6xl mx-auto px-6">
        {data?.heading && (
          <h2 className="font-serif text-[28px] lg:text-[36px] font-light text-[#171717] leading-tight">
            {data.heading}
          </h2>
        )}

        {data?.description && (
          <p className="mt-4 max-w-3xl text-base leading-7 text-[#4B4B4B]">
            {data.description}
          </p>
        )}

        <div className="mt-8 flex flex-col gap-6 overflow-x-auto md:flex-row">
          {groups.map((groupRows, groupIndex) => (
            <div key={groupIndex} className="flex-1">
              <TableGroup
                columns={columns}
                rows={groupRows}
                highlightFirstColumn={highlightFirstColumn}
                headerColor={headerColor}
                highlightColumnColor={highlightColumnColor}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

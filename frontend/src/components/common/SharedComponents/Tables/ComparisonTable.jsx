// Generic Strapi-driven table: `columns` + `rows` (each row's `values[i]`
// lines up with `columns[i]` by position) covers both a label/value matrix
// (protection-plan pricing, `highlightFirstColumn: true`) and a plain
// reference table (ring-size chart, `highlightFirstColumn: false`).
// `groupsCount` splits the rows evenly across that many side-by-side tables
// that repeat the same column headers, for long lists like the ring chart.
function TableGroup({ columns, rows, highlightFirstColumn }) {
  return (
    <table className="w-full min-w-[420px] border-collapse overflow-hidden rounded-md border border-[#E5E0DA] text-sm">
      <thead>
        <tr className="bg-[#A0704F] text-white">
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
                    className="bg-[#A0704F] px-4 py-4 text-left font-medium text-white"
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

export default function ComparisonTable({ data }) {
  const columns = data?.columns || [];
  const rows = data?.rows || [];
  const highlightFirstColumn = data?.highlightFirstColumn !== false;
  const groupsCount = Math.max(1, data?.groupsCount || 1);

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

        <div className="mt-8 flex flex-col gap-6 overflow-x-auto md:flex-row">
          {groups.map((groupRows, groupIndex) => (
            <div key={groupIndex} className="flex-1">
              <TableGroup
                columns={columns}
                rows={groupRows}
                highlightFirstColumn={highlightFirstColumn}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

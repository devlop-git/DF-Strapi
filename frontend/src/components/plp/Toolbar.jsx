export default function Toolbar({
  totalProducts,
  selectedSort,
  sortOptions,
  onSortChange,
  config,
}) {
  if (!config) return null;

  return (
    <div className="flex items-center justify-between py-4 border-b mb-8">
      <div className="text-sm text-gray-600">
        {config.showProductCount && (
          <span>{totalProducts} Products</span>
        )}
      </div>

      {config.showSort && (
        <div className="flex items-center gap-3">
          <span className="text-sm">
            Sort By
          </span>

          <select
            value={selectedSort}
            onChange={(e) => onSortChange(e.target.value)}
            className="border rounded-md px-3 py-2 text-sm"
          >
            {sortOptions.map((option) => (
              <option
                key={option.id}
                value={option.id}
              >
                {option.label}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
}
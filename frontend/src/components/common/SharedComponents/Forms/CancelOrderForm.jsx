const REASONS_FOR_WITHDRAW = [
  "Item no longer needed",
  "Ordered by mistake",
  "Item does not match description",
  "Received wrong item",
  "Item arrived damaged or faulty",
  "Other",
];

const inputClass =
  "w-full border-0 border-b border-[#A5744A] bg-transparent focus:outline-none focus:border-black py-2";

export default function CancelOrderForm({ data }) {
  return (
    <section className="w-full bg-[#FAF7F2] mt-10">
      <div className="max-w-xl mx-auto px-6 py-14 lg:py-10">
        <div className="bg-white px-6 py-10 lg:px-12 lg:py-6 shadow-sm">
          {data?.heading && (
            <h2 className="font-serif text-[28px] text-center font-light text-[#111] mb-8">
              {data.heading}
            </h2>
          )}

          <form className="space-y-8">
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-700">
                  Order Number <span className="text-red-600">*</span>
                </label>
                <input type="text" required className={inputClass} />
              </div>

              <div>
                <label className="block text-sm text-gray-700">
                  Email Address <span className="text-red-600">*</span>
                </label>
                <input type="email" required className={inputClass} />
              </div>

              <div>
                <label className="block text-sm text-gray-700">
                  Date Product Received - needs to be 14 days or less{" "}
                  <span className="text-red-600">*</span>
                </label>
                <input type="date" required className={inputClass} />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-serif text-2xl text-center text-[#111]">
                Product Details
              </h3>

              <div>
                <label className="block text-sm text-gray-700">
                  Reason for Withdraw
                </label>
                <select defaultValue="" className={inputClass}>
                  <option value="" disabled hidden />
                  {REASONS_FOR_WITHDRAW.map((reason) => (
                    <option key={reason} value={reason}>
                      {reason}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  Notes
                </label>
                <textarea
                  rows={4}
                  placeholder="Enter the item details that you are returning"
                  className="w-full border border-[#A5744A] bg-transparent p-3 focus:outline-none focus:border-black"
                />
              </div>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-[#A5744A] text-white px-10 py-3 font-medium hover:bg-[#8D6642] transition-colors"
              >
                {data?.btnLabel || "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

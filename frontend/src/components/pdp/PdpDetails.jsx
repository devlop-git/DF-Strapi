"use client";

// This is the client boundary for the whole right-hand column: it owns the
// shopper's live `selections` state (one entry per option name -> chosen
// valueCode) so the configurator pills/dropdowns above AND the
// "Ring & Diamond Details" accordion below always show the same picture.
//
// Flow:
//   1. `selections` starts from each option's `isSelected` default (see
//      initialSelections in utils/buildSku).
//   2. Clicking a pill/swatch in <PdpConfigurator /> calls `selectOption`,
//      which updates `selections` here.
//   3. Every render, `buildSku` re-encodes the full `selections` map into
//      the CLRN.../SKU string, and we navigate to /design/{slug}/{sku} with
//      it. That's a real route change (not just a query string), so Next
//      re-runs the PDP Server Component and re-fetches the PDP API for the
//      newly selected configuration on every option click.
//   4. <PdpProductDetails /> reads the same `selections` to display the
//      live Metal/Colour/Clarity/etc. values further down the page.
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { FiChevronDown } from "react-icons/fi";
import { LuTruck } from "react-icons/lu";
import { RiShieldCheckLine } from "react-icons/ri";
import OutlineButton from "@/components/common/OutlineButton";
import PdpConfigurator from "./PdpConfigurator";
import PdpProductDetails from "./PdpProductDetails";
import PdpInStockTable from "./PdpInStockTable";
import { buildSku, initialSelections } from "@/utils/buildSku";
import { formatPrice } from "@/utils/formatPrice";

export default function PdpDetails({
  basicDetails,
  priceInformation,
  options,
  meta,
  bomDetails,
  inStockProducts,
  currentSku,
}) {
  const router = useRouter();

  // Which top tab is active: the build-your-own configurator, or the
  // ready-to-ship variants table. Only one of the two option blocks below
  // renders at a time; everything after it (appointments/delivery/details)
  // stays visible regardless of tab.
  const [activeTab, setActiveTab] = useState("customise");

  // Single source of truth for every option the shopper has chosen so far.
  const [selections, setSelections] = useState(() =>
    initialSelections(options),
  );

  const selectOption = (option, valueCode) =>
    setSelections((prev) => ({ ...prev, [option.name]: valueCode }));

  // Re-encode the SKU whenever a selection changes.
  const sku = useMemo(
    () => buildSku(options, meta?.designReference, selections),
    [options, meta?.designReference, selections],
  );

  // Navigate to /design/{slug}/{sku} for the newly selected configuration.
  // This is a real route change (different dynamic segment), so Next
  // re-runs the PDP page Server Component and calls getPDPExperience(sku)
  // again -- i.e. every option click re-fetches the PDP API.
  //
  // Every navigation remounts this component with fresh `options`, which
  // already reflect the sku that was just requested (the API echoes back
  // isSelected matching it). So on mount, the sku we (re)compute here is
  // normally IDENTICAL to `currentSku` (the one already in the URL) -- if we
  // navigated again anyway, it'd be a second, redundant API call for the
  // exact same configuration. Only navigate when the shopper has actually
  // picked something different from what's already loaded.
  useEffect(() => {
    if (!sku || !meta?.slug || sku === currentSku) return;
    router.replace(`/design/${meta.slug}/${sku}`, { scroll: false });
  }, [sku, currentSku, meta?.slug, router]);

  const currency = priceInformation?.currency;
  const salePrice = priceInformation?.totalPrice;
  const listPrice = priceInformation?.listPrice;
  const promotion = priceInformation?.promotion;
  const onSale = listPrice > salePrice;

  const title =
    basicDetails?.name ||
    `${basicDetails?.subCategory ?? ""} ${basicDetails?.category ?? ""}`.trim();
  const productCode = (
    basicDetails?.productCode ||
    meta?.slug ||
    ""
  ).toUpperCase();

  return (
    <div className="space-y-5 p-4 bg-[#FAF7F2]">
      {/* Title + code */}
      <div className="flex items-start justify-between gap-4">
        <h1 className="text-2xl font-semibold text-[#1F1F1F]">{title}</h1>
        {productCode && (
          <span className="whitespace-nowrap pt-2 text-xs text-gray-500">
            Product Code: {productCode}
          </span>
        )}
      </div>

      {/* Price */}
      <div className="flex items-baseline gap-3">
        <span className="text-xl font-semibold text-[#9C6D4B]">
          {formatPrice(salePrice, currency)}
        </span>
        {onSale && (
          <span className="text-sm text-gray-400 line-through">
            {formatPrice(listPrice, currency)}
          </span>
        )}
        {onSale && <span className="text-xs text-[#9C6D4B]">Sale Price</span>}
      </div>

      {/* Promotion banner */}
      {promotion?.description && (
        <div className="bg-[#9C6D4B] px-4 py-3 text-center text-white">
          <p className="text-sm font-medium">{promotion.description}</p>
          <p className="text-[11px] underline">*T&amp;C&apos;s Apply</p>
        </div>
      )}

      {/* Tabs: switch between the build-your-own configurator and the
          ready-to-ship "In-Stock Products" table below. */}
      <div className="flex gap-8 border-b border-[#E8DDCF] text-sm">
        <button
          type="bustton"
          onClick={() => setActiveTab("customise")}
          className={`pb-2 ${
            activeTab === "customise"
              ? "border-b-2 border-[#9C6D4B] font-semibold text-[#1F1F1F]"
              : "text-[#9A8B78]"
          }`}
        >
          Customise Your Product
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("inStock")}
          className={`pb-2 ${
            activeTab === "inStock"
              ? "border-b-2 border-[#9C6D4B] font-semibold text-[#1F1F1F]"
              : "text-[#9A8B78]"
          }`}
        >
          In-Stock Products
        </button>
      </div>

      {activeTab === "customise" ? (
        <>
          {/* Configurator: renders option rows, reports clicks via onSelect */}
          <PdpConfigurator
            options={options}
            selections={selections}
            onSelect={selectOption}
            sku={sku}
          />

          {/* Couldn't find the right stone */}
          <button
            type="button"
            className="flex w-full items-center justify-between border border-[#E8DDCF] bg-[#F7F2EB] px-4 py-4 text-left"
          >
            <span>
              <span className="block text-sm font-semibold text-[#1F1F1F]">
                Couldn&apos;t find the right stone?
              </span>
              <span className="block text-xs text-[#9C6D4B] underline">
                Choose a specific diamond
              </span>
            </span>
            <FiChevronDown className="text-[#9C7A58]" />
          </button>

          {/* Add to bag */}
          <button
            type="button"
            className="w-full bg-[#9C6D4B] py-4 text-sm font-semibold uppercase text-white transition-colors hover:bg-[#835a3d]"
          >
            Add to Bag ({formatPrice(salePrice, currency)})
          </button>
        </>
      ) : (
        // Pre-configured, ready-to-ship variants: one row = one orderable
        // ornament, each with its own Buy button instead of a shared
        // configurator + single Add to Bag button.
        <PdpInStockTable
          products={inStockProducts}
          ringSizeOption={options?.find((o) => o.name === "Ring Size")}
          currency={currency}
        />
      )}

      {/* Appointment buttons */}
      <div className="grid grid-cols-2 gap-4">
        <OutlineButton className="h-[52px] w-full text-sm">
          Request An Appointment
        </OutlineButton>
        <OutlineButton className="h-[52px] w-full text-sm">
          Book A Video Appointment
        </OutlineButton>
      </div>

      {/* Delivery / policies */}
      <div className="space-y-2 pt-2 text-sm">
        <p className="flex items-center gap-2">
          <LuTruck className="text-[#9C7A58]" />
          Estimated Delivery 2-3 working weeks.
        </p>
        <p className="flex items-center gap-2">
          <RiShieldCheckLine className="text-[#9C7A58]" />
          Shipping and Return Policies
        </p>
      </div>

      {/* Product Description + Ring & Diamond Details collapsibles */}
      <PdpProductDetails
        description={basicDetails?.description}
        bomDetails={bomDetails}
        meta={meta}
        options={options}
        selections={selections}
      />
    </div>
  );
}

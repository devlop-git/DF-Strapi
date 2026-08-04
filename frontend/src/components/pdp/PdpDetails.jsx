"use client";

import { useEffect, useMemo, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { LuTruck } from "react-icons/lu";
import { RiShieldCheckLine } from "react-icons/ri";
import OutlineButton from "@/components/common/OutlineButton";
import PendingOverlay from "@/components/common/PendingOverlay";
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
  const [pdpData, setPdpData] = useState({
    basicDetails,
    priceInformation,
    bomDetails,
    inStockProducts,
  });

  const [loadedSku, setLoadedSku] = useState(currentSku);

  // True while a filter-change fetch is in flight.
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("customise");

  // Single source of truth for every option the shopper has chosen so far.
  const [selections, setSelections] = useState(() =>
    initialSelections(options),
  );

  const selectOption = (option, valueCode) =>
    setSelections((prev) => ({ ...prev, [option.name]: valueCode }));

  const sku = useMemo(
    () => buildSku(options, meta?.designReference, selections),
    [options, meta?.designReference, selections],
  );

  useEffect(() => {
    if (!sku || !meta?.slug || sku === loadedSku) {
      setIsLoading(false);
      return;
    }

    let cancelled = false;
    setIsLoading(true);

    fetch(`/api/pdp/${meta.slug}/${sku}?language=${meta.locale}`)
      .then((res) => res.json())
      .then(({ data }) => {
        if (cancelled) return;
        setPdpData({
          basicDetails: data.basicDetails,
          priceInformation: data.priceInformation,
          bomDetails: data.bomDetails,
          inStockProducts: data.inStockProducts,
        });
        setLoadedSku(sku);
        window.history.replaceState(null, "", `/design/${meta.slug}/${sku}`);
      })
      .finally(() => {
        if (!cancelled) setIsLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [sku, loadedSku, meta?.slug]);

  const currency = pdpData.priceInformation?.currency;
  const salePrice = pdpData.priceInformation?.totalPrice;
  const listPrice = pdpData.priceInformation?.listPrice;
  const promotion = pdpData.priceInformation?.promotion;
  const onSale = listPrice > salePrice;

  const title =
    pdpData.basicDetails?.name ||
    `${pdpData.basicDetails?.subCategory ?? ""} ${pdpData.basicDetails?.category ?? ""}`.trim();
  const productCode = (
    pdpData.basicDetails?.productCode ||
    meta?.slug ||
    ""
  ).toUpperCase();

  return (
    <div className="space-y-5 p-4 bg-[#FAF7F2]">
      <PendingOverlay visible={isLoading} />

      {/* Title + code */}
      <div className="flex items-start justify-between gap-4">
        <h1 className="text-2xl font-semibold text-[#1F1F1F]">{title}</h1>
        {productCode && (
          <span className="whitespace-nowrap pt-2 text-xs text-gray-900">
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
          type="button"
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
          products={pdpData.inStockProducts}
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
        description={pdpData.basicDetails?.description}
        bomDetails={pdpData.bomDetails}
        meta={meta}
        options={options}
        selections={selections}
      />
    </div>
  );
}

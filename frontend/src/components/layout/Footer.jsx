import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getFooter } from "@/services/footer";
import { getFooterPages } from "@/services/cms";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import MarketDropdown from "@/components/layout/MarketDropdown";
import { getCurrentLocale } from "@/lib/locale";
import { getCurrentMarket } from "@/lib/market";
import {getStrapiMedia} from "@/utils/strapi";

// Renders one column's business-managed static-page links. Pages flag
// themselves into a footer column in Strapi (`show_in_footer` +
// `footer_column`) -- no separate list to maintain, no code change needed
// as pages are added.
function FooterPageLinks({ pages }) {
  return (pages || []).map((page) => (
    <li key={page.path}>
      <Link href={page.path}>{page.title}</Link>
    </li>
  ));
}

const Footer = async () => {
  const locale = await getCurrentLocale();
  const market = await getCurrentMarket();
  const footerData = await getFooter(locale);
  const footerPages = await getFooterPages(locale, market);
  const columns = footerData.columns || [];

  // "Shop From" (the market dropdown) is itself a footer-column entry
  // (`key: "shop_from"`) so business users can toggle it off via its
  // `active` flag, same as any other column -- `getFooter` only returns
  // active columns, so its absence here already means it's been switched off.
  const shopFromColumn = columns.find((column) => column.key === "shop_from");
  const staticColumns = columns.filter((column) => column.key !== "shop_from");


  return (
    <div className="bg-[#171715] text-white mt-6">
      <div className="max-w-7xl mx-auto px-8 py-14">
        {/* Top Footer */}

        <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-12">
          {/* Brand */}

          <div>
             <Image src={getStrapiMedia(footerData?.logo)} alt="Logo" width={150} height={50} />

            <div className="flex gap-4 my-10">
              <a
                href={footerData.InstagramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500 transition"
              >
                <FaInstagram size={20} />
              </a>

              <a
                href={footerData.FacebookURL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition"
              >
                <FaFacebookF size={18} />
              </a>
            </div>
          </div>

          {/* Business-managed columns -- heading text, count, and order all
              come from Strapi (`footer.columns`), no hardcoded list here. */}

          {staticColumns.map((column) => (
            <div key={column.documentId}>
              <h3 className="font-semibold uppercase mb-6">{column.heading}</h3>

              <ul className="space-y-3 text-gray-300">
                <FooterPageLinks pages={footerPages[column.documentId]} />
              </ul>
            </div>
            ))
          }

          {shopFromColumn && (
            <div>
              <h3 className="font-semibold uppercase mb-6">{shopFromColumn.heading}</h3>

              <MarketDropdown market={market} />
            </div>
          )}
        </div>

        {/* Bottom */}

        <div className="border-t border-gray-700 mt-14 pt-8">
          <div className="flex flex-col lg:flex-row justify-between gap-6">
            <div className="flex flex-wrap gap-6 text-sm">
              <a
                href={footerData.PrivacyURL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                Privacy Policy
              </a>

              <a
                href={footerData.TermsURL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                Terms & Conditions
              </a>
            </div>

            <p className="text-xs text-gray-400 max-w-3xl">
              {footerData.Copyright}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import Link from "next/link";
import { getFooter } from "@/services/footer";
import { getFooterPages } from "@/services/cms";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import { getCurrentLocale } from "@/lib/locale";
import { getCurrentMarket } from "@/lib/market";

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

  return (
    <div className="bg-[#171715] text-white mt-6">
      <div className="max-w-7xl mx-auto px-8 py-14">
        {/* Top Footer */}

        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* About */}

          <div>
            <h3 className="font-serif text-xl mb-6 leading-tight">
              Diamonds
              <br />
              Factory
            </h3>

            <div className="flex gap-4 mb-10">
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

          {/* About links */}

          <div>
            <h3 className="font-semibold uppercase mb-6">About</h3>

            <ul className="space-y-3 text-gray-300">
              <FooterPageLinks pages={footerPages.about} />
              <li>Our Story</li>
              <li>Visit Our Stores</li>
              <li>Book An Appointment</li>
              <li>Blog</li>
              <li>Gift Cards</li>
              <li>Student Discount</li>
            </ul>
          </div>

          {/* Services & Care */}

          <div>
            <h3 className="font-semibold uppercase mb-6">Services & Care</h3>

            <ul className="space-y-3 text-gray-300">
              <FooterPageLinks pages={footerPages.services} />
              <li>30-Day Free Ring Resizing</li>
              <li>Made To Order Jewellery</li>
              <li>Exercise Your Right Of Withdrawal</li>
              <li>Lifetime Manufacturing Guarantee</li>
            </ul>
          </div>

          {/* Help & Support */}

          <div>
            <h3 className="font-semibold uppercase mb-6">Help & Support</h3>

            <ul className="space-y-3 text-gray-300">
              <li>FAQs</li>
              <li>Delivery</li>
              <li>Track Your Order</li>
              <li>Refunds & Returns</li>
              <li>Ring Size Guide</li>
              <li>Contact Us</li>
              <FooterPageLinks pages={footerPages.help} />
            </ul>
          </div>

          {/* Shop From */}

          <div>
            <h3 className="font-semibold uppercase mb-6">Shop From</h3>

            <button className="flex items-center gap-2 text-gray-300">
              <span>You&apos;re in: {market}</span>
              <FiChevronDown size={16} />
            </button>
          </div>
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

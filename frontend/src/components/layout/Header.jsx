import Image from "next/image";
import Link from "next/link";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaRegCalendarAlt,
  FaSearch,
  FaRegUser,
  FaHeart,
  FaShoppingBag,
} from "react-icons/fa";

import { getHeader } from "@/services/header";
import { getStrapiMedia } from "@/utils/strapi";
import Navigation from "./Navigation";

const Header = async ({ params }) => {
  const { locale } = await params;

  const headerData = await getHeader(locale);

  const logo = headerData?.Logo?.[0];

  return (
    <header className="sticky top-0 z-50 bg-white text-black shadow-sm">
      {/* Top Row */}
      <div className="border-b border-[#E8DDCF]">
        <div className="max-w-[1700px] mx-auto flex h-16 md:h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Left */}
          <div className="flex items-center gap-3 md:gap-6">
            <button className="hover:text-[#A5744A] transition">
              <FaPhoneAlt className="text-lg md:text-2xl" />
            </button>

            <button className="hover:text-[#A5744A] transition">
              <FaMapMarkerAlt className="text-lg md:text-2xl" />
            </button>

            {/* Hide calendar on mobile */}
            <button className="hidden sm:block hover:text-[#A5744A] transition">
              <FaRegCalendarAlt className="text-lg md:text-2xl" />
            </button>
          </div>

          {/* Logo */}
          <Link href="/">
            {logo && (
              <Image
                src={getStrapiMedia(logo)}
                alt={logo.alternativeText || "Logo"}
                width={logo.width}
                height={logo.height}
                priority
                className="h-8 w-auto object-contain sm:h-10 md:h-12"
              />
            )}
          </Link>

          {/* Right */}
          <div className="flex items-center gap-3 md:gap-6">
            {/* Hide language text on mobile */}
            <button className="hidden md:flex items-center gap-2 text-sm font-medium uppercase">
              <span className="text-xl">🇩🇪</span>
              Deutsch
            </button>

            <button className="hover:text-[#A5744A]">
              <FaSearch className="text-lg md:text-2xl" />
            </button>

            <button className="hover:text-[#A5744A]">
              <FaRegUser className="text-lg md:text-2xl" />
            </button>

            {/* Hide wishlist on very small screens */}
            <button className="hidden sm:block hover:text-[#A5744A]">
              <FaHeart className="text-lg md:text-2xl" />
            </button>

            <button className="hover:text-[#A5744A]">
              <FaShoppingBag className="text-lg md:text-2xl" />
            </button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="border-b border-[#E8DDCF]">
        <div className="max-w-[1700px] mx-auto overflow-x-auto px-4 sm:px-6 lg:px-8">
          <Navigation locale={locale} />
        </div>
      </div>
    </header>
  );
};

export default Header;

import Image from "next/image";
import Link from "next/link";
import { LANGUAGES } from "@/constants/languages";
import { MARKET } from "@/constants/market"; 
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
import LanguageDropdown from "../homePage/LanguageDropdown";
import { getCurrentLocale } from "@/lib/locale";


const Header = async () => {
  const locale = await getCurrentLocale();
  const headerData = await getHeader(locale);

  const languages = LANGUAGES[MARKET];
 
  const logo = headerData?.Logo[0];

  return (
    <header className="sticky top-0 z-50 bg-white text-black shadow-sm">

      {/* Top Row */}

      <div className="border-b border-[#E8DDCF]">
        <div className="max-w-[1700px] mx-auto h-[72px] px-8 flex items-center justify-between">

          {/* Left */}

          <div className="flex items-center gap-8">

            <button className="hover:text-[#A5744A] transition">
              <FaPhoneAlt size={24} />
            </button>

            <button className="hover:text-[#A5744A] transition">
              <FaMapMarkerAlt size={24} />
            </button>

            <button className="hover:text-[#A5744A] transition">
              <FaRegCalendarAlt size={24} />
            </button>

          </div>

          {/* Logo */}
          <Link href="/">
            {logo && (
              <Image
                src={getStrapiMedia(logo)}
                alt={logo.alternativeText}
                width={logo.width}
                height={logo.height}
                priority
                className="h-12 w-auto object-contain"
              />
            )}
          </Link>

          {/* Right */}

          <div className="flex items-center gap-7">

            <LanguageDropdown languages={languages} />
            <button className="hover:text-[#A5744A]">
              <FaSearch size={24} />
            </button>

            <button className="hover:text-[#A5744A]">
              <FaRegUser size={24} />
            </button>

            <button className="hover:text-[#A5744A]">
              <FaHeart size={24} />
            </button>

            <button className="hover:text-[#A5744A]">
              <FaShoppingBag size={24} />
            </button>

          </div>

        </div>
      </div>

      {/* Navigation */}

      <div className="border-b border-[#E8DDCF]">

        <div className="max-w-[1700px] mx-auto">

          <Navigation locale={locale} />

        </div>

      </div>

    </header>
  );
};

export default Header;
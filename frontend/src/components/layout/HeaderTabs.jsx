import Image from "next/image";
import Link from "next/link";
import LanguageDropdown from "../homePage/LanguageDropdown";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaRegCalendarAlt,
  FaSearch,
  FaRegUser,
  FaHeart,
  FaShoppingBag,
} from "react-icons/fa";

const HeaderTabs = ({ logo, getStrapiMedia, languages }) => {
  return (
    <div className="lg:border-b lg:border-[#E8DDCF] ">
      <div className=" gap-x-1 mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left */}
        <div className="flex items-center gap-x-1  md:gap-6">
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
            <div className="relative w-50.25 h-[14px]">
              <Image
                src={getStrapiMedia(logo)}
                alt={logo?.alternativeText || "Logo"}
                fill
                className="object-contain"
                priority
              />
            </div>
          )}
        </Link>

        {/* Right */}

        <div className="flex items-center gap-7">
          <LanguageDropdown languages={languages} />
          <button className="hover:text-[#A5744A] hidden lg:block">
            <FaSearch className="text-lg md:text-2xl" />
          </button>

          <button className="hover:text-[#A5744A]  hidden lg:block">
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
  );
};

export default HeaderTabs;

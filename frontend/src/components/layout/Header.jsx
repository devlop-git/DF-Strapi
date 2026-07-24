import { LANGUAGES } from "@/constants/languages";
import { MARKET } from "@/constants/market";
import { getHeader } from "@/services/header";
import { getStrapiMedia } from "@/utils/strapi";
import Navigation from "./Navigation";
import HeaderTabs from "./HeaderTabs";
import { getCurrentLocale } from "@/lib/locale";
import TopAnnouncementBar from "./TopAnnouncementBar";

const Header = async () => {
  const locale = await getCurrentLocale();
  const headerData = await getHeader(locale);

  const languages = LANGUAGES[MARKET];

  const logo = headerData?.Logo[0];

  return (
    <>
      {/* Not sticky */}
      <TopAnnouncementBar />

      {/* Sticky */}
      <div className="sticky top-0 z-50 w-full bg-white">
        <header className="bg-white text-black shadow-sm">
          <div className="hidden lg:block">
            <HeaderTabs
              logo={logo}
              getStrapiMedia={getStrapiMedia}
              languages={languages}
            />
          </div>

          <div className="">
            <div className="px-4 sm:px-6 lg:px-8">
              <Navigation locale={locale} />
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;

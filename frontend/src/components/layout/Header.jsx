import { LANGUAGES } from "@/constants/languages"
import { MARKET } from "@/constants/market"
import { getHeader } from "@/services/header"
import { getStrapiMedia } from "@/utils/strapi"
import Navigation from "./Navigation"
import HeaderTabs from "./HeaderTabs"
import { getCurrentLocale } from "@/lib/locale"
import TopAnnouncementBar from "./TopAnnouncementBar"

const Header = async () => {
  const locale = await getCurrentLocale()
  const headerData = await getHeader(locale)

  const languages = LANGUAGES[MARKET]

  const logo = headerData?.Logo[0]

  return (
    <div>
      <TopAnnouncementBar />
      <header className="sticky  top-0 z-50 bg-white text-black shadow-sm">
        {/* Top Row */}

        <div>
          <div className="hidden lg:block">
            <HeaderTabs
              logo={logo}
              getStrapiMedia={getStrapiMedia}
              languages={languages}
            />
          </div>
          {/* Navigation */}
          <div className="border-b border-[#E8DDCF]">
            <div className="max-w-[1700px] mx-auto overflow-x-auto px-4 sm:px-6 lg:px-8">
              <Navigation locale={locale} />
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header

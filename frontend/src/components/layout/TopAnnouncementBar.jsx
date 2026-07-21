"use client";

import Image from "next/image";
import Link from "next/link";

export default function TopAnnouncementBar() {
  return (
    <section className="w-full bg-[#1A1A18] text-white ">
      <div className=" min-h-10 flex justify-center items-center lg:hidden">
        <Link href="/sale" className="hover:underline text-base">
          SALE
        </Link>
      </div>
      <div className="mx-auto hidden lg:flex h-14  items-center overflow-x-auto whitespace-nowrap scrollbar-hide">
        <div className="flex items-center text-sm font-medium">
          {/* Sale */}
          <div className="px-5 uppercase tracking-wide">SALE</div>

          {/* Trustpilot */}
          <div className="flex items-center gap-3 ">
            <span className="text-[17px] font-bold">Hervorragend</span>

            <span className="text-[17px]">4.3 von 5</span>

            {/* Trustpilot */}
            {/* <Image
              src="/images/trustpilot-logo.svg"
              alt="Trustpilot"
              width={130}
              height={28}
              className="h-7 w-auto"
            /> */}
          </div>

          {/* Klarna */}
          <div className="flex items-center gap-3 px-5 uppercase">
            <span>Bezahlen Sie später mit</span>

            {/* <Image
              src="/images/klarna-logo.svg"
              alt="Klarna"
              width={95}
              height={24}
              className="h-6 w-auto"
            /> */}
          </div>

          <div className="px-5 uppercase">Preisanpassungsgarantie</div>

          <div className="px-5 uppercase">
            30 Tage kostenloses Rückgaberecht
          </div>

          <div className="px-5 uppercase">Lebenslange Garantie</div>
        </div>
      </div>
    </section>
  );
}

"use client"

import Link from "next/link"
import { useState } from "react"
import { HiBars3, HiXMark } from "react-icons/hi2"
import { FiChevronRight } from "react-icons/fi"
import HeaderTabs from "./HeaderTabs"

export default function MobileNavigation({ navigation = [], locale }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Hamburger Button */}
      <div className="lg:hidden flex min-h-16 items-center justify-between">
        <button
          onClick={() => setOpen(true)}
          aria-label="Open Menu"
          className="p-1"
        >
          <HiBars3 className="text-4xl text-[#111]" />
        </button>
        <h2 className="font-serif text-sm text-[#111]">DIAMONDS FACTORY</h2>
        <HeaderTabs />
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[999] transition-all duration-300 ${
          open ? "visible bg-black/40 opacity-100" : "invisible opacity-0"
        }`}
        onClick={() => setOpen(false)}
      >
        {/* Drawer */}
        <div
          onClick={(e) => e.stopPropagation()}
          className={`absolute left-0 top-0 h-full w-[90%] max-w-[420px] bg-white shadow-xl transition-transform duration-300 ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Header */}
          <div className="flex h-20 items-center justify-between border-b border-gray-200 px-6">
            <button onClick={() => setOpen(false)} aria-label="Close Menu">
              <HiXMark className="text-4xl text-[#111]" />
            </button>

            <h2 className="font-serif text-sm tracking-wide text-[#111]">
              DIAMONDS FACTORY
            </h2>
            <HeaderTabs />
          </div>

          {/* Navigation */}
          <div className="h-[calc(100%-80px)] overflow-y-auto">
            {navigation.map((category) => (
              <Link
                key={category.category_id}
                href={`/${locale}/plp/${category.category_id}`}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b border-gray-100 px-8 py-6 text-base uppercase tracking-wide text-[#111] transition hover:bg-[#F8F5F1]"
              >
                <span>{category.category_details.displayCategoryName.en}</span>

                {category.children?.length > 0 && (
                  <FiChevronRight className="text-2xl" />
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

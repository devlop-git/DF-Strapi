"use client"

import Link from "next/link"
import { useState } from "react"
import { HiBars3, HiXMark, HiChevronLeft } from "react-icons/hi2"
import { FiChevronRight } from "react-icons/fi"
import HeaderTabs from "./HeaderTabs"

export default function MobileNavigation({ navigation = [], locale }) {
  const [open, setOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState(null)

  const openDrawer = () => setOpen(true)

  const closeDrawer = () => {
    setOpen(false)
    setSelectedCategory(null)
  }

  const goBack = () => {
    setSelectedCategory(null)
  }

  return (
    <>
      {/* Mobile Header */}

      <div className="flex min-h-16 items-center justify-between lg:hidden">
        <button onClick={openDrawer} className="p-1" aria-label="Open Menu">
          <HiBars3 className="text-4xl text-[#111]" />
        </button>

        <h2 className="font-serif text-[12px] tracking-wide">
          DIAMONDS FACTORY
        </h2>

        <HeaderTabs />
      </div>

      {/* Overlay */}

      <div
        onClick={closeDrawer}
        className={`fixed inset-0 z-[999] transition-all duration-300 ${
          open ? "visible bg-black/40 opacity-100" : "invisible opacity-0"
        }`}
      >
        {/* Drawer */}

        <aside
          onClick={(e) => e.stopPropagation()}
          className={`absolute left-0 top-0 h-full w-[90%] max-w-[420px] bg-white transition-transform duration-300 ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Drawer Header */}

          <div className="flex h-20 items-center justify-between border-b border-[#ECE6DE] px-4">
            <button onClick={closeDrawer} aria-label="Close Menu">
              <HiXMark className="text-3xl text-[#111]" />
            </button>

            <h2 className="font-serif text-[11px] tracking-wide">
              DIAMONDS FACTORY
            </h2>

            <HeaderTabs />
          </div>

          {/* Navigation */}

          <div className="h-[calc(100%-80px)] overflow-y-auto">
            {/* ===========================
                  Parent Categories
            ============================ */}

            {!selectedCategory &&
              navigation.map((category) => (
                <button
                  key={category.category_id}
                  onClick={() => {
                    if (category.children?.length) {
                      setSelectedCategory(category)
                    }
                  }}
                  className="flex w-full items-center justify-between border-b border-[#ECE6DE] px-8 py-7 text-left text-[11px] uppercase tracking-wide transition hover:bg-[#F8F5F1]"
                >
                  <span>
                    {category.category_details.displayCategoryName.en}
                  </span>

                  {category.children?.length > 0 && (
                    <FiChevronRight className="text-3xl" />
                  )}
                </button>
              ))}

            {/* ===========================
                  Sub Categories
            ============================ */}

            {selectedCategory && (
              <>
                {/* Back */}

                <button
                  onClick={goBack}
                  className="flex w-full items-center gap-3 border-b border-[#ECE6DE] px-6 py-6 text-left"
                >
                  <HiChevronLeft className="text-3xl" />

                  <span className="text-[12px] font-medium uppercase text-[#A5744A]">
                    {selectedCategory.category_details.displayCategoryName.en}
                  </span>
                </button>

                {/* Children */}

                {selectedCategory.children.map((child) => (
                  <Link
                    key={child.category_id}
                    href={`/${locale}/plp/${child.category_id}`}
                    onClick={closeDrawer}
                    className="flex items-center justify-between border-b border-[#ECE6DE] px-8 py-7 text-[12px] uppercase transition hover:bg-[#F8F5F1]"
                  >
                    <span>{child.category_details.displayCategoryName.en}</span>

                    <span className="text-4xl font-light">+</span>
                  </Link>
                ))}
              </>
            )}
          </div>
        </aside>
      </div>
    </>
  )
}

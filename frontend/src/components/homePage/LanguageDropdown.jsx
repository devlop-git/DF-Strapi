"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const flags = {
  en: "🇬🇧",
  de: "🇩🇪",
};

const LanguageDropdown = ({ languages = [] }) => {
  const [selected, setSelected] = useState(languages[0]);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  if (!selected) return null;

  const handleSelect = (lang) => {
    setSelected(lang);
    setOpen(false);

    Cookies.set("language", lang.code, {
      expires: 365,
      path: "/",
    });

    router.refresh();
  };

  return (
    <div className="relative" tabIndex={0} onBlur={() => setOpen(false)}>
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex hover:cursor-pointer items-center gap-2 px-3 py-2 text-sm font-medium uppercase rounded-md hover:bg-gray-100"
      >
        <span className="text-xl">{flags[selected.code]}</span>

        <span>{selected.label}</span>

        <FaChevronDown
          className={`text-xs transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute hover:cursor-pointer left-0 mt-2 min-w-45  bg-[#fafafa]  z-50">
          {languages?.map((lang) => (
            <button
              key={lang.code}
              type="button"
              onMouseDown={() => handleSelect(lang)}
              className={`flex cursor-pointer w-full ml-2 my-1 items-center text-base  gap-x-1  text-left uppercase  ${
                selected.code === lang.code ? "bg-gray-50 font-semibold" : ""
              }`}
            >
              <span className="">{flags[lang.code]}</span>
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;

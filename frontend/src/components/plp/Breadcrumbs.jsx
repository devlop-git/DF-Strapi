"use client";

import Link from "next/link";
import { FaChevronRight  } from "react-icons/fa";

export default function Breadcrumbs({ items = [] }) {
  if (!items.length) return null;

  return (
    <nav
      className="flex items-center flex-wrap text-sm text-gray-600 mb-6"
      aria-label="Breadcrumb"
    >
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          {item.current ? (
            <span className="font-medium text-gray-900">
              {item.label}
            </span>
          ) : (
            <Link
              href={item.url}
              className="hover:text-black transition-colors"
            >
              {item.label}
            </Link>
          )}

          {index < items.length - 1 && (
            <FaChevronRight
              size={16}
              className="mx-2 text-gray-400"
            />
          )}
        </div>
      ))}
    </nav>
  );
}
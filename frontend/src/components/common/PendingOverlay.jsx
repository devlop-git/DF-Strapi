"use client";

// Transparent, dim loading overlay for in-place client updates (e.g. PDP
// filter changes) -- as opposed to `loading.js`, which replaces the whole
// page for a real navigation. Portaled directly to `document.body` so it
// always covers the true viewport: a plain `position: fixed` element nested
// inside the component tree only escapes to the viewport if NONE of its
// ancestors use `transform`/`filter`/etc -- any one that does silently
// becomes its containing block instead, which is exactly what caused the
// overlay to stop covering the full page height before.
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { RotatingLines } from "react-loader-spinner";

export default function PendingOverlay({ visible }) {
  // Portals need a real DOM node, which only exists on the client -- avoid
  // rendering this during SSR/hydration.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted || !visible) return null;

  return createPortal(
    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-black/20">
      <RotatingLines
        visible
        height="56"
        width="56"
        strokeWidth="4"
        strokeColor="#8A8A8A"
        animationDuration="0.75"
        ariaLabel="loading"
      />
    </div>,
    document.body,
  );
}

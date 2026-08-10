import { RotatingLines } from "react-loader-spinner";

// Full-viewport loading overlay, used as `loading.js` for any route that
// needs one (Next.js wraps that route's page.js in a Suspense boundary and
// shows this while it's fetching).
//
// `fixed inset-0` (viewport-relative) rather than `absolute`/`min-h-*`
// (content-relative) is deliberate: an absolute/min-height box only covers
// as much as ITS OWN box ends up being, which can fall short of the real
// page height and leave a gap at the bottom. `fixed inset-0` always covers
// exactly the current viewport, so there's no dependency on content height.
//
// Background is intentionally transparent: this overlay also fires on
// router.refresh() (language switch) and PDP option/filter navigations,
// where the previous page's content is still visible underneath and an
// opaque backdrop would blank the whole screen instead of just showing a
// spinner over it.
export default function Loader() {
  return (
      <div
    className="fixed inset-0 z-9999 flex items-center justify-center bg-transparent"
  >
      <RotatingLines
        visible
        height="56"
        width="56"
        strokeWidth="4"
        strokeColor="#8A8A8A"
        animationDuration="0.75"
        ariaLabel="loading"
      />
    </div>
  );
}

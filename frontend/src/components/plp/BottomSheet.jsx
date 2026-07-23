"use client";

export default function BottomSheet({ isOpen, onClose, children }) {
  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      />

      {/* Bottom Sheet */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 rounded-t-3xl bg-white transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="mx-auto flex max-h-[65vh] flex-col">
          {/* Drag Handle */}
          <div className="sticky top-0 flex justify-center bg-white py-4">
            <div className="h-1.5 w-12 rounded-full bg-gray-300" />
          </div>

          {/* Scrollable Content */}
          <div className="overflow-y-auto px-6 pb-6">{children}</div>
        </div>
      </div>
    </>
  );
}

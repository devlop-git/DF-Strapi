"use client";

import { FaGift, FaRegCalendarAlt, FaRegStar } from "react-icons/fa";
import { HiOutlineLockClosed } from "react-icons/hi2";

const benefits = [
  {
    icon: HiOutlineLockClosed,
    text: "Unlock access to the private sale",
  },
  {
    icon: FaGift,
    text: "Birthday benefits",
  },
  {
    icon: FaRegStar,
    text: "And a world full of exclusive benefits, individually tailored for you.",
  },
];

export default function NewsletterSection() {
  return (
    <section className=" py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Left Side */}

          <div>
            <h2 className="font-serif lg:text-[38px] leading-tight text-[#1D1D1D] ">
              Join the DF Club - Discover a world of exclusive offers and get
              early access.
            </h2>

            <div className="mt-10 space-y-7">
              {benefits.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div key={index} className="flex items-start gap-5">
                    <Icon className="mt-1 text-[28px] text-[#A0704F]" />

                    <p className="text-lg leading-8 text-[#1D1D1D]">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Side */}

          <div className="flex flex-col justify-center">
            {/* Name */}

            <div className="mb-10">
              <label className="mb-4 block text-lg text-[#1D1D1D]">Name</label>

              <input
                type="text"
                className="w-full border-b border-[#A0704F] bg-transparent pb-4 outline-none placeholder:text-gray-400"
              />
            </div>

            {/* Birthday */}

            <div className="relative mb-10">
              <label className="mb-4 block text-lg text-[#1D1D1D]">
                Birthday
              </label>

              <input
                type="date"
                className="w-full border-b border-[#A0704F] bg-transparent pb-4 pr-12 outline-none"
              />

              <FaRegCalendarAlt className="absolute bottom-4 right-1 text-2xl text-[#1D1D1D]" />
            </div>

            {/* Email */}

            <div className="mb-12">
              <label className="mb-4 block text-lg text-[#1D1D1D]">
                E-mail
              </label>

              <input
                type="email"
                className="w-full border-b border-[#A0704F] bg-transparent pb-4 outline-none"
              />
            </div>

            <button className="w-fit bg-[#A0704F] px-10 py-5 text-xl font-medium text-white transition hover:bg-[#8B5D41]">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

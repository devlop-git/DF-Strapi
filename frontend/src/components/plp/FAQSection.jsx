"use client";

import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqData = {
  title: "FAQs",
  description: "*custom-made for engagement rings",
  items: [
    {
      question: "What is the meaning of a solitaire engagement ring?",
      answer:
        "A solitaire engagement ring is considered the ultimate symbol of love. With its brilliant center stone that commands all the attention, a solitaire engagement ring is meant to symbolize strength, commitment, and purity.",
    },
    {
      question: "Can I wear my solitaire engagement ring every day?",
      answer:
        "Yes. Solitaire engagement rings are designed for daily wear. Regular cleaning and occasional professional maintenance will help preserve their beauty.",
    },
    {
      question: "Why are solitaire engagement rings more expensive?",
      answer:
        "The price depends on the center diamond's cut, clarity, color and carat weight. Since the center stone is the focus, it contributes most of the ring's value.",
    },
    {
      question: "What makes a solitaire engagement ring special?",
      answer:
        "Its timeless elegance. A single center diamond creates a classic look that never goes out of style.",
    },
    {
      question: "Can I wear my solitaire engagement ring every day?",
      answer:
        "Absolutely. With proper care, a solitaire engagement ring is perfect for everyday wear.",
    },
  ],
};

export default function FAQSection() {
  const [active, setActive] = useState(null);

  return (
    <section className="bg-[#FAF7F3] py-14 lg:py-18">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid lg:mx-24 grid-cols-1 gap-y-6 lg:grid-cols-[440px_1fr] lg:gap-24">
          {/* Left */}
          <div>
            <h2 className="font-serif text-[28px] text-center lg:text-left  lg:text-[36px] text-[#1D1D1B]">
              {faqData.title}
            </h2>

            <p className=" text-base  text-[#1D1D1B]">{faqData.description}</p>
          </div>

          {/* Right */}
          <div>
            {faqData.items.map((item, index) => {
              const isOpen = active === index;

              return (
                <div key={index} className="border-b border-[#E8DDCF]">
                  <button
                    onClick={() => setActive(isOpen ? null : index)}
                    className="flex w-full items-center justify-between py-4 lg:py-5 text-left hover:cursor-pointer"
                  >
                    <span
                      className="pr-8 text-base font-semibold

leading-6 lg:leading-8 text-[#1D1D1B]"
                    >
                      {item.question}
                    </span>

                    {isOpen ? (
                      <FiMinus className="h-5 w-5  shrink-0 text-[#1D1D1B]" />
                    ) : (
                      <FiPlus className="h-5 w-5 shrink-0 text-[#1D1D1B]" />
                    )}
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr] pb-8" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-4xl text-base  leading-6  text-[#333]">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

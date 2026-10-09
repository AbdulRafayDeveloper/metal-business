"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

/** Four key selling points shown directly under the home hero. */
export function HomeHighlights() {
  const { t } = useLanguage();

  return (
    <section className="relative z-10 px-4 md:px-margin-desktop -mt-10 md:-mt-14">
      <div className="max-w-container-max mx-auto grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-gutter">
        {t.homePage.highlights.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl border border-outline-variant shadow-lg px-4 py-5 md:px-6 md:py-6 flex items-center gap-3 md:gap-4 text-start premium-card"
          >
            <span className="w-11 h-11 md:w-14 md:h-14 rounded-xl bg-primary text-[#F87B1B] flex items-center justify-center flex-shrink-0">
              <span
                className="material-symbols-outlined text-2xl md:text-3xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                {item.icon}
              </span>
            </span>
            <span className="min-w-0">
              <span className="block text-base md:text-xl font-extrabold text-primary leading-tight">
                {item.title}
              </span>
              <span className="block text-xs md:text-sm font-semibold text-secondary mt-0.5">
                {item.desc}
              </span>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

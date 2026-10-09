"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export function AboutTrustStats() {
  const { t } = useLanguage();

  const standardIcons = ["verified", "eco", "security", "shield"];

  return (
    <>
      {/* 9. Why Clients Trust Us */}
      <section className="py-16 md:py-section-gap px-4 md:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {t.about.trust.items.map((item, index) => (
            <div
              key={index}
              className="text-center p-8 bg-surface-container-low rounded-2xl border border-outline-variant/10 shadow-sm"
            >
              <h3 className="text-4xl md:text-5xl font-extrabold text-primary mb-2">
                {item.value}
              </h3>
              <p className="text-xs md:text-sm font-bold uppercase tracking-widest text-secondary mb-4">
                {item.label}
              </p>
              <p className="text-sm md:text-base text-on-surface-variant">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Quality Standards */}
      <section className="py-12 border-y border-outline-variant/30 bg-surface/50">
        <div className="px-4 md:px-margin-desktop max-w-container-max mx-auto flex flex-wrap justify-center gap-8 md:gap-12 items-center">
          {t.about.standards.items.map((std, index) => (
            <div key={index} className="flex items-center gap-2 text-primary">
              <span className="material-symbols-outlined text-4xl">
                {standardIcons[index]}
              </span>
              <span className="font-bold text-lg md:text-xl">{std}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

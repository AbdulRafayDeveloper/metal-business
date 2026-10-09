"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

/** Trust numbers band (years, projects, clients, quality). */
export function HomeStats() {
  const { t } = useLanguage();

  return (
    <section className="bg-primary text-white py-12 md:py-16 px-4 md:px-margin-desktop relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="relative max-w-container-max mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-gutter text-center">
        {t.homePage.stats.map((stat, index) => (
          <div key={index} className="px-2">
            <p className="text-4xl md:text-5xl font-extrabold text-[#F87B1B] leading-none">{stat.value}</p>
            <p className="mt-3 text-xs md:text-sm font-bold uppercase tracking-widest text-white/90">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

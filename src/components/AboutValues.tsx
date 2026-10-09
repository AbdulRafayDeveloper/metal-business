"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export function AboutValues() {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-section-gap px-4 md:px-margin-desktop max-w-container-max mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          {t.about.values.title}
        </h2>
        <div className="w-20 h-1 bg-tertiary-fixed-dim mx-auto"></div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {t.about.values.items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-center group p-6 rounded-xl hover:bg-surface-container-high transition-all cursor-default"
          >
            <span className="material-symbols-outlined text-4xl text-primary mb-4 group-hover:scale-110 transition-transform">
              {item.icon}
            </span>
            <span className="font-bold text-xs md:text-sm uppercase tracking-wider text-primary">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

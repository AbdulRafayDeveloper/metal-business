"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export function AboutIndustriesServed() {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-section-gap bg-surface-dim px-4 md:px-margin-desktop">
      <div className="max-w-container-max mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
          {t.about.industries.title}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {t.about.industries.items.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow flex flex-col items-center justify-center"
            >
              <span className="material-symbols-outlined text-primary text-3xl mb-3">
                {item.icon}
              </span>
              <p className="text-sm font-bold text-primary">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

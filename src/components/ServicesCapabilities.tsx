"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export function ServicesCapabilities() {
  const { t } = useLanguage();

  return (
    <section className="pb-16 px-4 md:px-margin-desktop max-w-container-max mx-auto text-start">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
        {t.servicesPage.capabilities.map((cap, index) => (
          <div
            key={index}
            className="p-8 bg-white border border-outline-variant/30 rounded-xl hover:shadow-md transition-shadow"
          >
            <span className="material-symbols-outlined text-primary text-4xl mb-4">
              {cap.icon}
            </span>
            <h3 className="text-lg font-bold text-primary mb-2">
              {cap.title}
            </h3>
            <p className="text-sm text-secondary leading-relaxed">
              {cap.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

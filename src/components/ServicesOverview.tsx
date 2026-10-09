"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export function ServicesOverview() {
  const { t } = useLanguage();

  return (
    <section className="py-12 md:py-16 px-4 md:px-margin-desktop max-w-container-max mx-auto text-start">
      <div className="max-w-3xl">
        <h2 className="text-2xl md:text-4xl font-bold text-primary mb-6">
          {t.servicesPage.overview.title}
        </h2>
        <p className="text-base md:text-lg text-secondary leading-relaxed">
          {t.servicesPage.overview.p}
        </p>
      </div>
    </section>
  );
}

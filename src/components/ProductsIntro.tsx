"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export function ProductsIntro() {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-20 px-4 md:px-margin-desktop max-w-container-max mx-auto text-center">
      <div className="max-w-3xl mx-auto space-y-6">
        <span className="text-primary font-bold tracking-widest text-xs md:text-sm block">
          {t.productsPage.intro.tag}
        </span>
        <h2 className="text-2xl md:text-4xl font-extrabold text-on-surface leading-tight">
          {t.productsPage.intro.title}
        </h2>
        <p className="text-sm md:text-base text-secondary leading-relaxed">
          {t.productsPage.intro.desc}
        </p>
      </div>
    </section>
  );
}

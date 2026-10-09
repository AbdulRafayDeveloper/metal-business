"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export function FAQHero() {
  const { locale, t } = useLanguage();

  return (
    <section className="relative h-[320px] md:h-[400px] flex items-center overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/faq_hero.png"
          alt={t.faqPage.hero.bgAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#11224E]/80 mix-blend-multiply"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 md:px-margin-desktop max-w-container-max mx-auto w-full text-on-primary text-start">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-sm opacity-95 mb-4">
          <Link className="hover:underline" href="/">
            {t.faqPage.breadcrumbs.home}
          </Link>
          <span className={`mx-1 material-symbols-outlined text-[14px] ${locale === "ar" ? "rotate-180" : ""}`}>
            chevron_right
          </span>
          <span className="font-bold">{t.faqPage.breadcrumbs.current}</span>
        </nav>
        <h1 className="text-3xl md:text-5xl font-extrabold max-w-2xl leading-tight">
          {t.faqPage.hero.title}
        </h1>
        <p className="mt-4 text-base md:text-lg max-w-xl opacity-90 leading-relaxed">
          {t.faqPage.hero.subtitle}
        </p>
      </div>
    </section>
  );
}

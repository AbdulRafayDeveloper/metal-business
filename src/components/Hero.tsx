"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { siteImages } from "@/constants/images";
import { ContactActions } from "@/components/ContactActions";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[82vh] flex items-end overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src={siteImages.homeHero}
          alt={t.hero.bgAlt}
          fill
          priority
          loading="eager"
          quality={85}
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 industrial-overlay"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 hero-text-shadow px-4 md:px-margin-desktop max-w-container-max mx-auto w-full pb-16 md:pb-24 pt-32">
        <div className="max-w-4xl text-start border-s-4 border-[#F87B1B] ps-5 md:ps-8">
          <p className="font-display text-lg md:text-2xl font-semibold uppercase tracking-[0.2em] text-[#F87B1B] mb-4">
            {t.hero.overline}
          </p>
          <h1 className="display-title text-5xl sm:text-6xl md:text-7xl text-white mb-6">
            {t.hero.title}
          </h1>
          <p className="text-lg md:text-2xl text-white/95 max-w-2xl leading-relaxed mb-8">{t.hero.subtitle}</p>
          <div className="flex flex-wrap items-center gap-4">
            {/*
              -- Request a Quote Button (temporarily replaced by WhatsApp / Call) --

            <Link href="/request-a-quote">
              <span className="bg-tertiary-fixed-dim text-on-tertiary-fixed font-bold px-8 py-4 rounded-xl hover:scale-105 transition-transform flex items-center gap-2 cursor-pointer inline-flex">
                {t.hero.requestQuote}
              </span>
            </Link>
            */}
            <ContactActions variant="onDark" size="lg" />
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-white font-bold text-lg border-b-2 border-white/60 hover:border-[#F87B1B] hover:text-[#F87B1B] transition-colors pb-1"
            >
              {t.hero.exploreProducts}
              <span className="material-symbols-outlined text-xl rtl:rotate-180">arrow_forward</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

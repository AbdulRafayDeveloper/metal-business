"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { ContactActions } from "@/components/ContactActions";

export function Hero() {
  // `locale` was used by the commented-out Request a Quote arrow (RTL flip).
  const { t } = useLanguage();

  return (
    <section className="relative h-[80vh] flex items-center overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero_metal_trading.png"
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
      <div className="relative z-10 hero-text-shadow px-4 md:px-margin-desktop max-w-container-max mx-auto w-full">
        <div className="max-w-2xl text-start">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight tracking-tight mb-6">
            {t.hero.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4">
            {/*
              -- Request a Quote Button (temporarily replaced by WhatsApp / Call) --

            <Link href="/request-a-quote">
              <span className="bg-tertiary-fixed-dim text-on-tertiary-fixed font-bold px-8 py-4 rounded-xl hover:scale-105 transition-transform flex items-center gap-2 cursor-pointer inline-flex">
                {t.hero.requestQuote}
                <span
                  className={`material-symbols-outlined transition-transform ${
                    locale === "ar" ? "rotate-180" : ""
                  }`}
                >
                  trending_flat
                </span>
              </span>
            </Link>
            */}
            <ContactActions variant="onDark" size="lg" />
            <Link href="/products">
              <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold px-8 py-4 rounded-xl hover:bg-white/20 transition-all cursor-pointer inline-flex">
                {t.hero.exploreProducts}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

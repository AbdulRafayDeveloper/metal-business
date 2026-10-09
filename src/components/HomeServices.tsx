"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { ContactActions } from "@/components/ContactActions";
import { productImages, siteImages } from "@/constants/images";

/** Photo per card, in the same order as translations.homePage.services.items */
const serviceImages: string[] = [
  productImages["cable-tray"],
  productImages["roof-sheets"],
  productImages["racks"],
  productImages["shuttering-plate"],
  productImages["grating"],
  productImages["perforated-plate"],
  productImages["pallet"],
  productImages["solar-stands"],
  productImages["peb"],
  productImages["petrol-pump-canopy"],
  siteImages.sourcing,
  siteImages.logistics,
];

/** Home page services: fabrication and industrial solutions as photo cards. */
export function HomeServices() {
  const { t } = useLanguage();
  const s = t.homePage.services;

  return (
    <section className="py-16 md:py-section-gap px-4 md:px-margin-desktop bg-surface-container-low">
      <div className="max-w-container-max mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-[#F87B1B] font-bold tracking-widest text-xs md:text-sm uppercase block mb-3">
            {s.tag}
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary">{s.title}</h2>
          <p className="text-base md:text-lg text-secondary mt-4 max-w-2xl mx-auto leading-relaxed">
            {s.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {s.items.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="group bg-white rounded-2xl border border-outline-variant shadow-sm premium-card hover:border-primary/40 overflow-hidden flex flex-col text-start"
            >
              <div className="relative h-40 w-full overflow-hidden bg-surface-container-high">
                <Image
                  src={serviceImages[index]}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#11224E]/80 via-transparent to-transparent" />
                <span className="absolute bottom-3 start-3 inline-flex items-center gap-2 text-white font-bold text-base hero-text-shadow">
                  <span className="w-9 h-9 rounded-lg bg-[#F87B1B] text-[#11224E] flex items-center justify-center">
                    <span className="material-symbols-outlined text-xl">{item.icon}</span>
                  </span>
                  {item.title}
                </span>
              </div>
              <p className="p-5 text-sm text-secondary leading-relaxed">{item.desc}</p>
            </Link>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 text-center">
          <p className="text-base md:text-lg font-bold text-primary">{s.cta}</p>
          <ContactActions variant="onLight" size="lg" align="center" showNumber />
        </div>
      </div>
    </section>
  );
}

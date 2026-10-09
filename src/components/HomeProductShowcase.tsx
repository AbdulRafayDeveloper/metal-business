"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { productImages, type ProductId } from "@/constants/images";

/** Photo per card, in the same order as translations.homePage.products.items */
const cardImageIds: ProductId[] = [
  "aluminum-scrap",
  "copper-scrap",
  "zinc",
  "recyclable-metals",
  "steel-sheets",
  "steel-bars",
  "steel-beams",
  "steel-coils",
  "steel-pipes",
  "angles-channels",
  "chequered-plate",
  "purlins",
  "wire-mesh",
  "scaffolding",
];

/** Home page product showcase: photo cards for every product category. */
export function HomeProductShowcase() {
  const { locale, t } = useLanguage();
  const p = t.homePage.products;

  return (
    <section className="py-16 md:py-section-gap px-4 md:px-margin-desktop">
      <div className="max-w-container-max mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-[#F87B1B] font-bold tracking-widest text-xs md:text-sm uppercase block mb-3">
            {p.tag}
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary">{p.title}</h2>
          <p className="text-base md:text-lg text-secondary mt-4 max-w-2xl mx-auto leading-relaxed">
            {p.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {p.items.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="group bg-white rounded-2xl border border-outline-variant shadow-sm premium-card hover:border-primary/40 overflow-hidden flex flex-col text-start"
            >
              <div className="relative h-44 w-full overflow-hidden bg-surface-container-high">
                <Image
                  src={productImages[cardImageIds[index]]}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute bottom-3 start-3 w-11 h-11 rounded-xl bg-primary text-[#F87B1B] shadow-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                </span>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-sm text-secondary leading-relaxed flex-grow">{item.description}</p>
                <span className="mt-4 text-primary font-bold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  {p.learnMore}
                  <span
                    className={`material-symbols-outlined text-base ${locale === "ar" ? "rotate-180" : ""}`}
                  >
                    chevron_right
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10 md:mt-12">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-primary text-white font-extrabold px-8 py-4 rounded-xl shadow-md hover:bg-primary-container hover:scale-[1.03] active:scale-95 transition-all"
          >
            <span className="material-symbols-outlined text-xl">inventory_2</span>
            {p.viewAll}
          </Link>
        </div>
      </div>
    </section>
  );
}

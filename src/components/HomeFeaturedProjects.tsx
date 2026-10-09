"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { siteImages } from "@/constants/images";

/** Two large cards promoting the turnkey project pages (PEB and canopies). */
export function HomeFeaturedProjects() {
  const { locale, t } = useLanguage();
  const f = t.homePage.featured;
  const images = [siteImages.pebHero, siteImages.canopyNight];

  return (
    <section className="py-16 md:py-section-gap px-4 md:px-margin-desktop bg-surface-container-low">
      <div className="max-w-container-max mx-auto">
        <div className="text-center mb-12">
          <span className="text-[#F87B1B] font-bold tracking-widest text-xs md:text-sm uppercase block mb-3">
            {f.tag}
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary">{f.title}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          {f.items.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="group relative h-[320px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg border border-outline-variant text-start"
            >
              <Image
                src={images[index]}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#11224E] via-[#11224E]/60 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 text-white hero-text-shadow">
                <h3 className="text-2xl md:text-3xl font-extrabold mb-2">{item.title}</h3>
                <p className="text-sm md:text-base text-white/90 max-w-md mb-4">{item.desc}</p>
                <span className="inline-flex items-center gap-2 bg-[#F87B1B] text-[#11224E] font-extrabold px-5 py-3 rounded-xl shadow-md group-hover:bg-white transition-colors">
                  {item.cta}
                  <span className={`material-symbols-outlined ${locale === "ar" ? "rotate-180" : ""}`}>
                    arrow_forward
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

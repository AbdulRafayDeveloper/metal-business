"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { siteImages } from "@/constants/images";

/** Short company introduction with trust points and a link to /about. */
export function HomeAboutTeaser() {
  const { locale, t } = useLanguage();
  const a = t.homePage.aboutTeaser;

  return (
    <section className="py-16 md:py-section-gap px-4 md:px-margin-desktop">
      <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className="relative h-[320px] md:h-[440px] rounded-2xl overflow-hidden shadow-xl border border-outline-variant">
          <Image
            src={siteImages.aboutOverview}
            alt={t.about.overview.imgAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute bottom-4 start-4 bg-[#F87B1B] text-[#11224E] font-extrabold px-5 py-3 rounded-xl shadow-lg">
            <span className="block text-2xl leading-none">{t.homePage.stats[0].value}</span>
            <span className="block text-[11px] uppercase tracking-widest mt-1">{t.homePage.stats[0].label}</span>
          </div>
        </div>

        <div className="text-start">
          <span className="text-[#F87B1B] font-bold tracking-widest text-xs md:text-sm uppercase block mb-3">
            {a.tag}
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary leading-tight mb-5">{a.title}</h2>
          <p className="text-base md:text-lg text-secondary leading-relaxed mb-6">{a.desc}</p>
          <ul className="space-y-3 mb-8">
            {a.points.map((point, index) => (
              <li key={index} className="flex items-start gap-3 text-on-surface font-semibold">
                <span
                  className="material-symbols-outlined text-[#1DB954] text-xl mt-0.5"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  check_circle
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 bg-primary text-white font-extrabold px-8 py-4 rounded-xl shadow-md hover:bg-primary-container hover:scale-[1.03] active:scale-95 transition-all"
          >
            {a.cta}
            <span className={`material-symbols-outlined ${locale === "ar" ? "rotate-180" : ""}`}>
              arrow_forward
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export function AboutOverview() {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-section-gap px-4 md:px-margin-desktop max-w-container-max mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-section-gap items-center">
        {/* Text Description */}
        <div className="space-y-6 text-start">
          <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight">
            {t.about.overview.title}
          </h2>
          <p className="text-lg text-secondary leading-relaxed">
            {t.about.overview.p1}
          </p>
          <p className="text-sm md:text-base text-secondary leading-relaxed">
            {t.about.overview.p2}
          </p>
        </div>

        {/* Facility Image */}
        <div className="rounded-2xl overflow-hidden shadow-sm border border-outline-variant/30 relative h-[400px] w-full">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_arvvOjey8tUU3I5GYOm64xoTQaMCMSyHkNSDeoCNMTIPYYAZYLnKw9_BaBgnEyiZrb4eaI1r99sI-qllWJTwFRUxkVVjsaNv0jA5OxrGziBp1HrLN9l2rG6RmbmdrvsR8m9pKDsAz1dZ82Ce0NEhQP4SWU4a10HendQ6j86hzeHSuoaWMqSTXPB7SnwlsDTflxpNVGbI3f3132uPZljRAS3BIqvK7U4ux-em5y_lG8QVrKaTd4oE"
            alt={t.about.overview.imgAlt}
            fill
            sizes="(max-w-1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

/** Director's message block, used on the home and About pages. */
export function LeadershipMessage() {
  const { t } = useLanguage();
  const l = t.homePage.leadership;

  return (
    <section className="py-16 md:py-section-gap px-4 md:px-margin-desktop">
      <div className="max-w-container-max mx-auto">
        <div className="bg-white rounded-2xl border border-outline-variant shadow-md p-8 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-start">
          <div className="lg:col-span-3 flex lg:flex-col items-center gap-4 text-center">
            <span className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-primary text-[#F87B1B] flex items-center justify-center shadow-lg flex-shrink-0">
              <span
                className="material-symbols-outlined text-5xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                person
              </span>
            </span>
            <div>
              <p className="font-extrabold text-primary text-lg">{l.name}</p>
              <p className="text-sm text-secondary font-semibold">{l.role}</p>
            </div>
          </div>
          <div className="lg:col-span-9">
            <span className="text-[#F87B1B] font-bold tracking-widest text-xs md:text-sm uppercase block mb-3">
              {l.tag}
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-primary mb-5">{l.title}</h2>
            <blockquote className="relative text-base md:text-lg text-on-surface leading-relaxed ps-6 border-s-4 border-[#F87B1B]">
              {l.quote}
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}

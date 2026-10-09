"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { ContactActions } from "@/components/ContactActions";

/** Home page services: fabrication and industrial solutions as icon cards. */
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
              className="group bg-white rounded-2xl border border-outline-variant shadow-sm premium-card hover:border-primary/40 p-6 flex items-start gap-4 text-start"
            >
              <span className="w-12 h-12 rounded-xl bg-primary text-[#F87B1B] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-2xl">{item.icon}</span>
              </span>
              <span className="min-w-0">
                <span className="block text-base md:text-lg font-bold text-primary mb-1">
                  {item.title}
                </span>
                <span className="block text-sm text-secondary leading-relaxed">{item.desc}</span>
              </span>
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

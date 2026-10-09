"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { ContactActions } from "@/components/ContactActions";

/* Shared building blocks for the solution pages (PEB, canopy, careers). */

interface PageHeroProps {
  image: string;
  imageAlt: string;
  breadcrumbHome: string;
  breadcrumbCurrent: string;
  title: string;
  subtitle: string;
}

export function PageHero({ image, imageAlt, breadcrumbHome, breadcrumbCurrent, title, subtitle }: PageHeroProps) {
  const { locale } = useLanguage();
  return (
    <section className="relative h-[60vh] min-h-[420px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image src={image} alt={imageAlt} fill priority sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 hero-overlay z-10" />
      </div>
      <div className="relative z-20 hero-text-shadow px-4 md:px-margin-desktop max-w-container-max mx-auto w-full text-white text-start">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-sm mb-5">
          <Link className="hover:underline" href="/">
            {breadcrumbHome}
          </Link>
          <span className={`mx-1 material-symbols-outlined text-[14px] ${locale === "ar" ? "rotate-180" : ""}`}>
            chevron_right
          </span>
          <span className="font-bold">{breadcrumbCurrent}</span>
        </nav>
        <h1 className="text-3xl md:text-5xl font-extrabold max-w-3xl leading-tight mb-5">{title}</h1>
        <p className="text-base md:text-lg max-w-2xl leading-relaxed mb-8">{subtitle}</p>
        <ContactActions variant="onDark" size="lg" />
      </div>
    </section>
  );
}

interface IntroProps {
  tag: string;
  title: string;
  paragraphs: string[];
  image?: string;
  imageAlt?: string;
}

export function PageIntro({ tag, title, paragraphs, image, imageAlt }: IntroProps) {
  return (
    <section className="py-16 md:py-section-gap px-4 md:px-margin-desktop">
      <div className={`max-w-container-max mx-auto grid grid-cols-1 ${image ? "lg:grid-cols-2" : ""} gap-10 lg:gap-16 items-center`}>
        <div className="text-start">
          <span className="text-[#F87B1B] font-bold tracking-widest text-xs md:text-sm uppercase block mb-3">{tag}</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary leading-tight mb-6">{title}</h2>
          <div className="space-y-4">
            {paragraphs.map((p, i) => (
              <p key={i} className="text-base md:text-lg text-secondary leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </div>
        {image && (
          <div className="relative h-[300px] md:h-[420px] rounded-2xl overflow-hidden shadow-xl border border-outline-variant">
            <Image src={image} alt={imageAlt ?? title} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>
        )}
      </div>
    </section>
  );
}

interface IconTileGridProps {
  title: string;
  desc?: string;
  items: ReadonlyArray<{ title: string; icon: string }>;
  tone?: "light" | "dark";
  columns?: 3 | 4 | 5;
}

export function IconTileGrid({ title, desc, items, tone = "light", columns = 5 }: IconTileGridProps) {
  const cols = columns === 3 ? "lg:grid-cols-3" : columns === 4 ? "lg:grid-cols-4" : "lg:grid-cols-5";
  const dark = tone === "dark";
  return (
    <section className={`py-16 md:py-section-gap px-4 md:px-margin-desktop ${dark ? "bg-primary text-white" : "bg-surface-container-low"}`}>
      <div className="max-w-container-max mx-auto">
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-extrabold ${dark ? "text-white" : "text-primary"}`}>{title}</h2>
          {desc && <p className={`mt-4 max-w-2xl mx-auto text-base md:text-lg ${dark ? "text-white/90" : "text-secondary"}`}>{desc}</p>}
        </div>
        <div className={`grid grid-cols-2 sm:grid-cols-3 ${cols} gap-4 md:gap-gutter`}>
          {items.map((item, i) => (
            <div
              key={i}
              className={`rounded-2xl p-5 md:p-6 flex flex-col items-center text-center gap-3 premium-card ${
                dark ? "bg-white/5 border border-white/10" : "bg-white border border-outline-variant shadow-sm"
              }`}
            >
              <span className={`w-12 h-12 rounded-xl flex items-center justify-center ${dark ? "bg-[#F87B1B] text-[#11224E]" : "bg-primary text-[#F87B1B]"}`}>
                <span className="material-symbols-outlined text-2xl">{item.icon}</span>
              </span>
              <span className={`font-bold text-sm md:text-base ${dark ? "text-white" : "text-primary"}`}>{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

interface ChipListProps {
  title: string;
  items: ReadonlyArray<string>;
}

export function ChipList({ title, items }: ChipListProps) {
  return (
    <section className="py-12 md:py-16 px-4 md:px-margin-desktop">
      <div className="max-w-container-max mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-extrabold text-primary mb-8">{title}</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {items.map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2 bg-white border border-outline-variant rounded-full px-5 py-2.5 text-sm font-bold text-primary shadow-sm"
            >
              <span className="material-symbols-outlined text-[#1DB954] text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
                check_circle
              </span>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

interface ProcessStepsProps {
  title: string;
  steps: ReadonlyArray<{ title: string; desc: string }>;
}

export function ProcessSteps({ title, steps }: ProcessStepsProps) {
  return (
    <section className="py-16 md:py-section-gap px-4 md:px-margin-desktop bg-surface-container-low">
      <div className="max-w-container-max mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary text-center mb-12">{title}</h2>
        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {steps.map((step, i) => (
            <li key={i} className="bg-white rounded-2xl border border-outline-variant shadow-sm p-6 text-start relative premium-card">
              <span className="absolute -top-4 start-6 w-10 h-10 rounded-full bg-[#F87B1B] text-[#11224E] font-extrabold flex items-center justify-center shadow-md">
                {i + 1}
              </span>
              <h3 className="text-lg font-bold text-primary mt-4 mb-2">{step.title}</h3>
              <p className="text-sm text-secondary leading-relaxed">{step.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

interface PageCtaProps {
  title: string;
  desc: string;
}

export function PageCta({ title, desc }: PageCtaProps) {
  return (
    <section className="py-16 px-4 md:px-margin-desktop">
      <div className="max-w-container-max mx-auto bg-primary rounded-2xl p-8 md:p-14 text-center text-white relative overflow-hidden">
        <div className="absolute top-0 end-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="relative">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-4">{title}</h2>
          <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto mb-8">{desc}</p>
          <ContactActions variant="onDark" size="lg" align="center" showNumber />
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export function AboutHero() {
  const { locale, t } = useLanguage();

  return (
    <section className="relative h-64 flex items-center overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiLBfWErtFmmj_oH6jGmPPbYrEHEdvyeC6jX-qImVlh7WqL1J9Xi14qyL1Aanaa_GHdlzXkym4opNjOXbOJuupAztEVtsshye0YUIjMCGWY1KlPPbamwIiE2kSOiZPBQuT-6ypkTeGHHcq39TW1_d5NjGfFolDtjwZGBawwJ3EtYLdWm1ypu5L8eS4VrwxMkXyLm88FFeMzhgkhtLkFbsPSZJiosySzwJ7W1iV5vRE4kxRZVm6KChF"
          alt={t.about.hero.bgAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-primary-container/70 mix-blend-multiply"></div>
      </div>

      {/* Hero Content Overlay */}
      <div className="relative z-10 px-4 md:px-margin-desktop max-w-container-max mx-auto w-full text-on-primary text-start">
        <nav aria-label="Breadcrumb" className="flex text-sm mb-2 opacity-95">
          <ol className="flex list-none p-0 items-center gap-1">
            <li className="flex items-center">
              <Link className="hover:underline" href="/">
                {t.about.hero.breadcrumbHome}
              </Link>
              <span className={`mx-2 material-symbols-outlined text-[14px] ${locale === "ar" ? "rotate-180" : ""}`}>
                chevron_right
              </span>
            </li>
            <li className="font-bold">{t.about.hero.breadcrumbAbout}</li>
          </ol>
        </nav>
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
          {t.about.hero.title}
        </h1>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export function ProductDetailHero() {
  const { t } = useLanguage();

  return (
    <section className="relative h-[60vh] flex items-center overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7tjEfn8MtlMoDtaMkfMOtBWwuZ1o8SZVQhL-AXfZvEid4LLupzd39W-OkSYujjd0teW-7c-W94dAOSAOaX7lTSDP7UfMjbHxO94W-XQ0w69uBF9dd-Qt7rdF5Fd3GqPjywBYlnFpen-tRH7XpOo1DQGiF_gxbQxA7Tj1rXVo_If4ZdlANTfNoN62v-jVKgMdT5JRhdG7EbPwzLlreupMim6t_9uiOhXn2W659j2-xtufi-mI9m7ke"
          alt={t.scrapDetail.hero.bgAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 hero-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 md:px-margin-desktop max-w-container-max mx-auto w-full text-on-primary text-start">
        <nav className="flex mb-6 text-on-primary/90 font-medium text-sm items-center gap-1">
          <Link className="hover:text-tertiary-fixed-dim transition-colors" href="/">
            {t.scrapDetail.breadcrumbs.home}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-on-primary/90">
            {t.scrapDetail.breadcrumbs.products}
          </span>
          <span className="mx-2">/</span>
          <span className="text-on-primary font-bold">
            {t.scrapDetail.breadcrumbs.current}
          </span>
        </nav>
        <h1 className="text-3xl md:text-5xl font-extrabold text-on-primary max-w-3xl leading-tight">
          {t.scrapDetail.hero.title}
        </h1>
        <p className="mt-4 text-on-primary/90 text-lg md:text-xl max-w-2xl leading-relaxed">
          {t.scrapDetail.hero.subtitle}
        </p>
      </div>
    </section>
  );
}

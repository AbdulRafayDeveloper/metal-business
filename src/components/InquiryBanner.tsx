"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ContactActions } from "@/components/ContactActions";

export interface InquiryBannerProps {
  isAboutPage?: boolean;
}

export function InquiryBanner({ isAboutPage = false }: InquiryBannerProps) {
  const { t } = useLanguage();

  return (
    <section className="py-8 px-4 md:px-margin-desktop">
      <div className="max-w-container-max mx-auto bg-primary rounded-2xl p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 text-start">
        <div className="relative z-10">
          <h2 className="text-2xl md:text-4xl font-bold text-white max-w-xl leading-tight">
            {t.inquiry.title}
          </h2>
          <p className="text-white/90 text-base md:text-lg mt-4">
            {isAboutPage ? t.inquiry.subtitleAbout : t.inquiry.subtitle}
          </p>
        </div>
        <div className="relative z-10 flex-shrink-0">
          {/*
            -- Request a Quote Button (temporarily replaced by WhatsApp / Call) --

          <button className="bg-tertiary-fixed-dim text-on-tertiary-fixed font-bold px-10 py-5 rounded-xl hover:scale-105 transition-transform shadow-lg cursor-pointer">
            {t.inquiry.cta}
          </button>
          */}
          <ContactActions variant="onDark" size="lg" showNumber />
        </div>

        {/* Background texture/circles */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/4"></div>
      </div>
    </section>
  );
}

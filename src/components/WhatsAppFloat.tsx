"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { contactNumber } from "@/constants/site";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

/** Floating WhatsApp button fixed to the bottom-right corner on every page. */
export function WhatsAppFloat() {
  const { t } = useLanguage();

  return (
    <a
      href={contactNumber.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${t.contactActions.whatsapp}: ${contactNumber.display}`}
      className="group fixed bottom-6 end-6 z-50 flex items-center gap-3 rounded-full bg-[#25D366] text-white shadow-2xl border-2 border-white/80 hover:bg-[#1DB954] hover:scale-105 active:scale-95 transition-all cursor-pointer ps-4 pe-4 py-3 md:ps-5"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping pointer-events-none" />
      <WhatsAppIcon className="relative w-7 h-7" />
      <span className="relative hidden md:inline font-extrabold text-sm tracking-wide">
        {t.contactActions.whatsapp}
      </span>
    </a>
  );
}

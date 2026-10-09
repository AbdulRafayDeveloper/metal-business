"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export function AboutCapabilities() {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-section-gap bg-primary text-on-primary">
      <div className="px-4 md:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center">
          {/* Left Side: Capabilities list */}
          <div className="text-start">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
              {t.about.capabilities.title}
            </h2>
            <ul className="space-y-8">
              {t.about.capabilities.items.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-tertiary-fixed-dim text-2xl mt-1">
                    {item.icon}
                  </span>
                  <div>
                    <h4 className="text-xl font-bold mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm md:text-base opacity-95 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side: Compliance cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12 lg:mt-0 text-start">
            {t.about.capabilities.cards.map((card, index) => (
              <div
                key={index}
                className="p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all cursor-default"
              >
                <span className="material-symbols-outlined text-tertiary-fixed-dim text-3xl mb-3 block">
                  {card.icon}
                </span>
                <h4 className="text-sm md:text-base font-bold mb-2">
                  {card.title}
                </h4>
                <p className="text-xs opacity-90 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

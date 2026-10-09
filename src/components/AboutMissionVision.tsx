"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export function AboutMissionVision() {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-section-gap bg-surface-container-low px-4 md:px-margin-desktop">
      <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-gutter">
        {/* Mission Card */}
        <div className="bg-white p-8 md:p-10 rounded-2xl border border-outline-variant/30 flex flex-col items-start gap-4 shadow-sm text-start">
          <div className="w-14 h-14 bg-primary-fixed rounded-xl flex items-center justify-center">
            <span className="material-symbols-outlined text-primary text-3xl">
              track_changes
            </span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-primary">
            {t.about.missionVision.mission.title}
          </h3>
          <p className="text-sm md:text-base text-secondary leading-relaxed">
            {t.about.missionVision.mission.desc}
          </p>
        </div>

        {/* Vision Card */}
        <div className="bg-white p-8 md:p-10 rounded-2xl border border-outline-variant/30 flex flex-col items-start gap-4 shadow-sm text-start">
          <div className="w-14 h-14 bg-primary-fixed rounded-xl flex items-center justify-center">
            <span className="material-symbols-outlined text-primary text-3xl">
              visibility
            </span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-primary">
            {t.about.missionVision.vision.title}
          </h3>
          <p className="text-sm md:text-base text-secondary leading-relaxed">
            {t.about.missionVision.vision.desc}
          </p>
        </div>
      </div>
    </section>
  );
}

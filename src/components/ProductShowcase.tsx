"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export function ProductShowcase() {
  const { t } = useLanguage();

  const showcaseImages = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAUlL6FaRZDPbGa6reUOfKso6_2XfAddELe4dz_MOYtlBtZ_a9cT_iMx71giWmAnMASzzEgcOpzZ8JOcm06Qyppp-v7xfBT1qwl6XEFMWG_tFnwImr_GNBNF8WulZk7mPuTUYNx3bycX9RJDK8vHPKTn6AVf5u0wGZuyLP49s9uQlJ2ZrYNlB8ss672fogELwrJ4FNoI5jXBTRSFziAoPGG8kuqlxLKSWn9-nb9Y8WOozyubwOyaTjX",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBbi3Iw_d3HBy7MPMdOEJd8k5kBx06vZ2y4hjq2G7Ph_UmtEN-AtO-F2VMG9JYMOCoKH_bLSrN2aNDVBV4AV4KQoCngmm5cUg2iWePfwp-5KLaztsnx24RmFAtZNggA1XHbfOcZnCO5LCXEBGHGUt5aKJJwEAkzTwz6hu2Yzp8AkSqKmjnaV3PrJfDD0faSrRq3kicHeCuoGtf0YgVkHD7TmA7oCOC_AgEU0QZOQyfhFkXUpCy53W9c",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDyXQcRD9mNdQkjseOB4iUDcRRlxLbk33i2a-Ys9ZKjC8XliDCzUZFTZLyTtpiMAeBaeNQrtziEoaGGAEjN_PNzGOXUqQcWCfPXcK48G4yhkUYu528tpL56QN1JKnT5-R5_c8G97p1N11YQEPAa_35Tx9ri_UJo1q8w-05kBqz_RfQSWn8A5t0fUgjfjVXqNQQoUlQl7LE3en5ENfBSZscYvlB8wgnyn_v8pxetcQPkb-sythP-H-e2",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuC3Ihks7Du2FJcBHTgfQVq6oTHJQfpibMUw53wkm_cF2qhtSHCza7trzaUT1rh4JAv6cH1wyzWc9rI25ezc54oGa8IMFjXmgP2CB_iNtR2NzPDEfCqlGCsvMvmSsOM6SXnsphnCjXfqz8ZHOprnmNYtqqLDx_J5bsbbiaRcE2MuBLGGhZwLNYg0g2BRThHBUo_mOqATpnForyu3yBEZb-1iraLOFFBo8BKn9pB8rTuUETKjLE6Ea2RQ"
  ];

  return (
    <section className="mt-16 md:mt-section-gap text-start">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-1 bg-primary"></div>
        <h2 className="text-xl md:text-2xl font-bold text-primary uppercase tracking-wider">
          {t.scrapDetail.showcase.title}
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {showcaseImages.map((src, index) => (
          <div
            key={index}
            className="aspect-square overflow-hidden rounded-2xl group cursor-pointer border border-outline-variant/30 relative"
          >
            <Image
              src={src}
              alt={t.scrapDetail.showcase.imgAlts[index]}
              fill
              sizes="(max-w-768px) 50vw, 25vw"
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

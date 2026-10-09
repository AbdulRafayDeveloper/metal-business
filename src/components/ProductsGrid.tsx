"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { productImageFor } from "@/constants/images";

type ProductGroup = "metals" | "steel" | "fabrication";

const GROUP_ORDER: ProductGroup[] = ["metals", "steel", "fabrication"];

export function ProductsGrid() {
  const { t } = useLanguage();
  const { categories, groups } = t.productsPage;

  return (
    <section className="pb-16 md:pb-section-gap px-4 md:px-margin-desktop max-w-container-max mx-auto text-start space-y-16">
      {GROUP_ORDER.map((group) => {
        const items = categories.filter((c) => c.group === group);
        if (items.length === 0) return null;
        return (
          <div key={group}>
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-2xl md:text-3xl font-extrabold text-primary">{groups[group]}</h2>
              <span className="flex-1 h-px bg-outline-variant" aria-hidden="true" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
              {items.map((prod) => {
                const image = productImageFor(prod.id);
                return (
                  <article
                    key={prod.id}
                    id={prod.id}
                    className="group bg-white border border-outline-variant rounded-2xl overflow-hidden shadow-sm premium-card hover:border-primary/40 flex flex-col scroll-mt-28"
                  >
                    {/* Visual */}
                    <div className="h-52 overflow-hidden relative bg-primary">
                      {image ? (
                        <Image
                          src={image}
                          alt={prod.bgAlt}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div
                          className="absolute inset-0 flex items-center justify-center text-[#F87B1B]"
                          style={{
                            background:
                              "linear-gradient(135deg, #1b3576 0%, #11224E 60%, #09112a 100%)",
                          }}
                          role="img"
                          aria-label={prod.bgAlt}
                        >
                          <span className="material-symbols-outlined text-7xl md:text-8xl group-hover:scale-110 transition-transform duration-500">
                            {prod.icon}
                          </span>
                        </div>
                      )}
                      <div className="absolute top-4 start-4 bg-[#F87B1B] text-[#11224E] px-4 py-1 rounded-full text-xs font-extrabold tracking-wide">
                        {prod.label}
                      </div>
                    </div>

                    {/* Copy Content */}
                    <div className="p-6 md:p-7 flex-grow flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <span className="w-10 h-10 rounded-lg bg-surface-container-high text-primary flex items-center justify-center flex-shrink-0">
                            <span className="material-symbols-outlined text-2xl">{prod.icon}</span>
                          </span>
                          <h3 className="text-xl font-bold text-primary">{prod.title}</h3>
                        </div>
                        <ul className="space-y-2.5 mb-6">
                          {prod.specs.map((spec, specIdx) => (
                            <li
                              key={specIdx}
                              className="flex items-start gap-2.5 text-secondary border-b border-outline-variant/30 pb-2 text-sm"
                            >
                              <span className="material-symbols-outlined text-primary text-lg mt-0.5">
                                check_circle
                              </span>
                              <span>{spec}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Link
                        href={prod.link}
                        className="w-full border-2 border-primary text-primary font-bold py-3 rounded-xl hover:bg-primary hover:text-white transition-colors flex items-center justify-center gap-2 text-sm"
                      >
                        {prod.btnText}
                        <span className="material-symbols-outlined group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform">
                          arrow_forward
                        </span>
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        );
      })}
    </section>
  );
}

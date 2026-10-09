"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export function ProductsGrid() {
  const { t } = useLanguage();

  const productImages = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAbUenytKE_MOashlICXkSB_RlVgCnnuOMGi3-tzeetO0q_Vz2NYvR1d6VrKQlusKkgu0vc7MwmrKl0hJFylWpS1kYDD7dQ7YDTR6OX-elpfgKSCDuGP43T0AM89jSAuz0_ukeMxLs66pnJdSut5Z3uSwjvi3GbGjFHoxAqFunFkVh9HlBrP_Xhegg39BfKjfQnNuSmcIg5rZS_LgvqGkvM_GeVBNggNIHDM234E3LafGmTzCa5l3yx",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDvL-sYn1TJXO-ySgAnZaBQGLsHhV5685jTzl6qSPNGmAp2692Eh9TAG8RnTXAPnkB8bWpudU2d9y1WNC1Nfm2IiLJHWCoWRNrWA6e_AupYo4kUfXNFDsJZQjWMlhA3UHTMUnHpQlyNOiWJbyTdGktVg4kIuYdx9t8Hlk9Vf8lb1X-UYAw1ymVfWqI9dY59mhBC2o6eV12QGPvee0Mf9I4QULkmkrZZjOpw-fFGktOZhsDDzcsIOnB0",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuA4hxjBT_RSmAKMhBdHGc2nUprLlLMLXNifGTLGFXBq1Ge_9CfOgThUFH0RBK6rs2z4DmUS_C-qCqyPhFLzoxmBJgFkIV9FwF81ubt-MudvNrEvwgSedX_J2Mxfv9C-U9oPikWPbpjlaILw2ogo-ZyDMRUROP5phnJAJZNEK5uY3-UDvd6Gv0zjaddsmOyKFEkhhA2i0OmMDJ41lZSBxHH3ctSPqN3u_bw3KnEKmWHz-flTbVIUww-i",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDtzVYk6lV8wrAE71nS1SF6vVwftqY2cGbbuwSonM7s6llGzRxrTtLOppViB0MCCys80AmQbGuai7crczZ_3NEfDv1aUeIpmkmhRXK4GnHYyQpl93lA9oTwXfqyitxeBq2jrarogaIgahNoMXjJHNDzSXT1FHnp-mT_lnixD7HfXfKpEORo46qZMiDmDG3r6iK7mvaUDUqjaQxyMGzrB2o0KTbVrAHDTGjFKyN0FtasT6fbSDm9OtWq",
  ];

  return (
    <section className="pb-16 md:pb-section-gap px-4 md:px-margin-desktop max-w-container-max mx-auto text-start">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
        {t.productsPage.categories.map((prod, index) => (
          <div
            key={index}
            className="group bg-white border border-metallic-silver/30 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col"
          >
            {/* Image Wrap */}
            <div className="h-72 overflow-hidden relative">
              <Image
                src={productImages[index]}
                alt={prod.bgAlt}
                fill
                sizes="(max-w-768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 start-4 bg-primary text-white px-4 py-1 rounded-full text-xs font-semibold">
                {prod.label}
              </div>
            </div>

            {/* Copy Content */}
            <div className="p-8 flex-grow flex flex-col justify-between">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-primary mb-4">
                  {prod.title}
                </h3>
                <ul className="space-y-3 mb-8">
                  {prod.specs.map((spec, specIdx) => (
                    <li
                      key={specIdx}
                      className="flex items-center gap-3 text-secondary border-b border-outline-variant/20 pb-2 text-sm"
                    >
                      <span className="material-symbols-outlined text-primary">
                        check_circle
                      </span>
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link href={prod.link}>
                <span className="w-full border-2 border-primary text-primary font-bold py-3 rounded-xl hover:bg-primary hover:text-white transition-colors flex items-center justify-center gap-2 group cursor-pointer text-sm inline-flex">
                  {prod.btnText}
                  <span className="material-symbols-outlined group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

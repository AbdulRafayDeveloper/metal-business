"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { Logo } from "@/components/Logo";
import { ContactActions } from "@/components/ContactActions";

export function Footer() {
  const { t } = useLanguage();

  const companyNav = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.aboutUs, href: "/about" },
    { label: t.nav.whyChooseUs, href: "/why-choose-us" },
    { label: t.nav.faqs, href: "/faqs" },
    { label: t.nav.contact, href: "/contact" },
  ];

  const productNav = [
    { label: "Aluminum Scrap", href: "/products/aluminum-scrap" },
    { label: "Copper Scrap", href: "/products#copper-scrap" },
    { label: "Zinc Alloys", href: "/products#zinc" },
    { label: "Steel Products", href: "/products#steel-sheets" },
    { label: "Fabrication Solutions", href: "/products#cable-tray" },
    // { label: t.nav.requestQuote, href: "/request-a-quote" }, // temporarily hidden (WhatsApp / Call instead)
  ];

  const industryNav = [
    { label: "Recycling Industry", href: "/industries" },
    { label: "Automotive & Manufacturing", href: "/industries" },
    { label: "Foundries & Smelters", href: "/industries" },
    { label: "Construction Infrastructure", href: "/industries" },
    { label: "Industrial Processing", href: "/industries" },
  ];

  return (
    <footer
      className="site-footer text-white rounded-none border-t border-white/10"
      style={{ backgroundColor: "#11224E", color: "#ffffff" }}
    >
      <div className="py-16 px-4 md:px-margin-desktop max-w-container-max mx-auto text-start">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Column 1: Brand Info */}
          <div className="space-y-6">
            <Logo variant="footer" size="lg" />
            <p className="text-sm text-white/90 leading-relaxed max-w-sm">
              {t.footer.description}
            </p>
            <ContactActions variant="onDark" size="sm" showNumber />
            <div className="pt-2 flex gap-3">
              <a
                className="w-10 h-10 border border-white/20 rounded-xl flex items-center justify-center hover:bg-[#F87B1B] hover:text-[#11224E] hover:border-[#F87B1B] transition-all cursor-pointer"
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="AluTrade Global on LinkedIn"
              >
                <span className="material-symbols-outlined text-lg">share</span>
              </a>
              <a
                className="w-10 h-10 border border-white/20 rounded-xl flex items-center justify-center hover:bg-[#F87B1B] hover:text-[#11224E] hover:border-[#F87B1B] transition-all cursor-pointer"
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="AluTrade Global Community"
              >
                <span className="material-symbols-outlined text-lg">groups</span>
              </a>
            </div>
          </div>

          {/* Column 2: Company Navigation */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#F87B1B] mb-6">
              Company
            </h3>
            <ul className="space-y-3">
              {companyNav.map((item, index) => (
                <li key={index}>
                  <Link
                    className="text-sm text-white/90 hover:text-[#F87B1B] hover:translate-x-1 transition-all inline-block"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Products & Trading */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#F87B1B] mb-6">
              Products & Inventory
            </h3>
            <ul className="space-y-3">
              {productNav.map((item, index) => (
                <li key={index}>
                  <Link
                    className="text-sm text-white/90 hover:text-[#F87B1B] hover:translate-x-1 transition-all inline-block"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Industries Served */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#F87B1B] mb-6">
              Industries Served
            </h3>
            <ul className="space-y-3">
              {industryNav.map((item, index) => (
                <li key={index}>
                  <Link
                    className="text-sm text-white/90 hover:text-[#F87B1B] hover:translate-x-1 transition-all inline-block"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="border-t border-white/10 py-6 px-4 md:px-margin-desktop max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-white/85 text-xs md:text-sm">
        <span>© 2026 AluTrade Global. All Rights Reserved. Precision in Metal Trading.</span>
        <div className="flex gap-6">
          <Link className="hover:text-[#F87B1B] transition-colors" href="/privacy-policy">
            Privacy Policy
          </Link>
          <span className="text-white/20">|</span>
          <Link className="hover:text-[#F87B1B] transition-colors" href="/terms-of-service">
            Terms of Service
          </Link>
          <span className="text-white/20">|</span>
          <Link className="hover:text-[#F87B1B] transition-colors" href="/image-credits">
            Image Credits
          </Link>
        </div>
      </div>
    </footer>
  );
}

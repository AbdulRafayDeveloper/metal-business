"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { Logo } from "@/components/Logo";
import { ContactActions } from "@/components/ContactActions";
import { contactNumber, siteConfig } from "@/constants/site";

export function Footer() {
  const { t } = useLanguage();

  const quickLinks = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.aboutUs, href: "/about" },
    { label: t.nav.products, href: "/products" },
    { label: t.nav.peb, href: "/pre-engineered-buildings" },
    { label: t.nav.canopy, href: "/petrol-pump-canopy" },
    { label: t.nav.whyChooseUs, href: "/why-choose-us" },
    { label: t.nav.faqs, href: "/faqs" },
    { label: t.nav.careers, href: "/careers" },
    { label: t.nav.contact, href: "/contact" },
    // { label: t.nav.requestQuote, href: "/request-a-quote" }, // temporarily hidden (WhatsApp / Call instead)
  ];

  const fabricationLinks = t.productsPage.categories
    .filter((c) => c.group === "fabrication")
    .map((c) => ({ label: c.title, href: `/products#${c.id}` }));

  const linkClass =
    "text-sm text-white/90 hover:text-[#F87B1B] hover:translate-x-1 transition-all inline-block";

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

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#F87B1B] mb-6">
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link className={linkClass} href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Fabrication */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#F87B1B] mb-6">
              {t.footer.fabrication}
            </h3>
            <ul className="space-y-3">
              {fabricationLinks.map((item) => (
                <li key={item.href}>
                  <Link className={linkClass} href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#F87B1B] mb-6">
              {t.footer.contactTitle}
            </h3>
            <ul className="space-y-4 text-sm text-white/90">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#F87B1B] text-xl">location_on</span>
                <span>{t.contact.info.addressVal}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#F87B1B] text-xl">call</span>
                <a href={contactNumber.telUrl} dir="ltr" className="hover:text-[#F87B1B] font-semibold">
                  {contactNumber.display}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#F87B1B] text-xl">mail</span>
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-[#F87B1B] break-all">
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#F87B1B] text-xl">schedule</span>
                <span>{t.contact.info.hoursVal}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="border-t border-white/10 py-6 px-4 md:px-margin-desktop max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-white/85 text-xs md:text-sm">
        <span>© 2026 AluTrade Global. All Rights Reserved. {t.footer.tagline}</span>
        <div className="flex gap-6">
          <Link className="hover:text-[#F87B1B] transition-colors" href="/privacy-policy">
            Privacy Policy
          </Link>
          <span className="text-white/20">|</span>
          <Link className="hover:text-[#F87B1B] transition-colors" href="/terms-of-service">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}

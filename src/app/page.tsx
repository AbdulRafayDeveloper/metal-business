import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ServicesOverview } from "@/components/ServicesOverview";
import { IndustriesServed } from "@/components/IndustriesServed";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { AboutMissionVision } from "@/components/AboutMissionVision";
import { AboutValues } from "@/components/AboutValues";
import { AboutCapabilities } from "@/components/AboutCapabilities";
import { AboutIndustriesServed } from "@/components/AboutIndustriesServed";
import { AboutGallery } from "@/components/AboutGallery";
import { InquiryBanner } from "@/components/InquiryBanner";
import { ContactStrip } from "@/components/ContactStrip";
import { Footer } from "@/components/Footer";
import { SchemaOrg, organizationSchema, websiteSchema } from "@/components/SchemaOrg";
import { getBaseUrl, siteConfig } from "@/constants/site";

const BASE_URL = getBaseUrl();

export const metadata: Metadata = {
  title:
    `${siteConfig.name} | International Aluminum & Metal Trading Company`,
  description:
    siteConfig.description,
  alternates: {
    canonical: BASE_URL,
    languages: {
      "en-US": BASE_URL,
      "ar": `${BASE_URL}?lang=ar`,
    },
  },
  openGraph: {
    title: `${siteConfig.name} | International Aluminum & Metal Trading Company`,
    description:
      "25+ years of precision metal trading. Supplying aluminum scrap, copper, zinc, and recyclable metals to manufacturers in 50+ countries. ISO certified, LME-linked pricing.",
    url: BASE_URL,
    type: "website",
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — International Aluminum & Metal Trading`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | International Aluminum & Metal Trading`,
    description:
      "25+ years of precision metal trading. 50+ countries served. ISO certified. Get your metal supply quote today.",
    images: [`${BASE_URL}/og-image.png`],
  },
};

export default function Home() {
  return (
    <>
      <SchemaOrg schema={organizationSchema} />
      <SchemaOrg schema={websiteSchema} />
      <Header />
      <main id="main-content" className="pt-20">
        <Hero />
        <ServicesOverview />
        <IndustriesServed />
        <WhyChooseUs />
        <AboutMissionVision />
        <AboutValues />
        <AboutCapabilities />
        <AboutIndustriesServed />
        <AboutGallery />
        <InquiryBanner />
        <ContactStrip />
      </main>
      <Footer />
    </>
  );
}

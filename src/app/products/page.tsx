import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { ProductsHero } from "@/components/ProductsHero";
import { ProductsIntro } from "@/components/ProductsIntro";
import { ProductsGrid } from "@/components/ProductsGrid";
import { ServicesOverview } from "@/components/ServicesOverview";
import { ServicesCapabilities } from "@/components/ServicesCapabilities";
import { ServicesGrid } from "@/components/ServicesGrid";
import { ProductsCta } from "@/components/ProductsCta";
import { Footer } from "@/components/Footer";
import {
  SchemaOrg,
  buildBreadcrumbSchema,
  buildWebPageSchema,
} from "@/components/SchemaOrg";
import { getBaseUrl, siteConfig } from "@/constants/site";

const BASE_URL = getBaseUrl();
const PAGE_URL = `${BASE_URL}/products`;

export const metadata: Metadata = {
  title: `Strategic Metal Inventory & Scrap Products | ${siteConfig.name}`,
  description:
    `Explore ${siteConfig.name}'s inventory: Aluminum Scrap (6061, 6063, UBC), Copper Scrap (Berry/Candy, Birch/Cliff), Zinc Ingots, and Recyclable Non-Ferrous Alloys.`,
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: `Strategic Metal Inventory & Scrap Products | ${siteConfig.name}`,
    description:
      "High-purity raw materials and recyclable metal assets for secondary smelters, foundries, and manufacturers worldwide.",
    url: PAGE_URL,
    type: "website",
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} Metal Inventory`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Metal Inventory & Scrap Products | ${siteConfig.name}`,
    description:
      "High-purity aluminum scrap, copper wire, zinc ingots, and recyclable non-ferrous alloys.",
    images: [`${BASE_URL}/og-image.png`],
  },
};

export default function ProductsPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: BASE_URL },
    { name: "Products", url: PAGE_URL },
  ]);

  const pageSchema = buildWebPageSchema({
    name: `Strategic Metal Inventory | ${siteConfig.name}`,
    description:
      "Explore high-purity aluminum scrap, copper, zinc, and recyclable non-ferrous metals.",
    url: PAGE_URL,
    type: "CollectionPage",
  });

  return (
    <>
      <SchemaOrg schema={breadcrumbSchema} />
      <SchemaOrg schema={pageSchema} />
      <Header />
      <main id="main-content" className="pt-20">
        <ProductsHero />
        <ProductsIntro />
        <ProductsGrid />
        <ServicesOverview />
        <ServicesCapabilities />
        <ServicesGrid />
        <ProductsCta />
      </main>
      <Footer />
    </>
  );
}

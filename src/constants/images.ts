/**
 * Local photo assets (public/images). All files are optimized JPEGs sourced
 * from openly licensed photo libraries; attributions live in imageCredits.ts.
 */
const PRODUCT_IDS = [
  "aluminum-scrap",
  "copper-scrap",
  "zinc",
  "recyclable-metals",
  "steel-sheets",
  "steel-bars",
  "steel-beams",
  "steel-coils",
  "cable-tray",
  "roof-sheets",
  "racks",
  "shuttering-plate",
  "grating",
  "perforated-plate",
  "pallet",
  "solar-stands",
  "peb",
  "petrol-pump-canopy",
] as const;

export type ProductId = (typeof PRODUCT_IDS)[number];

/** One photo per product category id (used on home, products and footer links). */
export const productImages: Record<ProductId, string> = Object.fromEntries(
  PRODUCT_IDS.map((id) => [id, `/images/products/${id}.jpg`]),
) as Record<ProductId, string>;

export function productImageFor(id: string): string | undefined {
  return (productImages as Record<string, string>)[id];
}

export const siteImages = {
  homeHero: "/images/site/home-hero.jpg",
  aboutHero: "/images/site/about-hero.jpg",
  aboutOverview: "/images/site/about-overview.jpg",
  detailHero: "/images/site/aluminum-detail-hero.jpg",
  sourcing: "/images/site/sourcing.jpg",
  logistics: "/images/site/logistics.jpg",
  /** Aluminum scrap detail page gallery, in display order. */
  aluminumShowcase: [
    "/images/products/aluminum-scrap.jpg",
    "/images/site/aluminum-extrusions.jpg",
    "/images/site/shredded-aluminum.jpg",
    "/images/site/aluminum-cans.jpg",
  ],
  /** About page scrolling gallery, in display order. */
  aboutGallery: [
    "/images/site/ingots.jpg",
    "/images/site/furnace.jpg",
    "/images/site/cargo-ship.jpg",
    "/images/site/quality-lab.jpg",
    "/images/site/logistics.jpg",
  ],
};

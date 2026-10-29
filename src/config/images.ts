import { galleryImages, services } from "./site";

const pexels = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1600`;

/**
 * Every photo on the site. Shared by the pages and by the preloader in
 * vite.config.ts, so a page's top photo starts downloading before React loads.
 */
export const pageImages = {
  home: {
    hero: pexels(280222),
    crew: pexels(4920288),
    cta: pexels(6728925),
  },
  about: {
    hero: pexels(8143675),
    story: pexels(32632465),
  },
  services: { hero: pexels(38936344) },
  gallery: { hero: pexels(27397124) },
  quote: { hero: pexels(37554739) },
  contact: { hero: pexels(7546775) },
  faq: { hero: pexels(11364122) },
} as const;

/** Widths offered to the browser; it downloads the smallest one that is sharp
 * on the visitor's screen. */
const WIDTHS = [480, 768, 1080, 1440, 1920];

/** How wide each kind of photo is rendered, for the browser's size choice. */
export const SIZES = {
  full: "100vw",
  half: "(min-width: 1024px) 50vw, 100vw",
  serviceCard: "(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw",
  galleryGrid: "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
  lightbox: "(min-width: 1024px) 1024px, 100vw",
} as const;

export function photoUrl(url: string, width: number): string {
  const u = new URL(url);
  u.searchParams.delete("h");
  u.searchParams.set("auto", "compress");
  u.searchParams.set("cs", "tinysrgb");
  u.searchParams.set("w", String(width));
  return u.toString();
}

export function photoSrcSet(url: string): string {
  return WIDTHS.map((w) => `${photoUrl(url, w)} ${w}w`).join(", ");
}

export interface PhotoRequest {
  url: string;
  sizes: string;
}

/** The photo visible as soon as each route opens, preloaded from index.html. */
export const entryImages: Record<string, PhotoRequest> = {
  "/": { url: pageImages.home.hero, sizes: SIZES.full },
  "/about": { url: pageImages.about.hero, sizes: SIZES.full },
  "/services": { url: pageImages.services.hero, sizes: SIZES.full },
  "/gallery": { url: pageImages.gallery.hero, sizes: SIZES.full },
  "/quote": { url: pageImages.quote.hero, sizes: SIZES.full },
  "/contact": { url: pageImages.contact.hero, sizes: SIZES.full },
  "/faq": { url: pageImages.faq.hero, sizes: SIZES.full },
};

/**
 * Every photo with the sizes it is rendered at, page heroes first, for
 * warming the cache. The sizes must match the rendered <Photo>, or the browser
 * picks a different width and the warmed copy goes unused.
 */
export const allImages: PhotoRequest[] = [
  ...Object.values(entryImages),
  { url: pageImages.home.crew, sizes: SIZES.half },
  { url: pageImages.home.cta, sizes: SIZES.full },
  { url: pageImages.about.story, sizes: SIZES.half },
  ...services.map((s) => ({ url: s.image, sizes: SIZES.serviceCard })),
  ...services.map((s) => ({ url: s.image, sizes: SIZES.half })),
  ...galleryImages.map((g) => ({ url: g.url, sizes: SIZES.galleryGrid })),
];

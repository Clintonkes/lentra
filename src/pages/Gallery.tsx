import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Photo from "@/components/Photo";
import { SIZES, pageImages } from "@/config/images";
import { galleryCategories, galleryImages } from "@/config/site";

type Category = (typeof galleryCategories)[number];

export default function Gallery() {
  const [category, setCategory] = useState<Category>("All");
  const [open, setOpen] = useState<number | null>(null);

  const items = category === "All" ? galleryImages : galleryImages.filter((g) => g.category === category);
  const current = open === null ? null : items[open];

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((i) => (i === null ? i : (i + 1) % items.length));
      if (e.key === "ArrowLeft") setOpen((i) => (i === null ? i : (i - 1 + items.length) % items.length));
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, items.length]);

  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="Work we are proud of"
        subtitle="Browse lawns and landscapes our crews have mowed, trimmed, cleaned up and built across San Antonio."
        image={pageImages.gallery.hero}
      />

      <section className="section">
        <div className="container-max">
          <div className="flex flex-wrap justify-center gap-2" role="tablist" aria-label="Filter by category">
            {galleryCategories.map((c) => (
              <button
                key={c}
                type="button"
                role="tab"
                aria-selected={category === c}
                onClick={() => setCategory(c)}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                  category === c ? "bg-evergreen-900 text-white shadow-soft" : "bg-white text-evergreen-900 ring-1 ring-sand-200 hover:ring-evergreen-700"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item, i) => (
              <button
                key={item.url}
                type="button"
                onClick={() => setOpen(i)}
                className="group relative overflow-hidden rounded-3xl bg-evergreen-100 text-left shadow-soft"
              >
                <Photo src={item.url} sizes={SIZES.galleryGrid} alt={item.caption} className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105" />
                <span className="absolute inset-0 bg-gradient-to-t from-evergreen-950/85 via-evergreen-950/10 to-transparent opacity-90 transition group-hover:opacity-100" />
                <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-evergreen-900 opacity-0 transition group-hover:opacity-100">
                  <Expand className="h-4 w-4" />
                </span>
                <span className="absolute inset-x-0 bottom-0 p-5">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-clay-300">{item.category}</span>
                  <span className="mt-1 block font-display text-lg font-semibold text-white">{item.caption}</span>
                </span>
              </button>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-sand-700">Want results like these for your property?</p>
            <Link to="/quote" className="btn-primary mt-5">
              Get Your Free Quote <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {current && open !== null && (
        <div
          className="fixed inset-0 z-[60] flex animate-fade-in items-center justify-center bg-evergreen-950/95 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={current.caption}
          onClick={() => setOpen(null)}
        >
          <button type="button" className="absolute right-4 top-4 rounded-full p-2 text-white hover:bg-white/10" onClick={() => setOpen(null)} aria-label="Close">
            <X className="h-7 w-7" />
          </button>
          <button
            type="button"
            className="absolute left-2 rounded-full p-2 text-white hover:bg-white/10 md:left-6"
            onClick={(e) => {
              e.stopPropagation();
              setOpen((open - 1 + items.length) % items.length);
            }}
            aria-label="Previous photo"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>
          <figure className="w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <Photo src={current.url} sizes={SIZES.lightbox} alt={current.caption} className="max-h-[78vh] w-full rounded-2xl object-contain" />
            <figcaption className="mt-4 text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-clay-300">{current.category}</span>
              <span className="mt-1 block font-display text-lg font-semibold text-white">{current.caption}</span>
            </figcaption>
          </figure>
          <button
            type="button"
            className="absolute right-2 rounded-full p-2 text-white hover:bg-white/10 md:right-6"
            onClick={(e) => {
              e.stopPropagation();
              setOpen((open + 1) % items.length);
            }}
            aria-label="Next photo"
          >
            <ChevronRight className="h-8 w-8" />
          </button>
        </div>
      )}
    </>
  );
}

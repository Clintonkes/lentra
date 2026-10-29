import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { allImages, photoSrcSet, photoUrl } from "@/config/images";

// As soon as the first page has loaded, fetch every other photo on the site,
// so later pages show their images the moment they open.
function warmImageCache() {
  const start = () => {
    for (const { url, sizes } of allImages) {
      const img = new Image();
      img.decoding = "async";
      // Same srcset/sizes as the rendered <Photo>, so the browser picks the
      // same width and the cached copy is the one the page will use.
      img.sizes = sizes;
      img.srcset = photoSrcSet(url);
      img.src = photoUrl(url, 1440);
    }
  };
  if (document.readyState === "complete") start();
  else window.addEventListener("load", start, { once: true });
}

export default function Layout() {
  const { pathname, hash } = useLocation();

  // New page: start at the top, or at the #section a link pointed to.
  useEffect(() => {
    const target = hash ? document.getElementById(decodeURIComponent(hash.slice(1))) : null;
    if (target) target.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [pathname, hash]);

  useEffect(warmImageCache, []);

  return (
    <div className="min-h-screen flex flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-evergreen-950"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main" className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

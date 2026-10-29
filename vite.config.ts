import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";
import { entryImages, photoSrcSet, photoUrl } from "./src/config/images";

const PLACEHOLDER = "<!--entry-image-preload-->";

// This app renders entirely client side, so the browser cannot discover a
// page's top photo until the JS bundle has downloaded and React has mounted.
// This adds a tiny inline script to index.html that preloads the photo for
// the route being opened (same srcset/sizes as the rendered <Photo>), so it
// downloads in parallel with the bundle.
function preloadEntryImage(): Plugin {
  let base = "/";
  return {
    name: "preload-entry-image",
    configResolved(config) {
      base = config.base;
    },
    transformIndexHtml(html) {
      if (!html.includes(PLACEHOLDER)) {
        throw new Error(`index.html is missing the ${PLACEHOLDER} placeholder`);
      }
      const map = Object.fromEntries(
        Object.entries(entryImages).map(([path, { url, sizes }]) => [
          path,
          { h: photoUrl(url, 1440), s: photoSrcSet(url), z: sizes },
        ]),
      );
      const script =
        `(function(){var m=${JSON.stringify(map)},b=${JSON.stringify(base)},p=location.pathname;` +
        `if(p.indexOf(b)===0)p='/'+p.slice(b.length);p=p.replace(/\\/+$/,'')||'/';` +
        `var u=m[p];if(!u)return;var l=document.createElement('link');l.rel='preload';l.as='image';` +
        `l.href=u.h;l.setAttribute('imagesrcset',u.s);l.setAttribute('imagesizes',u.z);` +
        `l.setAttribute('fetchpriority','high');document.head.appendChild(l);})();`;
      return html.replace(PLACEHOLDER, `<script>${script}</script>`);
    },
  };
}

export default defineConfig({
  plugins: [react(), preloadEntryImage()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});

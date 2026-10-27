// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://ilyaisaev.github.io",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ru"],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true,
    },
  },
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Inter",
      cssVariable: "--font-inter",
      weights: [400, 600],
      styles: ["normal", "italic"],
      subsets: ["latin", "cyrillic"],
      fallbacks: ["sans-serif"],
    },
    {
      provider: fontProviders.local(),
      name: "Monaspace Neon NF",
      cssVariable: "--font-monaspace-neon",
      styles: ["normal", "italic"],
      formats: ["woff2"],
      fallbacks: ["monospace"],
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/MonaspaceNeonNF-Regular.woff2"],
            weight: 400,
            style: "normal",
          },
          {
            src: ["./src/assets/fonts/MonaspaceNeonNF-SemiBold.woff2"],
            weight: 600,
            style: "normal",
          },
          {
            src: ["./src/assets/fonts/MonaspaceNeonNF-Italic.woff2"],
            weight: 400,
            style: "italic",
          },
          {
            src: ["./src/assets/fonts/MonaspaceNeonNF-SemiBoldItalic.woff2"],
            weight: 600,
            style: "italic",
          },
        ],
      },
    },
  ],
  experimental: {
    redirectPage: true,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});

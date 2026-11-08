import { defineConfig, fontProviders } from "astro/config";

export default defineConfig({
  output: "static",
  fonts: [{
    provider: fontProviders.google(),
    name: "Inter",
    cssVariable: "--font-inter",
    weights: [400, 600, 700],
    styles: ["normal"],
    subsets: ["latin", "latin-ext"],
    display: "swap",
    fallbacks: ["system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
  }],
});

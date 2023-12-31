import { defineConfig } from 'astro/config';
import svelte from "@astrojs/svelte";
import netlify from "@astrojs/netlify/functions";

export default defineConfig({
  output: "src/pages",
  adapter: netlify(),
  server: {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "text/html",

      "/src/components/**/*.svelte": {
        "Content-Type": "text/html",
      },
      "/src/pages/**/*.astro": {
        "Content-Type": "text/html",
      },
    },
  },
  integrations: [svelte()],
});
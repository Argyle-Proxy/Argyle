import { defineConfig } from 'astro/config';

import svelte from "@astrojs/svelte";

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  output: "src/pages",
  adapter: netlify(),
  server: {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "/*": {
        "Content-Type": "text/html"
      },
      "../src/src/pages": {
        "Content-Type": "text/html"
      },
    },
  },
  integrations: [svelte()],
});
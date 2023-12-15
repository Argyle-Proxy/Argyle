import { defineConfig } from 'astro/config.mjs';

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  output: "src/dist",
  adapter: netlify(),
});
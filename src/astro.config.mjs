import { defineConfig } from 'astro/config';

import netlify from "@astrojs/netlify/functions";
import { vercel } from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  output: "src/pages",
  adapter: [
    netlify(),
    vercel()
  ],
  server: {
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }
});
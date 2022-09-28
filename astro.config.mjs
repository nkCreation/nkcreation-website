import vue from "@astrojs/vue";
import compress from "astro-compress";
import { defineConfig } from 'astro/config';

import sitemap from "@astrojs/sitemap";

import * as dotenv from 'dotenv';
dotenv.config()

// https://astro.build/config
export default defineConfig({
  integrations: [vue(), compress(), sitemap()],
  vite: {
    ssr: {
      external: ["svgo"]
    }
  },
  site: `${process.env.HOSTNAME || process.env.DEPLOY_PRIME_URL || process.env.URL}`
});
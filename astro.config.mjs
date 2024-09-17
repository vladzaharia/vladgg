// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';
// import min from 'astro-min';
// import compressor from 'astro-compressor';
import swup from '@swup/astro';

// https://astro.build/config
export default defineConfig({
  site: 'https://vlad.gg',
  integrations: [tailwind(), swup()],
  output: 'server',
  adapter: cloudflare({
    cloudflareModules: true,
    imageService: "cloudflare",
    platformProxy: {
      enabled: true,
      configPath: 'wrangler.toml',
      persist: {
        path: './.cache/wrangler/v3',
      }
    }
  }),
});
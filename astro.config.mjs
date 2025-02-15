// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';
import react from '@astrojs/react'
import markdoc from '@astrojs/markdoc'
import keystatic from '@keystatic/astro';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://vlad.gg',
  integrations: [tailwind(), react(), markdoc(), keystatic(), icon()],
  prefetch: false,
  output: 'server',
  adapter: cloudflare({
    cloudflareModules: true,
    platformProxy: {
      enabled: true,
      configPath: 'wrangler.toml',
      persist: {
        path: './.cache/wrangler/v3',
      }
    }
  }),
  image: {
    service: {
      entrypoint: 'astro/assets/services/compile'
    }
  },
  vite: {
    ssr: {
      external: ["buffer", "path", "fs", "os", "crypto", "async_hooks"].map((i) => `node:${i}`),
    },
  },
});
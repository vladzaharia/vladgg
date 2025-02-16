// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
// import cloudflare from '@astrojs/cloudflare';
import node from '@astrojs/node';
import react from '@astrojs/react'
import markdoc from '@astrojs/markdoc'
import keystatic from '@keystatic/astro';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://vlad.gg',
  integrations: [tailwind(), react(), markdoc(), icon(), ...(process.env.SKIP_KEYSTATIC ? [] : [keystatic()])],
  prefetch: true,
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
  // adapter: cloudflare({
  //   imageService: 'cloudflare',
  //   platformProxy: {
  //     enabled: true,
  //     configPath: 'wrangler.toml',
  //     persist: {
  //       path: './.cache/wrangler/v3',
  //     },
  //   }
  // }),
  vite: {
    ssr: {
      external: ["process", "fs", "os", "crypto", "async_hooks"].map((i) => `node:${i}`),
    },
  },
});
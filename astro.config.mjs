// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import node from '@astrojs/node';
import react from '@astrojs/react'
import markdoc from '@astrojs/markdoc'
import keystatic from '@keystatic/astro';
import icon from 'astro-icon';
import compressor from 'astro-compressor';

// https://astro.build/config
export default defineConfig({
  site: 'https://vlad.gg',
  // Integrations with optimized order
  integrations: [
    // Core functionality
    react({
      include: ['**/*.{jsx,tsx}'],
    }),
    // Content and styling
    tailwind(),
    markdoc(),
    icon(),
    // Performance optimizations
    compressor(),
    // CMS (conditionally loaded)
    ...(process.env.SKIP_KEYSTATIC ? [] : [keystatic()]),
  ],
  // Performance optimizations
  compressHTML: true,
  scopedStyleStrategy: 'class', // Better CSS specificity control
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },
  // Build settings
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
  vite: {
    server: {
      allowedHosts: ['vladgg.tun.polaris.gdn', 'vlad.gg'],
    },
    ssr: {
      external: ["process", "fs", "os", "crypto", "async_hooks"].map((i) => `node:${i}`),
    },
    // Vite optimizations
    build: {
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom'],
          },
        },
      },
    },
  },
});
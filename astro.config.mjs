// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import node from '@astrojs/node';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';
import icon from 'astro-icon';
import compressor from 'astro-compressor';
import playformCompress from '@playform/compress';
import swup from '@swup/astro';

// https://astro.build/config
export default defineConfig({
  site: 'https://vlad.gg',
  // Integrations with optimized order
  integrations: [react({
    include: ['**/*.{jsx,tsx}'],
  }), tailwind(), markdoc(), icon(), compressor(), keystatic(), playformCompress(), swup()],
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
      allowedHosts: ['.tun.polaris.gdn', 'vlad.gg'],
    },
    ssr: {
      external: ['process', 'fs', 'os', 'crypto', 'async_hooks'].map((i) => `node:${i}`),
    },
    // Vite optimizations
    build: {
      sourcemap: true,
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
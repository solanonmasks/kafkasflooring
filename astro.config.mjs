// Astro settings. The site is built as plain static HTML files (in /dist).
import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  // Change this to the real domain once the site is live (used for social share links).
  site: 'https://kafkasflooring.com',
});

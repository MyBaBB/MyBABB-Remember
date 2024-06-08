import { defineConfig, minimalPreset as preset } from '@vite-pwa/assets-generator/config'

export default defineConfig({
  preset,
  images: [
    './favicon.png',
    './pwa-192x192.png',
    './pwa-512x512.png',
  ]
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'


export default defineConfig({
  base: "./" , 
  plugins: [
    VitePWA({
  includeAssets: ['favicon.ico', 'apple-touch-icon.png', 
 'mask-icon.svg'],
      manifest: {
        name: 'My Awesome App',
        short_name: 'MyApp',
        description: 'My Awesome App description',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'pwa-192x192.png',             },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
      ]
        }
      }),
    ],
})
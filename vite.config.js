import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
 
 
 
 
import { VitePWA } from 'vite-plugin-pwa'

 
export default defineConfig({
  base: './', // <--- 👀 
  plugins: [react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
      manifest: {
        name: 'Example React Vite PWA', // <--- 👀
        short_name: 'React Vite PWA', // <--- 👀
        description: 'Description', // <--- 👀
        theme_color: '#ffffff',
        
        icons: [
          {
            src: './pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: "any maskable",
      },
        {
            src: './pwa-512x512.png ',
             sizes: '512x512',
            type: 'image/png',
            purpose: "any maskable",
         }
        ]  
      }
    })
  ],
})
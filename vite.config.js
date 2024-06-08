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
          // {
          //   src: './Readme.png',
          //   sizes: '192x192',
          //   type: 'image/png'
          // },
        {
            src: './pwa-64x64.png',
             sizes: '64x64',
            type: 'image/png',
            purpose: "any maskable",
         }
        ]  
      }
    })
  ],
})
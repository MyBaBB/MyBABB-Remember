import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
 
 
 
 
import { VitePWA } from 'vite-plugin-pwa'

 
export default defineConfig({
  base: './', // <--- 👀 
  plugins: [react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.png', 'apple-touch-icon.png', 'mask-icon.svg'],
      manifest: {
        name: "Handy Dandy Note Pad App",  
        short_name: 'Fish-Brains',  
        description: 'Description', 
        theme_color: '#ffffff',
        
        icons: [
          {
            src: './favicon.png',
            sizes: '84x84',
            type: 'image/png',
            purpose: "any maskable",
      },
      
          {
            src: './apple-touch-icon-180x180.png ',
            sizes: '400x200',
            type: 'image/png',
            purpose: "any maskable",
      },

         
       
            ]  
      }
    })
  ],
})
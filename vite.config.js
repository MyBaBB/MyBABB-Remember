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
        name: 'Example React Vite PWA',  
        short_name: 'React Vite PWA',  
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
            src: './src/components/MainWrapper/nightOcean.jpg',
            sizes: '400x200',
            type: 'image/png',
            purpose: "any maskable",
      },

         
       
            ]  
      }
    })
  ],
})
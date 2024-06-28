import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
 
 
 


 
export default defineConfig({
  base: './', 

  plugins: [
    react(),
    VitePWA({
      manifest: {
    
          "name": "Web Developer Friend ",
          "short_name": "Notes",
          "theme_color": "196d9c",
          "background_color": "#196d9c",
          "display": "standalone",
          "scope": "./",
          "start_url": "./",
          "icons":[
          {
            "src":"favicon-32x32.png",
             "sizes":"32x32","type":"image/png",
             "purpose":"any maskable"
            },
             {
              "src":"favicon-16x16.png",
              "sizes":"16x16",
              "type":"image/png",
              "purpose":"any maskable"
            },
             
              {
                "src":"maskable_icon.png",
                "sizes":"192x192","type":"image/png",
                "purpose":"any maskable"
            },
              {
                "src":"logo192.png",
              "sizes":"192x192",
              "type":"image/png",
              "purpose":"any maskable"
            },
              {
                "src":"logo256.png",
                "sizes":"256x256",
                "type":"image/png",
                "purpose":"any maskable"
            },
              {
                "src":"logo384.png",
                "sizes":"384x384",
                "type":"image/png",
                "purpose":"any maskable"
            },
              {
                "src":"logo512.png",
                "sizes":"512x512",
                "type":"image/png",
                "purpose":"any maskable"
            },
              {
                "src":"android-chrome-512x512.png",
                "sizes":"512x512","type":"image/png",
                "purpose":"any maskable"
            },
              {
                "src":"android-chrome-192x192.png",
                "sizes":"192x192","type":"image/png",
                "purpose":"any maskable"
            },
              {
                "src":"apple-touch-icon.png",
                "sizes":"180x180","type":"image/png",
                "purpose":"any maskable"
            }],
              
            }

    }),
  ],
})
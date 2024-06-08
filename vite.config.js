import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: "./" , 
  plugins: [react(),
    VitePWA({
        manifest: {
          name: 'My Awesome App',
	        short_name: 'MyApp',
	        description: 'My Awesome App description',
	        theme_color: '#ffffff',

          Icons: [
            {
              src: "./src/assets/WooduckFavicon.ico",
              sizes: "80x80",
              type: "image/png",
              purpose: "any maskable",
             
            },
          
          ],
        }
      }),
    ],
})
 

  

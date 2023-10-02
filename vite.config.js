import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from "vite-plugin-pwa";

const manifestForPlugIn = {
  registerType:'autoUpdate',
  manifest:{
    name:"Gamer-Hub-404",
    short_name:"gamer-hub-404",
    description:"This is the gamer hub",
    theme_color:'#171717',
    background_color:'#f0e7db',
    display:"standalone",
    scope: "./",
    start_url: "/mobile-app/",
    orientation:'portrait',
    icons:[{
      "src": "android-chrome-192x192.png",
      "sizes":"192x192",
      "type":"image/png",
     "purpose":"maskable"
    },
    {
      "src":"android-chrome-512x512.png",
      "sizes":"512x512",
      "type":"image/png"
    },
    {
      "src": "apple-touch-icon.png",
      "sizes":"180x180",
      "type":"image/png",
      "purpose":"apple touch icon"
    },
  ],
},
}
export default defineConfig({
  base: './',
  plugins: [react(), VitePWA(manifestForPlugIn)],
})

if(!self.define){let e,i={};const n=(n,c)=>(n=new URL(n+".js",c).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(c,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let s={};const d=e=>n(e,o),l={module:{uri:o},exports:s,require:d};i[o]=Promise.all(c.map((e=>l[e]||d(e)))).then((e=>(r(...e),s)))}}define(["./workbox-7cfec069"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-DPuFZ1KW.js",revision:null},{url:"assets/index-DtQPbdpF.css",revision:null},{url:"index.html",revision:"661c4d2acab5756c8ac6b286d397cbdf"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"favicon-32x32.png",revision:"93989539c9a3379f5ff878f84b6104f8"},{url:"favicon-16x16.png",revision:"c438403794746a8be64e0161858cc223"},{url:"maskable_icon.png",revision:"dc98d903dbbd57b37bbdf15e2aa2b79d"},{url:"logo192.png",revision:"b848d1730ec4e395f1600d100d65e18c"},{url:"logo256.png",revision:"2aba607216e778c9353a9e946252c15c"},{url:"logo384.png",revision:"a7e3725143437caf23d514ec97da41be"},{url:"logo512.png",revision:"8df248516bde580b41dfaa5a06fcc43d"},{url:"android-chrome-512x512.png",revision:"c573910cb9bf8bc87c46163801a121fc"},{url:"android-chrome-192x192.png",revision:"cd28c5b861cf50e0ea3be7c3a2bf5fd3"},{url:"apple-touch-icon.png",revision:"504469685a1e8504dbebaf1637a203f0"},{url:"manifest.webmanifest",revision:"d42acd28fe64c98d1623ec6699d3f978"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));

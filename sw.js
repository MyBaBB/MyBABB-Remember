if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,o)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let c={};const d=e=>n(e,s),f={module:{uri:s},exports:c,require:d};i[s]=Promise.all(r.map((e=>f[e]||d(e)))).then((e=>(o(...e),c)))}}define(["./workbox-7cfec069"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-D3BsQTgH.css",revision:null},{url:"assets/index-QGmvc5hi.js",revision:null},{url:"index.html",revision:"acd438880c99b2de785be386de01dedc"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"favicon-32x32.png",revision:"c60757484655556d9481aed37175827a"},{url:"favicon-16x16.png",revision:"4eacaad562f930771ef09a61e7c7f72f"},{url:"maskable_icon.png",revision:"ea95e39448574437a2990ec4439577a5"},{url:"logo192.png",revision:"64d770496c3f3d49eafef34b4678d5f2"},{url:"logo256.png",revision:"79c865acf02870a93a7a8d24b8b6aeef"},{url:"logo384.png",revision:"abb7bb79f02afdf4d718c11e591f401e"},{url:"logo512.png",revision:"593b33570c0f4cdb85df54075f7f4a4e"},{url:"android-chrome-512x512.png",revision:"728f0d78fb1ac579f9c81484a327f93e"},{url:"android-chrome-192x192.png",revision:"4192a50a72addd977f88d036be5b68df"},{url:"apple-touch-icon.png",revision:"535d836c0cb543e67dc691863029dd07"},{url:"manifest.webmanifest",revision:"f50627fe5f575fad20a7e7e5571c0208"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));

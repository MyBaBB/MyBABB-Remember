if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,s)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let f={};const o=e=>n(e,c),b={module:{uri:c},exports:f,require:o};i[c]=Promise.all(r.map((e=>b[e]||o(e)))).then((e=>(s(...e),f)))}}define(["./workbox-7cfec069"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-B5wJQUiH.js",revision:null},{url:"assets/index-BCjZsULS.css",revision:null},{url:"index.html",revision:"d54f2cc0b959b9dfec3eba16993d9d13"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"favicon-32x32.png",revision:"7a9c1e1a0df3586d86b097cae5c38be6"},{url:"favicon-16x16.png",revision:"073f124e9698ba9686f44bb90b6a4ecb"},{url:"maskable_icon_x192.png",revision:"345a4b3f215dbb0c22198bb20ecfffa4"},{url:"maskable_icon.png",revision:"345a4b3f215dbb0c22198bb20ecfffa4"},{url:"Duck192x192.png",revision:"345a4b3f215dbb0c22198bb20ecfffa4"},{url:"Duck256x256.png",revision:"345a4b3f215dbb0c22198bb20ecfffa4"},{url:"Duck384x384.png",revision:"345a4b3f215dbb0c22198bb20ecfffa4"},{url:"Duck512x512.png",revision:"a543ce1128ed392a24f32696d786d2cd"},{url:"android-chrome-512x512.png",revision:"a543ce1128ed392a24f32696d786d2cd"},{url:"android-chrome-192x192.png",revision:"345a4b3f215dbb0c22198bb20ecfffa4"},{url:"apple-touch-icon.png",revision:"513d51b60e6d4d855de238f371b4344e"},{url:"manifest.webmanifest",revision:"060e310763feefaf6e6fae3d5ddda758"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));

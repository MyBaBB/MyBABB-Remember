if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,o)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let s={};const l=e=>n(e,c),a={module:{uri:c},exports:s,require:l};i[c]=Promise.all(r.map((e=>a[e]||l(e)))).then((e=>(o(...e),s)))}}define(["./workbox-7cfec069"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-CX8IMbV3.css",revision:null},{url:"assets/index-Da6E7kvg.js",revision:null},{url:"index.html",revision:"048b460d4dc88c4fd20681678136789a"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"favicon-32x32.png",revision:"b461e453c7f9cb3f52a8825c92940369"},{url:"favicon-16x16.png",revision:"f634e019d3555333f17a030f19dd9650"},{url:"maskable_icon.png",revision:"7bbc1ae486169aeec6be1da79e485a82"},{url:"logo192.png",revision:"b848d1730ec4e395f1600d100d65e18c"},{url:"logo256.png",revision:"2aba607216e778c9353a9e946252c15c"},{url:"logo384.png",revision:"a7e3725143437caf23d514ec97da41be"},{url:"logo512.png",revision:"8df248516bde580b41dfaa5a06fcc43d"},{url:"android-chrome-512x512.png",revision:"c573910cb9bf8bc87c46163801a121fc"},{url:"android-chrome-192x192.png",revision:"cd28c5b861cf50e0ea3be7c3a2bf5fd3"},{url:"apple-touch-icon.png",revision:"504469685a1e8504dbebaf1637a203f0"},{url:"manifest.webmanifest",revision:"f50627fe5f575fad20a7e7e5571c0208"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));

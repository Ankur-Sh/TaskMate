if(!self.define){let e,i={};const d=(d,n)=>(d=new URL(d+".js",n).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(n,r)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let o={};const a=e=>d(e,s),l={module:{uri:s},exports:o,require:a};i[s]=Promise.all(n.map((e=>l[e]||a(e)))).then((e=>(r(...e),o)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"apple-touch-icon-180x180.png",revision:"447b208f117e86941a698d62d321406a"},{url:"assets/index-WAI6d9_T.css",revision:null},{url:"assets/index-ztTipJKV.js",revision:null},{url:"assets/logo-Ju9grUBQ.png",revision:null},{url:"favicon.ico",revision:"f5d467ee0486b0832a3a16de1a6d06ee"},{url:"index.html",revision:"c1b67ebe37930f8afca8564f966ddf32"},{url:"logo.png",revision:"f802a5b657fc75495dbbbd40005d93bd"},{url:"maskable-icon-512x512.png",revision:"6ddcb95eb02f44f3e5c68cb03a9e0ed1"},{url:"pwa-192x192.png",revision:"dbcd80250ca2243ddb434b61a9ba9451"},{url:"pwa-512x512.png",revision:"e114588258d9d3a4fdef318b462b68fb"},{url:"pwa-64x64.png",revision:"07ecbdd72d998d656f9aad14735d445f"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"vite.svg",revision:"8e3a10e157f75ada21ab742c022d5430"},{url:"favicon.ico",revision:"f5d467ee0486b0832a3a16de1a6d06ee"},{url:"pwa-64x64.png",revision:"07ecbdd72d998d656f9aad14735d445f"},{url:"pwa-192x192.png",revision:"dbcd80250ca2243ddb434b61a9ba9451"},{url:"pwa-512x512.png",revision:"e114588258d9d3a4fdef318b462b68fb"},{url:"maskable-icon-512x512.png",revision:"6ddcb95eb02f44f3e5c68cb03a9e0ed1"},{url:"manifest.webmanifest",revision:"c98a68a9fe5e35087375d89e802301c0"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));

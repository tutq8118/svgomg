(function(){'use strict';async function a(a){const b=await caches.match(a);if(b)return b;const[c,d]=await Promise.all([fetch(a),caches.open(f)]);return d.put(a,c.clone()),c}let b=(()=>{function a(){return c||(c=new Promise((a,b)=>{const c=indexedDB.open('svgo-keyval',1);c.onerror=()=>{b(c.error)},c.onupgradeneeded=()=>{c.result.createObjectStore('keyval')},c.onsuccess=()=>{a(c.result)}})),c}async function b(b,c){const d=await a();return new Promise((a,e)=>{const f=d.transaction('keyval',b);f.oncomplete=()=>a(),f.onerror=()=>e(f.error),c(f.objectStore('keyval'))})}let c;return{async get(a){let c;return await b('readonly',(b)=>{c=b.get(a)}),c.result},set(a,c){return b('readwrite',(b)=>{b.put(c,a)})},delete(a){return b('readwrite',(b)=>{b.delete(a)})}}})();self.indexedDB||(b={get:(a)=>Promise.resolve(localStorage.getItem(a)),set:(a,b)=>Promise.resolve(localStorage.setItem(a,b)),delete:(a)=>Promise.resolve(localStorage.removeItem(a))});const c='1.13.1',d='svgomg-',e=`${d}static-${c}`,f=`${d}fonts`,g=[e,f];addEventListener('install',(a)=>{a.waitUntil((async()=>{const a=b.get('active-version'),d=await caches.open(e);await d.addAll(['./','imgs/icon.png','css/all.css','js/gzip-worker.js','js/page.js','js/prism-worker.js','js/svgo-worker.js','changelog.json','https://fonts.googleapis.com/css?family=Roboto:400,700|Inconsolata']);const f=await a;f&&f.split('.')[0]!==c.split('.')[0]||self.skipWaiting()})())}),addEventListener('activate',(a)=>{a.waitUntil((async()=>{for(const a of await caches.keys())a.startsWith(d)&&(g.includes(a)||(await caches.delete(a)));await b.set('active-version',c)})())}),addEventListener('fetch',(b)=>{const c=new URL(b.request.url);return'fonts.gstatic.com'==c.host?void b.respondWith(a(b.request)):void b.respondWith(caches.match(b.request).then((a)=>a||fetch(b.request)))})})();
//# sourceMappingURL=sw.js.map

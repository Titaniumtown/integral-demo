var cacheName="ytbn-graphing-software-pwa",filesToCache=["./","./index.html","./b065b311d7b649def33f08a551f16b78.js","./b065b311d7b649def33f08a551f16b78.wasm","./favicon.ico"];self.addEventListener("install",(function(e){e.waitUntil(caches.open(cacheName).then((function(e){return e.addAll(filesToCache)})))})),self.addEventListener("fetch",(function(e){e.respondWith(caches.match(e.request).then((function(n){return n||fetch(e.request)})))}));

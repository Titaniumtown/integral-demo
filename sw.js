var cacheName="ytbn-graphing-software-pwa",filesToCache=["./","./index.html","./a34b2d9f6fab8bce2b23cb23565b241d.js","./a34b2d9f6fab8bce2b23cb23565b241d.wasm","./favicon.ico"];self.addEventListener("install",(function(e){e.waitUntil(caches.open(cacheName).then((function(e){return e.addAll(filesToCache)})))})),self.addEventListener("fetch",(function(e){e.respondWith(caches.match(e.request).then((function(n){return n||fetch(e.request)})))}));

var cacheName="ytbn-graphing-software-pwa",filesToCache=["./","./index.html","./a2e8efe6e08f12239ed7d2d8e49e16df.js","./a2e8efe6e08f12239ed7d2d8e49e16df.wasm"];self.addEventListener("install",(function(e){e.waitUntil(caches.open(cacheName).then((function(e){return e.addAll(filesToCache)})))})),self.addEventListener("fetch",(function(e){e.respondWith(caches.match(e.request).then((function(t){return t||fetch(e.request)})))}));

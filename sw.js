var cacheName = 'ytbn-graphing-software-pwa';
var filesToCache = [
    './',
    './index.html',
    './d33b0c69fb4947610bd7df7c158c6e86.js',
    './d33b0c69fb4947610bd7df7c158c6e86.wasm',
    "./logo.svg"
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.addAll(filesToCache);
        })
    );
});

/* Serve cached content when offline */
self.addEventListener('fetch', function (e) {
    e.respondWith(
        caches.match(e.request).then(function (response) {
            return response || fetch(e.request);
        })
    );
});

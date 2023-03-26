var cacheName = 'ytbn-graphing-software-pwa';
var filesToCache = [
    './',
    './index.html',
    './18ab6d3d4aa15d80ce9b1ca75f33f422.js',
    './18ab6d3d4aa15d80ce9b1ca75f33f422.wasm',
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

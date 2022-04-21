var cacheName = 'ytbn-graphing-software-pwa';
var filesToCache = [
    './',
    './index.html',
    './d012f5780e3508ad1b0b791cede8e3a2.js',
    './d012f5780e3508ad1b0b791cede8e3a2.wasm',
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

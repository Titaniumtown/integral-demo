var cacheName = 'ytbn-graphing-software-pwa';
var filesToCache = [
    './',
    './index.html',
    './1165c08a9d8fd6662ec2c2fea6db38eb.js',
    './1165c08a9d8fd6662ec2c2fea6db38eb.wasm',
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

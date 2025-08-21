const CACHE_NAME = 'Pyramiding-Risk-Manager-v2';
const ASSETS = [
  '/Pyramiding-Risk-Manager/',
  '/Pyramiding-Risk-Manager/index.html',
  '/Pyramiding-Risk-Manager/manifest.json',
  '/Pyramiding-Risk-Manager/sw.js',
  '/Pyramiding-Risk-Manager/icons/icon-192.png',
  '/Pyramiding-Risk-Manager/icons/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const requestUrl = new URL(event.request.url);
  if (requestUrl.origin === location.origin) {
    if (requestUrl.pathname === '/' || requestUrl.pathname === '/Pyramiding-Risk-Manager/') {
      event.respondWith(caches.match('/Pyramiding-Risk-Manager/index.html'));
      return;
    }
  }
  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => cachedResponse || fetch(event.request))
  );
});
const state = {
  prices: [],
  isLong: true // true for long, false for short
};

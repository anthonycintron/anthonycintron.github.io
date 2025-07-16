// Service Worker for caching
const CACHE_NAME = 'anthony-cintron-v1';
const urlsToCache = [
  '/',
  '/css/main-updated.css',
  '/css/variables.css',
  '/css/base.css',
  '/css/components.css',
  '/js/performance.js',
  '/images/avatar.png',
  '/images/linkedin-icon.svg',
  '/images/twitter-icon.svg',
  '/images/google-icon.svg',
  '/images/instagram-icon.svg',
  '/fonts/Poppins/woff2/poppins-regular-webfont.woff2',
  '/fonts/Poppins/poppins-extralight-webfont.woff2'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Return cached version or fetch from network
        return response || fetch(event.request);
      }
    )
  );
});

// Clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
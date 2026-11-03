// Cache OneWorld for offline use
const CACHE_PREFIX = 'oneworld-';
const CACHE_NAME = 'oneworld-v2';
const ASSETS = [
  '/',
  '/index.html'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
      .catch(() => console.log('Cache setup skipped'))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys
          .filter(key => key.startsWith(CACHE_PREFIX) && key !== CACHE_NAME)
          .map(key => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  if (e.request.mode === 'navigate') {
    e.respondWith(
      fetch(e.request)
        .then(async response => {
          if (response.ok) {
            const cache = await caches.open(CACHE_NAME);
            await cache.put('/index.html', response.clone());
          }
          return response;
        })
        .catch(async () => (
          await caches.match('/index.html')
          || await caches.match('/')
        ))
    );
    return;
  }

  e.respondWith(
    caches.match(e.request)
      .then(response => response || fetch(e.request))
  );
});
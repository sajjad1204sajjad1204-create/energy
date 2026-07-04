const cacheName = 'v1';
const assets = [
  'index.html',
  'style.css', // اگر فایل CSS داری نامش را اینجا بنویس
  'script.js', // اگر فایل JS داری نامش را اینجا بنویس
  'manifest.json'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});

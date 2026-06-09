const CACHE_NAME = 'pomodoro-v2';
const ASSETS = [
  './',
  './index.html',
  './style.css',            
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './screenshot-mobile.png',   
  './screenshot-desktop.png'   
];

// Robot instaluje się w pamięci urządzenia
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Robot pilnuje, żeby strona działała bez sieci
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
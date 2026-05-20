const CACHE_NAME = "stalkernet-cache-v211";

const FILES_TO_CACHE = [
  "./",
  "./index.html",
  "./style.css",
  "./script.js",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png",
  "./assets/maps/WorldMap.jpg",
  "./assets/maps/Meadow.jpg",
  "./assets/maps/Swamp.jpg",
  "./assets/maps/Cordon.jpg",
  "./assets/maps/Darkscape.jpg",
  "./assets/audio/alert.wav",
  "./assets/audio/click.wav",
  "./assets/audio/boot.wav"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache =>
      Promise.all(
        FILES_TO_CACHE.map(file =>
          cache.add(file).catch(() => console.log("Could not cache:", file))
        )
      )
    )
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(key => key !== CACHE_NAME ? caches.delete(key) : null))
    )
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request))
  );
});

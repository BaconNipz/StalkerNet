const CACHE_NAME = "stalkernet-cache-v3977-public-card-close-fix";

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
  "./assets/audio/boot.wav",
  "./assets/faction-patches/ecologists.png",
  "./assets/faction-patches/clear_sky.png",
  "./assets/faction-patches/freedom.png",
  "./assets/faction-patches/renegades.png",
  "./assets/faction-patches/duty.png",
  "./assets/faction-patches/loners.png",
  "./assets/faction-patches/mercenaries.png",
  "./assets/faction-patches/isg.png",
  "./assets/faction-patches/monolith.png",
  "./assets/faction-patches/military.png",
  "./assets/faction-patches/bandits.png",
  "./assets/faction-patches/sin.png",
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

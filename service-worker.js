const CACHE_NAME = "stalkernet-cache-v433-map-marker-click-fix";

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


// v3.9.9.8 service worker cache polish
self.addEventListener("message", event => {
  const data = event.data || {};
  if (data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

self.addEventListener("activate", event => {
  event.waitUntil((async () => {
    const current = typeof CACHE_NAME !== "undefined" ? CACHE_NAME : "stalkernet-cache-v3998-cache-polish";
    const keys = await caches.keys();

    await Promise.all(keys.map(key => {
      const isStalkerNet = key.startsWith("stalkernet-cache-") || key.toLowerCase().includes("stalkernet");
      if (isStalkerNet && key !== current) return caches.delete(key);
      return Promise.resolve(false);
    }));

    if (self.clients && self.clients.claim) {
      await self.clients.claim();
    }
  })());
});


// v4.0.2 PWA polish
self.addEventListener("install", event => {
  if (self.skipWaiting) self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil((async () => {
    const current = typeof CACHE_NAME !== "undefined" ? CACHE_NAME : "stalkernet-cache-v402-pwa-polish";
    const keys = await caches.keys();

    await Promise.all(keys.map(key => {
      const isStalkerNet = key.startsWith("stalkernet-cache-") || key.toLowerCase().includes("stalkernet");
      if (isStalkerNet && key !== current) return caches.delete(key);
      return Promise.resolve(false);
    }));

    if (self.clients && self.clients.claim) await self.clients.claim();
  })());
});

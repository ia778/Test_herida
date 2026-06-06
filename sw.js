/* Service Worker · Test de las 5 Heridas · Vibrando en Dorado
   - Archivos propios (mismo origen): RED PRIMERO, con respaldo a caché si no hay
     conexión. Así la app siempre carga la versión más reciente cuando hay internet.
   - Recursos externos (React, Babel, tipografías): CACHÉ PRIMERO, para que la app
     siga funcionando sin conexión y cargue rápido.
   Sube el número de versión (v3, v4…) cada vez que cambies archivos, para forzar
   la actualización en los dispositivos. */

const CACHE = "t5h-v5";

const APP_SHELL = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.jsx",
  "./data.js",
  "./manifest.webmanifest",
  "./privacidad.html",
  "./assets/mandala.png",
  "./assets/icon-192.png",
  "./assets/icon-512.png",
  "./assets/src-viviana.png",
];

self.addEventListener("install", (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(APP_SHELL)).catch(() => {})
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;

  const sameOrigin = new URL(req.url).origin === self.location.origin;

  if (sameOrigin) {
    // RED PRIMERO para los archivos propios → siempre la versión más nueva.
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((cache) => cache.put(req, copy)).catch(() => {});
          return res;
        })
        .catch(() =>
          caches.match(req).then((cached) => cached || caches.match("./index.html"))
        )
    );
  } else {
    // CACHÉ PRIMERO para recursos externos (CDN, fuentes).
    event.respondWith(
      caches.match(req).then((cached) => {
        if (cached) return cached;
        return fetch(req).then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((cache) => cache.put(req, copy)).catch(() => {});
          return res;
        }).catch(() => cached);
      })
    );
  }
});

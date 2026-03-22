// Lao Mai Travel — Service Worker
// Bump this version string on every deployment to force cache refresh
const VERSION = 'lmt-v1';

const CACHE_PAGES   = VERSION + '-pages';
const CACHE_ASSETS  = VERSION + '-assets';
const CACHE_IMAGES  = VERSION + '-images';
const CACHE_FONTS   = VERSION + '-fonts';

const OFFLINE_URL = '/~offline';

// Pages to pre-cache on install (must all be reachable while online)
const PRECACHE_PAGES = [
  '/en',
  '/lo',
  OFFLINE_URL,
];

// ─── Install ────────────────────────────────────────────────────────────────

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_PAGES)
      .then((cache) => cache.addAll(PRECACHE_PAGES))
      .then(() => self.skipWaiting())
  );
});

// ─── Activate ───────────────────────────────────────────────────────────────

self.addEventListener('activate', (event) => {
  const current = new Set([CACHE_PAGES, CACHE_ASSETS, CACHE_IMAGES, CACHE_FONTS]);
  event.waitUntil(
    caches.keys()
      .then((names) => Promise.all(
        names
          .filter((name) => !current.has(name))
          .map((name) => caches.delete(name))
      ))
      .then(() => self.clients.claim())
  );
});

// ─── Fetch ──────────────────────────────────────────────────────────────────

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Only handle GET over http(s)
  if (request.method !== 'GET' || !url.protocol.startsWith('http')) return;

  // Never intercept API calls — form submissions must reach the server
  if (url.pathname.startsWith('/api/')) return;

  // ── Unsplash images: cache-first (they're immutable by URL) ──
  if (url.hostname === 'images.unsplash.com') {
    event.respondWith(cacheFirst(request, CACHE_IMAGES));
    return;
  }

  // ── Google Fonts CSS: stale-while-revalidate ──
  if (url.hostname === 'fonts.googleapis.com') {
    event.respondWith(staleWhileRevalidate(request, CACHE_FONTS));
    return;
  }

  // ── Google Fonts files: cache-first (versioned URLs) ──
  if (url.hostname === 'fonts.gstatic.com') {
    event.respondWith(cacheFirst(request, CACHE_FONTS));
    return;
  }

  // ── Local static assets (_next/static): cache-first ──
  if (url.pathname.startsWith('/_next/static/')) {
    event.respondWith(cacheFirst(request, CACHE_ASSETS));
    return;
  }

  // ── Local images (/img/): cache-first ──
  if (url.pathname.startsWith('/img/')) {
    event.respondWith(cacheFirst(request, CACHE_IMAGES));
    return;
  }

  // ── Page navigations: network-first, fall back to cache, then offline page ──
  if (request.mode === 'navigate') {
    event.respondWith(networkFirstWithOfflineFallback(request));
    return;
  }
});

// ─── Strategies ─────────────────────────────────────────────────────────────

async function cacheFirst(request, cacheName) {
  const cache  = await caches.open(cacheName);
  const cached = await cache.match(request);
  if (cached) return cached;

  try {
    const response = await fetch(request);
    if (response.ok) cache.put(request, response.clone());
    return response;
  } catch {
    return new Response('', { status: 408, statusText: 'Offline' });
  }
}

async function staleWhileRevalidate(request, cacheName) {
  const cache  = await caches.open(cacheName);
  const cached = await cache.match(request);

  const fetchPromise = fetch(request).then((response) => {
    if (response.ok) cache.put(request, response.clone());
    return response;
  }).catch(() => null);

  return cached || fetchPromise;
}

async function networkFirstWithOfflineFallback(request) {
  const cache = await caches.open(CACHE_PAGES);

  try {
    const response = await fetch(request);
    // Cache a fresh copy of every page the user visits
    if (response.ok) cache.put(request, response.clone());
    return response;
  } catch {
    const cached = await cache.match(request);
    if (cached) return cached;

    // Last resort: show the offline page
    const offline = await caches.match(OFFLINE_URL);
    return offline || new Response('You are offline.', {
      status: 503,
      headers: { 'Content-Type': 'text/plain' },
    });
  }
}

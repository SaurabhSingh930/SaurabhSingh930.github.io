'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "c447cd1db4a865b6efd88c4da5b3932d",
"assets/AssetManifest.bin.json": "aeaa400f24d01939680bde4ec18708e6",
"assets/AssetManifest.json": "db849c4d080e951137458a068d41e34a",
"assets/assets/images/a53_1.png": "76abb2a2695e40e0dde2227799e4e3c8",
"assets/assets/images/a53_2.png": "f0c16ce4fc29536eecaa0fff2a847d6e",
"assets/assets/images/a53_3.png": "25ed4697ddbc84f77568367c477aa00f",
"assets/assets/images/apple_watch_series_7_1.png": "6896b7b12420f45ae00d09c64effa94a",
"assets/assets/images/apple_watch_series_7_2.png": "ee8b64160b5afc7b8566757ea6dac229",
"assets/assets/images/apple_watch_series_7_3.png": "448cd0f21417a512ae5ce3cf0d8d7308",
"assets/assets/images/beats_studio_3-1.png": "2a52813a4c72af683516e01f9b6f6c48",
"assets/assets/images/beats_studio_3-2.png": "b7a1563b5d7cbd11334fec308e33bea7",
"assets/assets/images/beats_studio_3-3.png": "c221dc33472cb538bd808a973389d75b",
"assets/assets/images/beats_studio_3-4.png": "809b4dc0f4c2f433964531f70485dfee",
"assets/assets/images/empty_cart.png": "3e647f6309f275fbfc2dd0024f0d65ac",
"assets/assets/images/galaxy_watch_4_1.png": "8610803e40ffa156b545313174100836",
"assets/assets/images/galaxy_watch_4_2.png": "3ac712a0ece907293b552a69e7abe455",
"assets/assets/images/galaxy_watch_4_3.png": "db79c9be0476af37683dce8a1b70ea79",
"assets/assets/images/github.png": "8c647d3383cfc379f5cbb2dc4f023eea",
"assets/assets/images/logo.png": "a34ae6fe511babcd7d9e49cac4c1b621",
"assets/assets/images/profile_pic.jpg": "872e7ae5c2094562ec136534b2af897f",
"assets/assets/images/profile_pic.png": "8bc312b4a517860a66276b12fac675fd",
"assets/assets/images/samsung_q_60_a_1.png": "0668882764b8cf75abc1a50a2315f8cc",
"assets/assets/images/samsung_q_60_a_2.png": "e086c8857473f05e0cd491625b1afc8e",
"assets/assets/images/shopping.png": "e404ea63a735bc645816c330361bf8e8",
"assets/assets/images/sony_x_80_j_1.png": "0b8edd2e3ccde0db9a8485af8a249e9c",
"assets/assets/images/sony_x_80_j_2.png": "c22fabd184247075072d4bd90204570c",
"assets/assets/images/tab_s7_fe_1.png": "1a7ed93c366ae61d094b5d5ff4b20f7a",
"assets/assets/images/tab_s7_fe_2.png": "8f208d8b3a3bf89da7acf916dda691b9",
"assets/assets/images/tab_s7_fe_3.png": "2c57e5bb56c9091ff0e05fe042044273",
"assets/assets/images/tab_s8_1.png": "8e7ddcae4573f5ed0315c4baed1d37ac",
"assets/assets/images/tab_s8_2.png": "651d974e8bacfd75b7941541924a99f8",
"assets/assets/images/tab_s8_3.png": "7ae76358b5d01279c2ca73e65ef8044f",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "e5e4fc032d28b395b46586d2ec405d6a",
"assets/NOTICES": "b577c84927ff3ced9deaaab2f82a18c7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a046ea185c417952a666755eec0ed7a4",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "45483c72e7b64d657a5cec7078a8cfbb",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "133344c2f46b8c8a1466d8547610afd4",
"/": "133344c2f46b8c8a1466d8547610afd4",
"main.dart.js": "7bccebdd2d58672eec583dc665730f38",
"manifest.json": "f59201c7199d1e25373aead190782b9b",
"version.json": "b30701bc575cb4af8e1c68e41c6118b7"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

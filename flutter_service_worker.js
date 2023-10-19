'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "eb7057791afdadc63d29dc6a86c80fe6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "82dfea589fc93a471b68899871d24958",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "67729499cec506e04257db1969886388",
".git/logs/refs/heads/main": "879ffa784e0b1f5ec2ddd864f260486c",
".git/logs/refs/remotes/origin/main": "0cb069a69cebf8023d42adc96e2a08e3",
".git/objects/06/37a088a01e8ddab3bf3fa98dbe804cbde1a0dc": "2fedb3e87c69aac3dea537cfcd7943b2",
".git/objects/06/d3c5358cd600a497703cd9b3e54da0300572f4": "38dbe8d3bb03a4d5d2d1581d242dfbc3",
".git/objects/06/eaa1d78ae5a3d67e557da01135a74ed4665688": "67153ff55f128060df091d33fd979149",
".git/objects/18/58977b7ec1e59722279f36f2a86db4fba32da7": "8e6a6e1e261a71fc608667747023f041",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/22/963464caf09886e0b01aece31890496aa9d2c3": "4066efebb11ae0e53b205c396adb59ce",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/3f/b59ad5e1d02d945cd68015350606ea58f52ca6": "024529f240a36e4fd65cba12caa2e9d1",
".git/objects/44/f24ec143ba13575c413a96ee3b2d14779be79b": "8285853afdc95043fb27555e619cd363",
".git/objects/47/aec8d3081dc4c2eff313750c6315ea8c64d026": "239cf472b1ca5af7f687bb41d767ab1d",
".git/objects/47/ceca512d3fdf85d71aaec029e8b93e9c53ab3a": "910cb6fe088b3cbf3b5d4d48cbfa8874",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4c/095d52015f6e2e2d0cd171eb9c5d88a1c07e49": "026720e88557ee33e9cbbc398b777083",
".git/objects/51/04d8cc033a88986602f46ee602ebfbb5648b9c": "e2af9d64ce17b3eed7130be1d636f0f9",
".git/objects/53/34d834ac81b02973b4e3a2a9672acc31b7405a": "7802420d4625ac3afb807220cf8afeef",
".git/objects/57/d8fb01c6f79549fc907a702259469957811300": "b8aeb98079cd6fa733f28627e4ec40e6",
".git/objects/5c/4837aec944be739fe703b931a2e00f62d6a8c6": "cc4024b23179373731f7744ceb86a581",
".git/objects/5f/dd72ba0299acff516db4e05a4c952c81be47c8": "a0a974988a3a8b0153930e0cef7a1031",
".git/objects/6f/4684e083a018fb2b9b3e3579fa83d88e00357d": "c36a0d2885d9ce067027d762572f1a49",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/1243cdb68717ce3de1bc0b10d55e2c1c889a94": "0377b5e3fcb9e5de3690e3994d69e93a",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/9c/4665c45b4fa0f338e687e9e3109cc86407fd17": "cfd1e8a99dccbfb8b944fae44e955091",
".git/objects/9d/5f886353dcff6c222439cc1118e77eb1b007ea": "a87ff240c6e149d1ce495643e49417f9",
".git/objects/b5/6045710d36c55148263544496a63f1c8655c2e": "0c0a895dd3b338bae081deba713fb071",
".git/objects/b7/12367ada22628097c2584c0fa5fd54f0fa7413": "e19c08deec7fba9fc6023672c01401fa",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/ba32a40ef1fb6ba0f3ef391b146589bcc2992f": "1549326c6a3bc9110b0f17e3ad4e2ca0",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/c0/8f2e36634c57299a5806735bad5140de699f4e": "268151fcab8879543a3ca1c58e0d5ce4",
".git/objects/c2/d8d2f44dd987786bbc249d4ad7bac3360f4811": "1926a57b256d9def261ccf6dc2914f65",
".git/objects/c9/1b1e67ac0abeecb176da2692cdda56b059271d": "c130393e13213ce1c6771955bbd9d28d",
".git/objects/ce/4efc8b3d4b01f210a2a89a151ad1330c8b795a": "cc49ec51dd1e0887d1db05c2bf3020d4",
".git/objects/d2/95fd52d0343565abdbc84abec859772aeafc56": "a046665bf06f113d7ccc40ac085ccfa5",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/e2/ff5865b192241d53935e77de70a4e6dff2847a": "cad1058aedc6c21a518b3cb00af21fac",
".git/objects/e6/46d591f99adb142edab348e5d728ad2bddc4a3": "7630b34441d494db3bf4d884cd250e72",
".git/objects/f6/c4065ee222b653a99071ba14ec0605bf2312b8": "da18a012d6878bbcc6ded23c71a5ffcc",
".git/objects/f9/0a13e3d3897c452f1390eedfee9189c00a0717": "497c40fd1384c86d33e6b2a49c36889d",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fd/b4f4a2d68a6faced07a4f225fb98e73c41fbdb": "6545ceb7fb0bb07b5b262282d730f652",
".git/refs/heads/main": "4d79dd9e30fe47f9810196c66084911f",
".git/refs/remotes/origin/main": "4d79dd9e30fe47f9810196c66084911f",
"assets/alipay.jpg": "2b9c6010ae04652649b978fe7a8d35c4",
"assets/AssetManifest.bin": "50ebf17c77c98609c5e8579e0eff8eeb",
"assets/AssetManifest.json": "1b2353dd6513b33be7625e6cc93d2134",
"assets/assets/alipay.jpg": "2b9c6010ae04652649b978fe7a8d35c4",
"assets/assets/audios/clean.mp3": "ac70daf98741de473dec0eacdac333e8",
"assets/assets/audios/drop.mp3": "154540aeac037695ec1d80adfdff8936",
"assets/assets/audios/explosion.mp3": "2c8b5dd3f51298bbeb019ce1316aa6b9",
"assets/assets/audios/move.mp3": "389fd99cd348d712668fa34fd9738753",
"assets/assets/audios/rotate.mp3": "23789f16afc6b9cd22711ffde1baa57f",
"assets/assets/audios/start.mp3": "a5ca4c3bbeeb2d74b90ec1554a55cb1b",
"assets/assets/logo-sqr.png": "8faab7787805a85ff4a982a204c52152",
"assets/assets/material.png": "6daf304356cc010c1d23585c44041143",
"assets/assets/wechat.png": "199febd121794aabdee55fb9d0aeec92",
"assets/audios/clean.mp3": "ac70daf98741de473dec0eacdac333e8",
"assets/audios/drop.mp3": "154540aeac037695ec1d80adfdff8936",
"assets/audios/explosion.mp3": "2c8b5dd3f51298bbeb019ce1316aa6b9",
"assets/audios/move.mp3": "389fd99cd348d712668fa34fd9738753",
"assets/audios/rotate.mp3": "23789f16afc6b9cd22711ffde1baa57f",
"assets/audios/start.mp3": "a5ca4c3bbeeb2d74b90ec1554a55cb1b",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "d2acff02219201fe96ef970905ee73b2",
"assets/logo-sqr.png": "8faab7787805a85ff4a982a204c52152",
"assets/material.png": "6daf304356cc010c1d23585c44041143",
"assets/NOTICES": "6f217bb86ed5009dc7cc99e3e804922b",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/wechat.png": "199febd121794aabdee55fb9d0aeec92",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "03b7c197d6ab986f573ef6cfa73ec441",
"/": "03b7c197d6ab986f573ef6cfa73ec441",
"main.dart.js": "7daf7de229f40eb9f5ab20446e85851c",
"manifest.json": "bd327460c9103b6e1de768b9924a6d61",
"version.json": "78cebecb63d6f3ab8e67ea395bca18d7"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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

'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "54c9bac6e167eb89756db86b16b567af",
".git/config": "eb7057791afdadc63d29dc6a86c80fe6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "b7b9bdb226b7fa763d4000d643c719f7",
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
".git/index": "476f0e7477a221ff524054a5220cb740",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ad64693698b88829f4d1a7dc32030d8e",
".git/logs/refs/heads/main": "3107498aae5ce7db76d20247beb0f1d5",
".git/logs/refs/remotes/origin/main": "d0d7a5ac613b9a92f1b54daff1e8fd00",
".git/objects/02/c42594cdb369a7ffb8f8c0406fa20af67866de": "7160b510d4c63b2ffe2db8d46bbfcd8f",
".git/objects/04/87cbf0d3bf4a4f5b32248e593542da21161d78": "5d5f5de06703398fa02f9e52ac25c9d8",
".git/objects/05/d428a5796af0adc70cbaad7aa93b94624c68c5": "bd525e4d3c5b9e2450fc0c24121c28c3",
".git/objects/06/37a088a01e8ddab3bf3fa98dbe804cbde1a0dc": "2fedb3e87c69aac3dea537cfcd7943b2",
".git/objects/06/d3c5358cd600a497703cd9b3e54da0300572f4": "38dbe8d3bb03a4d5d2d1581d242dfbc3",
".git/objects/06/eaa1d78ae5a3d67e557da01135a74ed4665688": "67153ff55f128060df091d33fd979149",
".git/objects/09/b53df6395206c27f1192ab25660a2d991f9ae3": "86beb47d7ff8cced61d373e62a85a98e",
".git/objects/0f/39a15af86e64fde664283b32f9d8c499681df4": "5b22ff548d3888678b09bb65c429fc27",
".git/objects/10/1a6fea0e61f698c8bb95d6a90f4f3a4bdff337": "100ff058f84db3406dff3541ac47cbf5",
".git/objects/16/df89c77cc0bf9be30196caf2058de2d404b7ed": "41eca6c2fed60f2bf049c71b36ea266a",
".git/objects/18/58977b7ec1e59722279f36f2a86db4fba32da7": "8e6a6e1e261a71fc608667747023f041",
".git/objects/1d/ea795065380c65758c19bbedb9a3b66a5cc50c": "4cf7ab48f6b348af9d3eb10014cd5106",
".git/objects/1f/378521c18fa7be79348f734f913d33945d9a55": "f37e22d12f485ab39871baa009f96b38",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/22/963464caf09886e0b01aece31890496aa9d2c3": "4066efebb11ae0e53b205c396adb59ce",
".git/objects/23/77e661f1a0658dcb76dab4af2842bdf235a254": "89104c18051525909c4d242d134b2e58",
".git/objects/2b/422272cc86646b31d8d22fbad10aeb386e72ae": "2200048cbde128ac05b2412c02dbee89",
".git/objects/2b/5bc47aa5f0ee94a5dd6ca285d12869dd786e97": "6af0492528d7693eab0773a854f6f36c",
".git/objects/2d/232a752702c7c3064d46ff68c64a701a97798e": "a8450bb8f445e3471d12212856425347",
".git/objects/35/7f395842eb381d4133efb05f936c4433a56508": "da1a8889eb35e5136c4795145a6ca4ac",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/3f/b59ad5e1d02d945cd68015350606ea58f52ca6": "024529f240a36e4fd65cba12caa2e9d1",
".git/objects/41/b7a3436b810cfb6491c9bd912d35caf03cc593": "cd7e1007417493d2c18b001a9d2b23da",
".git/objects/44/f24ec143ba13575c413a96ee3b2d14779be79b": "8285853afdc95043fb27555e619cd363",
".git/objects/45/aaec99c9f1167139d737c5b36e459a0da7b354": "1b04305dd7b96fbb11426d4637c5e605",
".git/objects/46/34c6da13dfac4385a66344099103e0d84c64a4": "8edcde5555cd4d48e1eb67a813bfed0b",
".git/objects/47/aec8d3081dc4c2eff313750c6315ea8c64d026": "239cf472b1ca5af7f687bb41d767ab1d",
".git/objects/47/ceca512d3fdf85d71aaec029e8b93e9c53ab3a": "910cb6fe088b3cbf3b5d4d48cbfa8874",
".git/objects/4b/61f2ac3654bcdfa391a2025e6e5e3e213c29e9": "d48bee5c6e932400246af795fd77a27a",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4b/ed567ea66d9d00cbfe71b97d90f8bfe2d94dd8": "d0c0b1d010e573f19253f6fd280f750a",
".git/objects/4c/095d52015f6e2e2d0cd171eb9c5d88a1c07e49": "026720e88557ee33e9cbbc398b777083",
".git/objects/4e/9b44c71adeb90999781ccbaeb42f7c0203b6ef": "02857b782ed5fc74d41768200ad51616",
".git/objects/51/04d8cc033a88986602f46ee602ebfbb5648b9c": "e2af9d64ce17b3eed7130be1d636f0f9",
".git/objects/53/34d834ac81b02973b4e3a2a9672acc31b7405a": "7802420d4625ac3afb807220cf8afeef",
".git/objects/54/151633216dba633f40c1cc50ac6d646dcb636b": "f8844a3ac7f7a4bf2dd576059245b549",
".git/objects/56/9c4741b2cf0ebe0aa9097a4b0e4683e53acb98": "0a958a1ac936a42a6c7bc36a1a8166d2",
".git/objects/57/d8fb01c6f79549fc907a702259469957811300": "b8aeb98079cd6fa733f28627e4ec40e6",
".git/objects/59/afdb0ceec83471d3b2dea1d3617bafe3ffa40e": "c095f420c4c83c0ac6d79af60b735be6",
".git/objects/5c/4837aec944be739fe703b931a2e00f62d6a8c6": "cc4024b23179373731f7744ceb86a581",
".git/objects/5c/7306a0ada8ad2eb1d03d0838a0ae305a7b6c27": "b8a7aadb741aaad2d088d303e07b4fdb",
".git/objects/5f/c7e42de61ff044f40c51f8e8122ae1c8827705": "5836b16a7b4e96d3770cf903a54f5811",
".git/objects/5f/dd72ba0299acff516db4e05a4c952c81be47c8": "a0a974988a3a8b0153930e0cef7a1031",
".git/objects/60/f943f202abad6190a6672b8fe5d8baf6c66966": "b65c22b7b2fc5610e7557a8cd9fa4c82",
".git/objects/67/7e9c9985f020a496d4b8336d0eadcb57dc5a73": "15b6eef36ac5732278a318b313d85d24",
".git/objects/6d/92a2fd49c3e8743b081ae1a4c2e7c476815fd7": "995e165c785b13c0eb6e139d0eb1f87d",
".git/objects/6f/4684e083a018fb2b9b3e3579fa83d88e00357d": "c36a0d2885d9ce067027d762572f1a49",
".git/objects/71/dd86f64127dad2a59a8d3f527f3dde9b6a389f": "d8a1444549f69bc17c5a6e2ebd02667c",
".git/objects/77/cc83fe67a83761874a8a5a940ddd93d03eca2a": "bb6323f69dd6d4460d30f91506fa9050",
".git/objects/7a/859a045dbbaf8bda4b2ef5a0e8de6f31835dc8": "ca7a0182a604686521ef01e2a0c64e1c",
".git/objects/7b/13cb3acd3a4df2f64a7802982215316513a0f0": "8cdb6974273909a8a8de7715c75af293",
".git/objects/7b/ef96e4b7f6f77cfd6322b316a03c13f2689847": "85f3ca4f98f1fe9ab6bdc23db682f1b8",
".git/objects/7c/73f1d6a022ee2a4e8c99d0e16069bed2c5a2ab": "51c5687ed9431dc947666d1171bbf63a",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/1243cdb68717ce3de1bc0b10d55e2c1c889a94": "0377b5e3fcb9e5de3690e3994d69e93a",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/e5e85312442dcde067d61c42236b9e42867ec3": "0ad0a29a273eae55e452e1e173eaf531",
".git/objects/8f/4eebd7ca4d25a5d4d4a7c915aeac2923d663f4": "306d99c796c8f20016f481d9eddd09ea",
".git/objects/91/11d0df1a27b29cf668494589023728ab00064a": "c57eee70dab62467bde2e9b01c31b39a",
".git/objects/95/49ec3a79ce0f7ed3ef015f645f4397fb09a47c": "c7daa680dbe43a664c7012be36077b8e",
".git/objects/98/4205ee4b299eac9c4704fb959048a5a88594d5": "4655eee3e3a52876e4494f374893425a",
".git/objects/9c/4665c45b4fa0f338e687e9e3109cc86407fd17": "cfd1e8a99dccbfb8b944fae44e955091",
".git/objects/9d/5f886353dcff6c222439cc1118e77eb1b007ea": "a87ff240c6e149d1ce495643e49417f9",
".git/objects/a4/144a1bd7a681dc95e2e887944ed502364ee2cd": "1f74b2986e9ef528c752cbfff75f2f47",
".git/objects/a4/6b8bc445124437c911d7028db58e77e6939e23": "d85be32c3f812cf0eb592a9b997917e3",
".git/objects/ab/d2cbe3c3dd495af6ae825262da9e5d1aca393f": "b7a25434ddf3ccab99341369dd8480ef",
".git/objects/b5/6045710d36c55148263544496a63f1c8655c2e": "0c0a895dd3b338bae081deba713fb071",
".git/objects/b7/12367ada22628097c2584c0fa5fd54f0fa7413": "e19c08deec7fba9fc6023672c01401fa",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/bb0280fe2cbf6471c70de021950bb33ab04902": "9f0c5c18bce8dfc263de2b696a3f9c6a",
".git/objects/b9/ba32a40ef1fb6ba0f3ef391b146589bcc2992f": "1549326c6a3bc9110b0f17e3ad4e2ca0",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/c0/8f2e36634c57299a5806735bad5140de699f4e": "268151fcab8879543a3ca1c58e0d5ce4",
".git/objects/c2/d8d2f44dd987786bbc249d4ad7bac3360f4811": "1926a57b256d9def261ccf6dc2914f65",
".git/objects/c7/7e41c73483175696d103972673b18a6e19864a": "10b67e4df37131c8517b26077109ec42",
".git/objects/c9/1b1e67ac0abeecb176da2692cdda56b059271d": "c130393e13213ce1c6771955bbd9d28d",
".git/objects/cb/ccece5d9199c1a51688ff6e77d1b307994bba2": "c6ceaa9608a8699dce66855afd27a115",
".git/objects/cd/8d28ef14c86b0885888409aed5cda74662282d": "68c4ca41ead9c0481246b6d0cd827b12",
".git/objects/ce/4efc8b3d4b01f210a2a89a151ad1330c8b795a": "cc49ec51dd1e0887d1db05c2bf3020d4",
".git/objects/ce/a1d25c371c9cc6b190fa218a795f447b3cbdc1": "38f1c2b48e6c42edb5dd5ca1b6416eda",
".git/objects/d0/af00859e4e669fbeb77dde0995cb7c6737dd46": "8a1ba06f2ef71fac8ca8452af9316132",
".git/objects/d2/95fd52d0343565abdbc84abec859772aeafc56": "a046665bf06f113d7ccc40ac085ccfa5",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/8238ea5dc036c9bbf8d24a6fe0570d2724f66a": "9806df8b13a585d54a0a0f05c4118ee7",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/dc/14d8c0ebbb0229422404f1822dd67628251531": "1c2d13703e4111470f68b077685633eb",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/e0/5bffee7a08355fdf2b52f0d9bf6e7222208973": "667d8d9f44c57829d4cc78393f8a71fc",
".git/objects/e2/9d0175ad9d37301ecf048f30c7db1bf79a11fd": "854f1fe7b0d805815a3a93803ef42f15",
".git/objects/e2/ff5865b192241d53935e77de70a4e6dff2847a": "cad1058aedc6c21a518b3cb00af21fac",
".git/objects/e3/80eefc824db95b9d8a5e902388fef51d381db7": "76ab35d5fd3d124fd3b68a5aecd6360c",
".git/objects/e3/9a83b515b1ae5f3dbf61121ef3cba2a0efe06e": "e1aa870f62c0215e4ea5b21603942db8",
".git/objects/e6/46d591f99adb142edab348e5d728ad2bddc4a3": "7630b34441d494db3bf4d884cd250e72",
".git/objects/ed/075640d89be41a78a796468c3b8aef4577de64": "b6332b4abc108153bee22ff1c24ef5e2",
".git/objects/ee/dcfd2ddbffadec6d321ddc4793998080503af1": "15f095e637accfb252e51bdba148e640",
".git/objects/f1/6e9bda0c434cff5f154bf848ee8ea1e8544ed5": "930bc8289984615086642794cd9835ea",
".git/objects/f6/c4065ee222b653a99071ba14ec0605bf2312b8": "da18a012d6878bbcc6ded23c71a5ffcc",
".git/objects/f9/0a13e3d3897c452f1390eedfee9189c00a0717": "497c40fd1384c86d33e6b2a49c36889d",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fd/b4f4a2d68a6faced07a4f225fb98e73c41fbdb": "6545ceb7fb0bb07b5b262282d730f652",
".git/ORIG_HEAD": "3e860341b504b26460dac5d57f7d8729",
".git/refs/heads/main": "3e860341b504b26460dac5d57f7d8729",
".git/refs/remotes/origin/main": "3e860341b504b26460dac5d57f7d8729",
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
"assets/NOTICES": "43de1f9bc36ba2b86596b7ef2a44f20a",
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
"index.html": "b28532d3630c27d8fa90335a786cc82f",
"/": "b28532d3630c27d8fa90335a786cc82f",
"main.dart.js": "c6a22af2a43618656f12078fdae83bee",
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

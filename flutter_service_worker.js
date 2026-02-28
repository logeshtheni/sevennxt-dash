'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "29e1498f9273139e1b4712c63bedde7e",
"assets/AssetManifest.bin.json": "826cf47d0f74993f894f64f2889f950a",
"assets/assets/fonts/poppins/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/poppins/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/poppins/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/icons/Accessories.svg": "2a6cee8ef674c6e5421f172e7cacce2d",
"assets/assets/icons/Address.svg": "482cae5fc5a6e5f53c31bb21f9cae8a4",
"assets/assets/icons/Arrow%2520-%2520Left.svg": "b0178c95f40ca6abcccea2bce3ce38c4",
"assets/assets/icons/Arrow%2520-%2520Right.svg": "2bb9300824633b8beb92fbd8897abb5b",
"assets/assets/icons/Calender.svg": "a76476d0106c84f1f1ec8e70d35f7020",
"assets/assets/icons/Call.svg": "b409188d7192a5fe6e6b6fc2f8a209fd",
"assets/assets/icons/Camera.svg": "4db30cad04df02f3272b73b0b1db81f2",
"assets/assets/icons/card.svg": "0fbcd318614a350505c69737ee9ff50b",
"assets/assets/icons/cart.svg": "d8288876bfd4b50e70b7299faa610482",
"assets/assets/icons/Category.svg": "83bedadff1b411792b0b2190a754bec6",
"assets/assets/icons/Chat.svg": "bc67db756016b2d5efe26a9ba515004f",
"assets/assets/icons/Child.svg": "3d3b2d59cbb074d4273ec750df627553",
"assets/assets/icons/Danger%2520Circle.svg": "6e7e430fff0b7cb2c1d62935b397254a",
"assets/assets/icons/Delete.svg": "7dc67a67b739abf12f2b3c84336c69f2",
"assets/assets/icons/Delivery.svg": "a9f803f9003d013e4c2b23880ada6e29",
"assets/assets/icons/Doublecheck.svg": "7cf9316efb71b58ecdc6166275c471d8",
"assets/assets/icons/Edit%2520Square.svg": "15cc6eff0b30aaa6d1d19587d375c6ec",
"assets/assets/icons/Edit-Bold.svg": "0c80771c4bb414198df955a317c85f2a",
"assets/assets/icons/FAQ.svg": "4bf93ee85282c364b8046af77f057a15",
"assets/assets/icons/Filter.svg": "a0342114cb79b5cc9f4b3a958c0f1ed8",
"assets/assets/icons/Help.svg": "60d6b153e0301ee4a28b9c9de7c4c9b9",
"assets/assets/icons/Link.svg": "eeaa36f38bbd8cc2442a9d2dafc9998a",
"assets/assets/icons/Lock.svg": "84871668c425b3d453c9c07a9edb375b",
"assets/assets/icons/Logout.svg": "3437047a2def4b7003e623c82fb92006",
"assets/assets/icons/Message.svg": "8bc665df7c2d21baebb0335088790a34",
"assets/assets/icons/miniDown.svg": "96742d60dbe4e4983f25e8cae3ad65a0",
"assets/assets/icons/miniLeft.svg": "91b28bf477ed7458b3d10602c78a97b9",
"assets/assets/icons/miniRight.svg": "1c530b78f629abe3192c47b8e252e1b5",
"assets/assets/icons/miniTop.svg": "35e1635ef245ea41d240db02239dabbb",
"assets/assets/icons/Minus.svg": "91f3832437f8a8fd342e673b6c8fb9c0",
"assets/assets/icons/network.svg": "c53f1a6a091dcc6b74d3e1c5c045b0ce",
"assets/assets/icons/Newcard.svg": "50e9da3822eff4accba030e73da67c51",
"assets/assets/icons/notification.svg": "7e0000988869c8bd31642ad5ac84e769",
"assets/assets/icons/Order.svg": "102c885f33e9dc17248c4320cb71645e",
"assets/assets/icons/Pc.svg": "b88cf89aabe367d2bee1d8eb9c21b459",
"assets/assets/icons/Phone.svg": "0e627cbfde6505160680d0a4d7d4dac7",
"assets/assets/icons/Plus1.svg": "082fab37118b5c87ad97218a3c7b1c55",
"assets/assets/icons/Product.svg": "c050f613012500ad8179104275654e80",
"assets/assets/icons/Profile.svg": "e295d738fb106fbaea8f527c81e76a50",
"assets/assets/icons/Return.svg": "71d5fd134a9642d13da12f1b38cdfdd8",
"assets/assets/icons/Search.svg": "faf1640821c283fd4a3b0b0c867faf8c",
"assets/assets/icons/Shop.svg": "36c828b7bf09c26d408a08ca69a12f55",
"assets/assets/icons/Singlecheck.svg": "e132858fc7d8510c9f4654253d859489",
"assets/assets/icons/Sort.svg": "1f036ed3ffc2f6be63e7d8bfdacf8756",
"assets/assets/icons/Standard.svg": "c534f926996d0111afe0d30cad932b13",
"assets/assets/icons/Star-bold.svg": "209ca45311f67c499d368f658fedd0e6",
"assets/assets/icons/Star.svg": "b098fd9ed04d0582b0b0a927f07b9f82",
"assets/assets/icons/Star_filled.svg": "8da656b625dff45a2c48a56c36f84605",
"assets/assets/icons/Stores.svg": "dd8ae6d55c3084baa3bfa2d276d25256",
"assets/assets/icons/tv.svg": "5e61d8320da6c9ec5d439d63ce2a027c",
"assets/assets/icons/Wallet.svg": "a8b46a29acc5631746899b7ffbb223de",
"assets/assets/icons/Wishlist.svg": "5c3a40ef9eb9ff9755db295486804afd",
"assets/assets/Illustration/EmptyState_darkTheme.png": "75f4dcd3bdf18519d4b0de2e06fe9ff7",
"assets/assets/Illustration/EmptyState_lightTheme.png": "fecfdc9a1ab653ea959606536b623055",
"assets/assets/Illustration/faceId.png": "431f634f005f5c32b0296b91ad0116e8",
"assets/assets/Illustration/faceId_dark.png": "3cb8ef92fb2f96124053b0af1afcf5f6",
"assets/assets/Illustration/Failed_darkTheme.png": "c9672b901f22fa2cfbad41d0fb418d2a",
"assets/assets/Illustration/Failed_lightTheme.png": "b9b329580b9b8dadc0c0d4f46cba0867",
"assets/assets/Illustration/fingerprint.png": "a30d227ef529907b1ce828d760bea6c7",
"assets/assets/Illustration/fingerprint_dark.png": "9e16723e6aac9d2aa99e52f7365ceb04",
"assets/assets/Illustration/Help_darkTheme.png": "47cd37ac3532d9d1d8c60b57cdc61ca7",
"assets/assets/Illustration/Help_lightTheme.png": "828da80b74d5d77f6f536ad2c9f618e4",
"assets/assets/Illustration/Illustration-0.png": "367814300acf0d280da1d92612060715",
"assets/assets/Illustration/Illustration-1.png": "1f1b5ee4ae9f5347c8d758bd0d085f40",
"assets/assets/Illustration/Illustration-2.png": "34a279296f06659a0d39907877693aed",
"assets/assets/Illustration/Illustration-3.png": "d9bea71f50cb8c8a4764b930a7f4f086",
"assets/assets/Illustration/Illustration-4.png": "a4be058ed6d0cb0a37a0bbfa1dd7c335",
"assets/assets/Illustration/Illustration_darkTheme_0.png": "9c2b5e6a33cfcabe77f5e3381d3eadcc",
"assets/assets/Illustration/Illustration_darkTheme_1.png": "4b39992b72df432578a47ee5ccaffca1",
"assets/assets/Illustration/Illustration_darkTheme_2.png": "35088005212f0547c388b3f36058d599",
"assets/assets/Illustration/Illustration_darkTheme_3.png": "c0d50929286c6b0ff4d3cf74fd299baa",
"assets/assets/Illustration/Illustration_darkTheme_4.png": "084ee2708e30feb5b4b05e61f992f0a1",
"assets/assets/Illustration/NoResult.png": "6bdc365ba2174f871a5379cd9e9a478a",
"assets/assets/Illustration/NoResultDarkTheme.png": "770577343ebe3c99f4f2ae2d5be25daf",
"assets/assets/Illustration/no_internet.png": "7b5a1b34f5998bfb3da137fc1ec15ee8",
"assets/assets/Illustration/no_internet_dark.png": "d6ee0c6ad10d1e65296090b9ab5d342c",
"assets/assets/Illustration/Password.png": "fc4e536c734c7c7d0a5c946f73084dec",
"assets/assets/Illustration/Password_dark.png": "5b2f0f984b84a41dd504cfa623ea71b4",
"assets/assets/Illustration/PayWithCash_darkTheme.png": "53b7d493d04a64992bcecbaa47249433",
"assets/assets/Illustration/PayWithCash_lightTheme.png": "6893db365d958535c4b00f61a936d15b",
"assets/assets/Illustration/server_error.png": "44832349231a3d9a37d31b28ff2d1999",
"assets/assets/Illustration/server_error_dark.png": "29af4089621e9ab466212f9011a80287",
"assets/assets/Illustration/success.png": "aefb15ea2c339e2537730b72ef3e5c05",
"assets/assets/Illustration/success_dark.png": "ace1a133b0f0b662e3d32232498ebdc0",
"assets/assets/Illustration/Success_darkTheme.png": "cbe539d0a957f963e526514b74514481",
"assets/assets/Illustration/Success_lightTheme.png": "b2ef00dad08bec5a0104e4a9851bc7d2",
"assets/assets/Illustration/TurnOnNotification_darkTheme.png": "3f2908d3b3a5cf906f1278211aa6f59a",
"assets/assets/Illustration/TurnOnNotification_lightTheme.png": "9791e133e17a0b09d15c16ddd5f973bc",
"assets/assets/Illustration/VerificationCode_dark.png": "c4d4af3d747d98aba2adc3a961d7de7d",
"assets/assets/images/login_dark.png": "b41585df0ca72e4e30f0f104f19ce201",
"assets/assets/images/login_light.png": "146ec2a41fb61f156379465f949545f3",
"assets/assets/images/signUp_dark.png": "05956a73128d37e0fbbe737a714965fa",
"assets/assets/images/signUp_light.png": "bf82157d7ab0bf1361328ea94e9afec0",
"assets/assets/logo/sevenxt.png": "048b61aaebd1af1193ab24eed5a4cbba",
"assets/assets/logo/sevenxt.svg": "7be590877e850880868cd10b4adf6364",
"assets/assets/screens/Add%2520review%2520rate.png": "7b6bb43a3f2c0404bec402ce8bea1179",
"assets/assets/screens/Addresses.png": "75e65580c9dd7bc6a09264ab4bdc6350",
"assets/assets/screens/Cancel%2520order%2520-%2520Select%2520a%2520reason.png": "ef11eb51088dd48d892894d9f81338df",
"assets/assets/screens/Cart_1.png": "1feaed2a4e3556ce880b2e6258ae14a3",
"assets/assets/screens/Cart_2.png": "915f92568e2f56cbf5fa6d8ea1587448",
"assets/assets/screens/Cart_3.png": "aac87bac017ac26608ff16b329ed41a0",
"assets/assets/screens/Cart_4.png": "2f206c88a0490f26e6c209d7ef0d6834",
"assets/assets/screens/Cart_5.png": "b79d021962b50a1e36566002c4e3b496",
"assets/assets/screens/Cart_6.png": "aedfccf47cd5ab9ec28751433dff201e",
"assets/assets/screens/Edit%2520profile.png": "6b6f56f154e52d87df859789225d3ec3",
"assets/assets/screens/Enable%2520notification.png": "5a580371bab5aa780deb9bcdb533eb05",
"assets/assets/screens/Enter%2520verification%2520code.png": "2b4a6123450c7f9058902c5770c140b0",
"assets/assets/screens/Forgot%2520password%25206.png": "9e126e18cbb401033331b2014665f33c",
"assets/assets/screens/Forgot_password.png": "600f3b1040cb0cb82712e18aa7843091",
"assets/assets/screens/Kids.png": "573a977a514f8ff9c92e42154cc2a990",
"assets/assets/screens/No%2520notification.png": "7d33b1d61a65182a6fb7034c7ce07483",
"assets/assets/screens/notification%2520setting.png": "4f794064ddfbc5d3bbf5fc2ff0aa9beb",
"assets/assets/screens/Notification.png": "9b4c1a5220627acafd1d573d3caaea5a",
"assets/assets/screens/On%2520sales.png": "3d5ccf5526760533de3d52369bba12e2",
"assets/assets/screens/Orders.png": "749b59438f60585f3ea5df5f55446e7e",
"assets/assets/screens/Product%2520detail.png": "90f7a574832633af128fdf7a0a0da8b8",
"assets/assets/screens/Profile.png": "a4aaf48d9767451f3f59a800a778c71a",
"assets/assets/screens/Reset%2520password.png": "74132e32c7af8b94fddb9a6c268a601a",
"assets/assets/screens/reviews.png": "2d03c6131d381328758af62c7b929bc1",
"assets/assets/screens/SEARCH_1.png": "87998c3a4725758b9122636e01bf1dcf",
"assets/assets/screens/Search_2.png": "14b1eeee801d5eb7a0934f2694f818dc",
"assets/assets/screens/Search_3.png": "3682e061ca7fbe5d8682c9f7c4aa9e03",
"assets/assets/screens/Search_4.png": "7a26687f71b300072d257f27c7d56135",
"assets/assets/screens/Search_5.png": "dbff51069a6ed981ac423d4f5a13eab1",
"assets/assets/screens/Search_6.png": "35cdc47eb7ee32534a436cc794e0a03a",
"assets/assets/screens/Search_7.png": "6e64a3766d1bcaf5f30b2bbca06a4d95",
"assets/assets/screens/Search_8.png": "1ac774d1978359691be7c0e8b5b592e9",
"assets/assets/screens/Shipping%2520information.png": "2df9cf72bab89b6c9fe13174cbb13a30",
"assets/assets/screens/Size%2520Guide.png": "f3a68d010287e7984c741dd129b2fa31",
"assets/assets/screens/Verificaition%2520code.png": "78ee32ac473bde0bde920ec6a6eec1f3",
"assets/FontManifest.json": "ee8421cdf13057c78fd3f00efeeddcae",
"assets/fonts/MaterialIcons-Regular.otf": "536fd32a0f72a594f105f29d85d572a1",
"assets/NOTICES": "510b37e3b47030138ead8099d49f4008",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "c127ad749e42131af6f637f247340df2",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "86a6583594eabee1b7c5edee3ae6a696",
"/": "86a6583594eabee1b7c5edee3ae6a696",
"main.dart.js": "4b155d65ca580ff4e24a9a166453ade8",
"manifest.json": "0dc6ccd722504fa41c05ca83f9aaac20",
"sevenxt.png": "048b61aaebd1af1193ab24eed5a4cbba",
"version.json": "447e8ead0c6d6ea4aae7c60893cd930c"};
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

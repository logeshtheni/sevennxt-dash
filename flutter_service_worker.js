'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "c276d44cd67623ad982f293a044d0ed4",
"assets/AssetManifest.bin.json": "7576d0be84c7035acb9c21f33c729c31",
"assets/AssetManifest.json": "00763837f56fb04f3dca6496597523dc",
"assets/assets/fonts/poppins/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/poppins/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/poppins/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/icons/Accessories.svg": "be73af01b01038f3b44d15df43d37699",
"assets/assets/icons/Address.svg": "48c219ea0cb0f11f5a1042a809e06c7c",
"assets/assets/icons/Arrow%2520-%2520Left.svg": "ae0705c7cb75ebc7d5c1f34123cd593a",
"assets/assets/icons/Arrow%2520-%2520Right.svg": "f6b04f78c34a7365e9178739a9442941",
"assets/assets/icons/Calender.svg": "519f312bcc7e7657d47fef03c8f0a908",
"assets/assets/icons/Call.svg": "7daebd238ca2e83c2e7d996d43af04d1",
"assets/assets/icons/Camera.svg": "0a0296a916cd317d5a0c76500ba8e6cb",
"assets/assets/icons/card.svg": "f377cfcb1187ea0e19486056762f952a",
"assets/assets/icons/cart.svg": "d8288876bfd4b50e70b7299faa610482",
"assets/assets/icons/Category.svg": "e6b2c8fe8b25f4580dbc1ad0cc5c2293",
"assets/assets/icons/Chat.svg": "aed365fed79a34ab03121f7cab7486c3",
"assets/assets/icons/Child.svg": "f5e9a89a3a2b7eaf935d24749054957a",
"assets/assets/icons/Danger%2520Circle.svg": "39caebfcb2d167b7397feba91315929a",
"assets/assets/icons/Delete.svg": "3e42f361717b25753dccf69283223ff4",
"assets/assets/icons/Delivery.svg": "dfc70c38d18344f2cf1203fd1513481d",
"assets/assets/icons/Doublecheck.svg": "a3015b8b22e605679fc0b87b9d3e9caf",
"assets/assets/icons/Edit%2520Square.svg": "77b337567cee323fb72690cd218cbf17",
"assets/assets/icons/Edit-Bold.svg": "70bfce09128659b50b4d8a9dcd68371d",
"assets/assets/icons/FAQ.svg": "e39e36426442fc4a42ffe96d4462367e",
"assets/assets/icons/Filter.svg": "1c64f687e6c85f9746884e926d6549a3",
"assets/assets/icons/Help.svg": "228c31b99c04fa09a04824713b555607",
"assets/assets/icons/Link.svg": "3725d81d95d4c7b6a26be0953b436158",
"assets/assets/icons/Lock.svg": "900d707849312cb786a59349329ef9c1",
"assets/assets/icons/Logout.svg": "f463f1cbcac0477cc32953893c1ea5e3",
"assets/assets/icons/Message.svg": "d285cb7af743bc7ba26509fa45909d29",
"assets/assets/icons/miniDown.svg": "a8c0c7164530f7de8a3922e5a4d2f7ca",
"assets/assets/icons/miniLeft.svg": "3f1ecffa36a92a5453f1b8187c93c0db",
"assets/assets/icons/miniRight.svg": "3720205c7d4ae01d4f6710137e5027bb",
"assets/assets/icons/miniTop.svg": "71bb20df4eb28fc245e592355d1dc8da",
"assets/assets/icons/Minus.svg": "63a163ca84a11a87058e55f2468fdb39",
"assets/assets/icons/network.svg": "0531cb06aeb95c9af1af99614e9e7eba",
"assets/assets/icons/Newcard.svg": "6d7e6ad692948e8826bc28032753cbc9",
"assets/assets/icons/Order.svg": "7d32862fc35cb93679bf6362e1be11dc",
"assets/assets/icons/Pc.svg": "9a447b5d5f28a70bb0e1b9b9ff0654e9",
"assets/assets/icons/Phone.svg": "f4bc074f82af01f4b13df9c5d12668ca",
"assets/assets/icons/Plus1.svg": "59596579ccc6a2bfd742082e2e44e735",
"assets/assets/icons/Product.svg": "d8a65d7161854b8d8f45b0fcbf802712",
"assets/assets/icons/Profile.svg": "7e56a4b92cfb5e87662fd7246f301283",
"assets/assets/icons/Return.svg": "cb668cd41ff0bda744045a5c908209cb",
"assets/assets/icons/Search.svg": "f7933c688860cc630d85f4ddef242c1e",
"assets/assets/icons/Shop.svg": "7755b8286979f6ae81cf894c984d44b0",
"assets/assets/icons/Singlecheck.svg": "a6cb9b3a7b46e0e8b1754629214da482",
"assets/assets/icons/Sort.svg": "72d527c3ff66641baba34e060ebc0270",
"assets/assets/icons/Standard.svg": "c7a789a47fac931879d946dab50a1ed2",
"assets/assets/icons/Star-bold.svg": "9ef02ca54c9ec0ffe06f0674cd77196e",
"assets/assets/icons/Star.svg": "e3756fd4afd722a172b8d9f9770a1a0d",
"assets/assets/icons/Star_filled.svg": "0ec0ecf88f557340b44f6d607222171f",
"assets/assets/icons/Stores.svg": "5540e0e2541034a8d2f25526e27649d9",
"assets/assets/icons/tv.svg": "6448219b08695f4266ae3045ae1fb77f",
"assets/assets/icons/Wallet.svg": "9ed16eb7157c67d182774c7c34065464",
"assets/assets/icons/Wishlist.svg": "f14e0e383768d7bc3ddddf110a217330",
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
"assets/assets/logo/sevenxt.svg": "447d9a12621dc34cac1cea5137f4979b",
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
"assets/fonts/MaterialIcons-Regular.otf": "ab29bb807b7ec586304fb1dfd7ebe475",
"assets/NOTICES": "c48669546c95349856d283023eb703d4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "7b0faf3b83e6e40989012454bc0c50df",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "6edf9fdbbf54bc9be606c6fcaf1955ce",
"/": "6edf9fdbbf54bc9be606c6fcaf1955ce",
"main.dart.js": "e16959926f4f3ab3ca58c572165a6501",
"manifest.json": "0dc6ccd722504fa41c05ca83f9aaac20",
"version.json": "3ff36d1d44722bb7c2428fddd8ee03ee"};
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

"use strict";
var precacheConfig = [
        ["/index.html", "530b1d5b577e612931bb01a285956907"],
        ["/static/css/main.5ad48010.css", "2752e9adf2ea17d5b80498a5bf432b03"],
        ["/static/js/main.a7079f53.js", "55beee712c863e8c5e85af92ad62797f"],
        ["/static/media/ACaslonPro-Bold.037ef68e.woff", "037ef68e2756ce9e4568e6264025b5c0"],
        ["/static/media/ACaslonPro-Bold.5841c60f.eot", "5841c60f84ec59ed3e0be9952b24d65c"],
        ["/static/media/ACaslonPro-Bold.66f08ad2.ttf", "66f08ad28193ef1967002efce8c4f868"],
        ["/static/media/ACaslonPro-Regular.21c9cdbd.ttf", "21c9cdbd37c3178a584ae07a6deaf34d"],
        ["/static/media/ACaslonPro-Regular.bc7c7f16.woff", "bc7c7f161ad175e4e0e9c51041a6d029"],
        ["/static/media/ACaslonPro-Regular.ea4bdc87.eot", "ea4bdc87e4d3bd7c9399cb7c93e4019a"],
        ["/static/media/ACaslonPro-Semibold.06728e36.woff", "06728e364f66f92b0d4b7cfa61fdb717"],
        ["/static/media/ACaslonPro-Semibold.0e29ecd8.ttf", "0e29ecd8d45bf13b1b819eb4fd5f02e6"],
        ["/static/media/ACaslonPro-Semibold.2dd3cbe4.eot", "2dd3cbe421f24b9fe53a0e8a5db4fe32"],
        ["/static/media/Proxima-Nova-Semibold.4bbcd593.eot", "4bbcd593d0224a0dcbbb96b2421c3791"],
        ["/static/media/Proxima-Nova-Semibold.eb181dd4.woff", "eb181dd4619c5c0e2ec159ab2273f903"],
        ["/static/media/Proxima-Nova-Semibold.f94f02b0.ttf", "f94f02b09c80be5206f2d196a5393e48"],
        ["/static/media/Proxima-Nova-Thin.11bd9658.eot", "11bd965878fa8d41be0fc89dbec927fe"],
        ["/static/media/Proxima-Nova-Thin.5beace77.woff", "5beace7760a29db2e2a21c1e22a160f6"],
        ["/static/media/Proxima-Nova-Thin.6356c872.ttf", "6356c872d05e5e30b3576d34de8e2aa8"],
        ["/static/media/ProximaNova-Regular.81e9a8c3.ttf", "81e9a8c371a12999a2cd625b888a1d61"],
        ["/static/media/ProximaNova-Regular.994c0a38.eot", "994c0a38a8306420cb2e8296bc8935d8"],
        ["/static/media/ProximaNova-Regular.a0bae8a7.woff", "a0bae8a7cacb322d0b48c0e6af6994a1"],
        ["/static/media/ProximaNovaBlack.23e800dc.ttf", "23e800dc7f51f14a44a9700532e6124d"],
        ["/static/media/ProximaNovaBlack.92199e15.eot", "92199e1585d801f22408bc309f674a79"],
        ["/static/media/ProximaNovaBlack.ad12145e.woff", "ad12145ee9fa81fd5e29d27d6307135f"],
        ["/static/media/ProximaNovaBold.784aec7d.eot", "784aec7dbb0e99fd044dd0fc8265c73d"],
        ["/static/media/ProximaNovaBold.eda246d7.ttf", "eda246d71cebc2dcc7e3c79509bc203f"],
        ["/static/media/ProximaNovaBold.f04519f3.woff", "f04519f3343cd883d8a29d021b9137df"],
        ["/static/media/fontawesome-webfont.674f50d2.eot", "674f50d287a8c48dc19ba404d20fe713"],
        ["/static/media/fontawesome-webfont.912ec66d.svg", "912ec66d7572ff821749319396470bde"],
        ["/static/media/fontawesome-webfont.af7ae505.woff2", "af7ae505a9eed503f8b8e6982036873e"],
        ["/static/media/fontawesome-webfont.b06871f2.ttf", "b06871f281fee6b241d60582ae9369b9"],
        ["/static/media/fontawesome-webfont.fee66e71.woff", "fee66e712a8a08eef5805a46892932ad"]
    ],
    cacheName = "sw-precache-v3-sw-precache-webpack-plugin-" + (self.registration ? self.registration.scope : ""),
    ignoreUrlParametersMatching = [/^utm_/],
    addDirectoryIndex = function(e, a) { var t = new URL(e); return "/" === t.pathname.slice(-1) && (t.pathname += a), t.toString() },
    cleanResponse = function(e) { return e.redirected ? ("body" in e ? Promise.resolve(e.body) : e.blob()).then(function(a) { return new Response(a, { headers: e.headers, status: e.status, statusText: e.statusText }) }) : Promise.resolve(e) },
    createCacheKey = function(e, a, t, c) { var n = new URL(e); return c && n.pathname.match(c) || (n.search += (n.search ? "&" : "") + encodeURIComponent(a) + "=" + encodeURIComponent(t)), n.toString() },
    isPathWhitelisted = function(e, a) { if (0 === e.length) return !0; var t = new URL(a).pathname; return e.some(function(e) { return t.match(e) }) },
    stripIgnoredUrlParameters = function(e, a) { var t = new URL(e); return t.hash = "", t.search = t.search.slice(1).split("&").map(function(e) { return e.split("=") }).filter(function(e) { return a.every(function(a) { return !a.test(e[0]) }) }).map(function(e) { return e.join("=") }).join("&"), t.toString() },
    hashParamName = "_sw-precache",
    urlsToCacheKeys = new Map(precacheConfig.map(function(e) { var a = e[0],
            t = e[1],
            c = new URL(a, self.location),
            n = createCacheKey(c, hashParamName, t, /\.\w{8}\./); return [c.toString(), n] }));

function setOfCachedUrls(e) { return e.keys().then(function(e) { return e.map(function(e) { return e.url }) }).then(function(e) { return new Set(e) }) }
self.addEventListener("install", function(e) { e.waitUntil(caches.open(cacheName).then(function(e) { return setOfCachedUrls(e).then(function(a) { return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t) { if (!a.has(t)) { var c = new Request(t, { credentials: "same-origin" }); return fetch(c).then(function(a) { if (!a.ok) throw new Error("Request for " + t + " returned a response with status " + a.status); return cleanResponse(a).then(function(a) { return e.put(t, a) }) }) } })) }) }).then(function() { return self.skipWaiting() })) }), self.addEventListener("activate", function(e) { var a = new Set(urlsToCacheKeys.values());
    e.waitUntil(caches.open(cacheName).then(function(e) { return e.keys().then(function(t) { return Promise.all(t.map(function(t) { if (!a.has(t.url)) return e.delete(t) })) }) }).then(function() { return self.clients.claim() })) }), self.addEventListener("fetch", function(e) { if ("GET" === e.request.method) { var a, t = stripIgnoredUrlParameters(e.request.url, ignoreUrlParametersMatching),
            c = "index.html";
        (a = urlsToCacheKeys.has(t)) || (t = addDirectoryIndex(t, c), a = urlsToCacheKeys.has(t)); var n = "/index.html";!a && "navigate" === e.request.mode && isPathWhitelisted(["^(?!\\/__).*"], e.request.url) && (t = new URL(n, self.location).toString(), a = urlsToCacheKeys.has(t)), a && e.respondWith(caches.open(cacheName).then(function(e) { return e.match(urlsToCacheKeys.get(t)).then(function(e) { if (e) return e; throw Error("The cached response that was expected is missing.") }) }).catch(function(a) { return console.warn('Couldn\'t serve response for "%s" from cache: %O', e.request.url, a), fetch(e.request) })) } });
"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","5af3a654737f78cfe9083b9ee9e89bf3"],["/static/css/main.989b8c56.css","3d4426be71e3598724ee5ef9515c754b"],["/static/js/main.7b43a553.js","147048801c0c45156c941b62aadc47cb"],["/static/media/Graphik-Light.74ef40a2.woff","74ef40a2107b283b82e5ead7e5705c53"],["/static/media/Graphik-Light.7af2e18e.svg","7af2e18ef063079481b36f0790631324"],["/static/media/Graphik-Light.bb5690d9.ttf","bb5690d988a7813dfda0bf288bfbd409"],["/static/media/Graphik-Light.d5d97ee9.eot","d5d97ee9694e0b041dcb4280539859f8"],["/static/media/Graphik-Medium.077e68d0.svg","077e68d082737ba1a999d9b12bcc75d9"],["/static/media/Graphik-Medium.93340035.ttf","933400354edfd8cb9845d1a399f886c6"],["/static/media/Graphik-Medium.be174f14.eot","be174f145d70625013fce9c4e584247d"],["/static/media/Graphik-Medium.ec0ad826.woff","ec0ad826b68e98059bd04ac60b44c277"],["/static/media/Graphik-Regular.67056760.ttf","67056760fbec8cb336de3b9102a1dd82"],["/static/media/Graphik-Regular.7377f247.eot","7377f24798489a45d91d30041c79163c"],["/static/media/Graphik-Regular.c8db79d7.svg","c8db79d7c9cfaee12195d5b977b576d3"],["/static/media/Graphik-Regular.ea17e8be.woff","ea17e8bef7591b2f7af9115f5704eea2"],["/static/media/Graphik-Semibold.1e606a01.ttf","1e606a01f3bf23b87b88f720e2a2b37e"],["/static/media/Graphik-Semibold.699d8289.eot","699d82890d7ea6f45f60787c1f796250"],["/static/media/Graphik-Semibold.6f24f7dd.svg","6f24f7ddffb112c3d4e8536497db54f5"],["/static/media/Graphik-Semibold.7cd92331.woff","7cd92331393aa73db5593d5ab311ce38"],["/static/media/djoe5cas-webfont.2aaea069.woff2","2aaea069434997a606aa81ad305a3f60"],["/static/media/djoe5cas-webfont.3523f05a.eot","3523f05ab93356c8e336c2be7d8c781b"],["/static/media/djoe5cas-webfont.4299bdab.ttf","4299bdab795ed93f20505ed3ecbb8fa5"],["/static/media/djoe5cas-webfont.79397b90.woff","79397b906839c94be6f41c8f48996b70"],["/static/media/djoe5cas-webfont.bd8a6c1f.svg","bd8a6c1f4e27f24f7968dd42fd59c8ba"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,t,a,r){var n=new URL(e);return r&&n.pathname.match(r)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],r=new URL(t,self.location),n=createCacheKey(r,hashParamName,a,/\.\w{8}\./);return[r.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var r=new Request(a,{credentials:"same-origin"});return fetch(r).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),r="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,r),t=urlsToCacheKeys.has(a));var n="/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(n,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});
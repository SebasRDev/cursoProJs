const version = 'v1'

self.addEventListener('install', event => {
  event.waitUntil(precache())
})

self.addEventListener('fetch', event => {
  const request = event.request;

  //solo queremos trabajar con get
  if(request.method !== "GET"){
    return;
  }

  //buscar en cache
  event.respondWith(cachedResponse(request));

  //actualizar el cache
  event.waitUntil(updateCache(request));
});

async function precache(){
  const cache = await caches.open(version);

   return cache.addAll([
    // '/',
    // '/index.html',
    // '/assets/index.js',
    // '/assets/MediaPlayer.js',
    // '/assets/plugins/AutoPlay.js',
    // '/assets/plugins/AutoPause.ts',
    // '/assets/index.css',
    // '/assets/badbunny_rosalia.mp4',
  ])
}

async function cachedResponse (request){
  const cache = await caches.open(version);
  const response = await cache.match(request);
  return response || fetch(request)
}

async function updateCache (request){
  const cache = await caches.open(version);
  const response = await fetch(request);
  return cache.put(request, response);
}
// Troque o número da versão quando atualizar o index.html, para os aparelhos baixarem a novidade.
const V='microlab-os-v14.5',F=['./','index.html','manifest.webmanifest','icon-192.png','icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(F)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!=V).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
// Só os arquivos do próprio app usam cache. Firebase/Google (login e Firestore) são de outro domínio: passam direto pela rede e nunca são guardados.
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!=='GET'||new URL(r.url).origin!==self.location.origin)return;e.respondWith(caches.match(r).then(x=>x||fetch(r)))});

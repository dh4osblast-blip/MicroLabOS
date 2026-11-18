// Troque o número da versão quando atualizar o index.html, para os aparelhos baixarem a novidade.
const V='microlab-os-v14.6';
// Essenciais: sem eles o app não abre offline. Opcionais: se algum falhar (ex.: ícone ausente), o cache continua valendo.
const CORE=['./','./index.html'],OPC=['./manifest.webmanifest','./icon-192.png','./icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil((async()=>{
  const c=await caches.open(V);
  await c.addAll(CORE);
  await Promise.allSettled(OPC.map(u=>c.add(u)));
  // Primeira instalação ativa na hora. Em atualização, a versão nova espera o aviso do app ("Atualizar") para assumir.
  if(!self.registration.active)self.skipWaiting();
})())});
self.addEventListener('message',e=>{if(e.data&&e.data.type==='SKIP_WAITING')self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
// Só os arquivos do próprio app usam cache. Firebase/Google (login e Firestore) são de outro domínio: passam direto pela rede e nunca são guardados.
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!=='GET'||new URL(r.url).origin!==self.location.origin)return;
  e.respondWith(caches.match(r,{ignoreSearch:r.mode==='navigate'}).then(x=>x||fetch(r).catch(()=>r.mode==='navigate'?caches.match('./index.html'):Response.error())))});

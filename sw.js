/* Necessário para o celular oferecer "Instalar app" (ícone próprio, sem o selo do Chrome).
   Não guarda nada em cache: o app sempre busca a versão mais nova. */
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});

const C="rems44-v9-fid",A=["./","./my.html","./my.css","./my.js","./manifest.webmanifest","./icons/icon-96.png","./icons/icon-192.png","./icons/icon-512.png","./icons/apple-touch-icon.png"];
self.addEventListener("install",e=>{self.skipWaiting();e.waitUntil(caches.open(C).then(c=>c.addAll(A)).catch(()=>{}))});
self.addEventListener("activate",e=>e.waitUntil(Promise.all([caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))),self.clients.claim()])));
self.addEventListener("fetch",e=>{if(e.request.method!=="GET")return;e.respondWith(fetch(e.request).then(r=>{let q=r.clone();caches.open(C).then(c=>c.put(e.request,q)).catch(()=>{});return r}).catch(()=>caches.match(e.request)))});

// Firebase recommends defining a custom notification click handler before importing FCM.
self.addEventListener("notificationclick",e=>{
  e.notification.close();
  const data=e.notification.data||{};
  const fcm=data.FCM_MSG||{};
  const url=data.url||fcm?.fcmOptions?.link||fcm?.data?.url||"./my.html";
  const absolute=new URL(url,self.location.origin).href;
  e.waitUntil(self.clients.matchAll({type:"window",includeUncontrolled:true}).then(async list=>{
    for(const client of list){
      if(!client.url.startsWith(self.location.origin)) continue;
      try{if("navigate" in client) await client.navigate(absolute)}catch{}
      if("focus" in client) return client.focus();
    }
    return self.clients.openWindow?self.clients.openWindow(absolute):null;
  }));
});

importScripts("https://www.gstatic.com/firebasejs/12.17.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/12.17.1/firebase-messaging-compat.js");
firebase.initializeApp({apiKey:"AIzaSyDKpQYuykXwfmkBxNBUhw317Yg72gZNPic",authDomain:"rems-control.firebaseapp.com",projectId:"rems-control",storageBucket:"rems-control.firebasestorage.app",messagingSenderId:"478170069073",appId:"1:478170069073:web:b4f9df1eb34754bdba2070"});
const messaging=firebase.messaging();

messaging.onBackgroundMessage(payload=>{
  // Notification payloads are displayed automatically by FCM in the background.
  // We only create a notification ourselves for data-only messages to avoid duplicates.
  if(payload?.notification?.title||payload?.notification?.body) return;
  const d=payload?.data||{};
  if(!d.title&&!d.body) return;
  self.registration.showNotification(d.title||"REMS-44",{
    body:d.body||"Є зміни у твоєму розкладі.",
    icon:"./icons/icon-192.png",
    badge:"./icons/icon-96.png",
    data:{url:d.url||"./my.html"},
    tag:"rems44-schedule-update"
  });
});

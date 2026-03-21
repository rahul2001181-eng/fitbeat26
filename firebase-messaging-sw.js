importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyAnZAvmfOmYztCWt0rYogZD0p2MwV4p7is",
  authDomain: "fitbeat26-f25c3.firebaseapp.com",
  projectId: "fitbeat26-f25c3",
  storageBucket: "fitbeat26-f25c3.firebasestorage.app",
  messagingSenderId: "321477284302",
  appId: "1:321477284302:web:a76d84029ac213ea589b9f"
});

const messaging = firebase.messaging();

// Handle background notifications
messaging.onBackgroundMessage((payload) => {
  const { title, body } = payload.notification || {};
  self.registration.showNotification(title || 'Fitbeat', {
    body: body || 'You have a new message',
    icon: 'https://www.fitbeat26.com/logo.png',
    badge: 'https://www.fitbeat26.com/logo.png',
  });
});

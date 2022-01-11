import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
import { getMessaging } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-messaging.js";
import { onBackgroundMessage } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-messaging-sw.js";


const firebaseConfig = {
    apiKey: "AIzaSyDRVMFWfoV5vgEI82Qy0jbIOT-q9ZyTWTQ",
    authDomain: "csp-fcm.firebaseapp.com",
    projectId: "csp-fcm",
    storageBucket: "csp-fcm.appspot.com",
    messagingSenderId: "1063903322339",
    appId: "1:1063903322339:web:72f81dfb12fbb4c991a5d6"
};
const firebaseApp = initializeApp(firebaseConfig);

const messaging = getMessaging(firebaseApp);

onBackgroundMessage(messaging, (payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = 'Background Message Title';
    const notificationOptions = {
        body: 'Background Message body.',
        icon: '/firebase-logo.png'
    };

    self.registration.showNotification(notificationTitle,
        notificationOptions);
});


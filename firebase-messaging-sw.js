importScripts('https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/9.6.2/firebase-messaging-sw.js')

var firebaseConfig = {
    apiKey: "AIzaSyDRVMFWfoV5vgEI82Qy0jbIOT-q9ZyTWTQ",
    authDomain: "csp-fcm.firebaseapp.com",
    projectId: "csp-fcm",
    storageBucket: "csp-fcm.appspot.com",
    messagingSenderId: "1063903322339",
    appId: "1:1063903322339:web:72f81dfb12fbb4c991a5d6"
};

var app = firebase.initializeApp(firebaseConfig);

var messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    const notification = JSON.parse(payload.data.notification);
    // Customize notification here
    //const notificationTitle = notification.title;
    const notificationTitle = "testing backbround";
    // const notificationOptions = {
    //     body: notification.body,
    //     icon: notification.icon
    // };

    const notificationOptions = {
        body: "testing bg body",
        icon: ""
    }

    return self.registration.showNotification(notificationTitle,
        notificationOptions);
});
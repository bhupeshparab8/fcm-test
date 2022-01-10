import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
import { getMessaging } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-messaging.js";
import { onBackgroundMessage } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-messaging.js";

var firebaseConfig = {
    apiKey: "AIzaSyDRVMFWfoV5vgEI82Qy0jbIOT-q9ZyTWTQ",
    authDomain: "csp-fcm.firebaseapp.com",
    projectId: "csp-fcm",
    storageBucket: "csp-fcm.appspot.com",
    messagingSenderId: "1063903322339",
    appId: "1:1063903322339:web:72f81dfb12fbb4c991a5d6"
};

const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);

//messaging.usePublicVapidKey("BG9ff0wgZhb8StMVABPrsW55rzYQoY1xZYfpkO5VvWS3EnKlYwcjnJAVbaVHQReWrVPi2zFOLGf242ad8sq9MBk");

onBackgroundMessage(messaging, function (payload) {
    console.log(payload);
    //const notificationTitle = payload.data.title;
    const notificationTitle = "title background test";
    // const notificationOptions = {
    //     body: payload.data.message,
    //     icon: '',
    //     data: { url: payload.data.onClick }, //the url which we gonna use later
    // };
    const notificationOptions = {
        body: "desc background test",
        icon: '',
        data: { url: "https://google.c" }, //the url which we gonna use later
    };
    self.registration.showNotification(notificationTitle, notificationOptions);
});
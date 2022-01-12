import { getMessaging, getToken } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-messaging.js";

var messaging = getMessaging();

export function Init() {
    navigator
        .serviceWorker
        .register('./firebase-messaging-sw.js')
        .then((registration) => {
            messaging.useServiceWorker(registration);

            getToken(messaging, { "vapidKey": "BG9ff0wgZhb8StMVABPrsW55rzYQoY1xZYfpkO5VvWS3EnKlYwcjnJAVbaVHQReWrVPi2zFOLGf242ad8sq9MBk" })
                .then(function (token) {
                    // print the token on the HTML page
                    //tokenElement.innerHTML = "Token is " + token;
                    console.log("Token is " + token);
                })
                .catch(function (err) {
                    //errorElement.innerHTML = "Error: " + err;
                    console.error("Error: " + err);
                    console.log("Didn't get notification permission", err);
                });
        })
}
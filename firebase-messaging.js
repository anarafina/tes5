import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyAjlKL99nMVlgy3XmRS67lqj_ocTvi5-bg",
  authDomain: "appshell-2b795.firebaseapp.com",
  projectId: "appshell-2b795",
  storageBucket: "appshell-2b795.appspot.com",
  messagingSenderId: "121328260879",
  appId: "1:121328260879:web:13bca9dbb4da3041f9507a",
  measurementId: "G-YLKR4G3JPC"
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

// Remove the requestPermission function

getToken(messaging, { vapidKey: 'BDw95X34dEgMuXQEIHxvIcrbLBUCROUuwdggLCXpm-xWvBxoJLWwX4Fqh_GYj5nfNVJWT2pwryGmLPcJKHIeaSA' })
  .then((currentToken) => {
    if (currentToken) {
      console.log('currentToken: ', currentToken);
    } else {
      console.log('cannot get token');
    }
  });

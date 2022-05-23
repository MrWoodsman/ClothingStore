import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, connectAuthEmulator } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js";

const firebaseConfig = {
apiKey: "AIzaSyDVYyPjdGQWCGRxfdj1yv9p8E5bX6i0cjo",
authDomain: "clothingstore-f186f.firebaseapp.com",
projectId: "clothingstore-f186f",
storageBucket: "clothingstore-f186f.appspot.com",
messagingSenderId: "555893067796",
appId: "1:555893067796:web:f66e8b1ef383bed8a71701",
measurementId: "G-Z5H2MZ098E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
connectAuthEmulator(auth, "http://127.0.0.1:5500");

const email = '1'
const password = '1'

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdbDI7T14yTRAzmVTscTi7mdL37sL3N7Q",
  authDomain: "intern-a3593.firebaseapp.com",
  projectId: "intern-a3593",
  storageBucket: "intern-a3593.appspot.com",
  messagingSenderId: "771027364283",
  appId: "1:771027364283:web:87e17666a0ff5cd3bdfc9e",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);

export default fireDB;

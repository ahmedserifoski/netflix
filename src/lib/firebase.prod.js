import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// here we imported the seedDatabase from ../seed

const config = {
    apiKey: "AIzaSyBRQMScmZ8YAoiWfYtzvywxNv1LYdG1wPE",
    authDomain: "netflix-179a1.firebaseapp.com",
    projectId: "netflix-179a1",
    storageBucket: "netflix-179a1.appspot.com",
    messagingSenderId: "652240506395",
    appId: "1:652240506395:web:0c0a6419e62f859b0332be",
};

const firebase = Firebase.initializeApp(config);

//here we seeded the data base -- > s e e d D a t a b a s e ( f i r e b a s e )

export { firebase };

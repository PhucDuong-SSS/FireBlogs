import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyCJqGJnFT1REElUEbU0iSlrlSX9QIn0NP0",
    authDomain: "fireblogsyt-fc175.firebaseapp.com",
    projectId: "fireblogsyt-fc175",
    storageBucket: "fireblogsyt-fc175.appspot.com",
    messagingSenderId: "10293808510",
    appId: "1:10293808510:web:aa491f009b7d801a4ef72f"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {timestamp};
export default firebaseApp.firestore();

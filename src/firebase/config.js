import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCL2nbLAnckkb1VN-pLF506UxBxRaIef7g",
  authDomain: "photo-gallery-44346.firebaseapp.com",
  databaseURL: "https://photo-gallery-44346.firebaseio.com",
  projectId: "photo-gallery-44346",
  storageBucket: "photo-gallery-44346.appspot.com",
  messagingSenderId: "630206549349",
  appId: "1:630206549349:web:7c2001d8322988a255e58c",
  measurementId: "G-M8WM1H0HE1",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };

import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAnC8uJG0Exh8MV34hiJhoLn1tUS9xC24Q",
  authDomain: "diaryofsam-ab961.firebaseapp.com",
  projectId: "diaryofsam-ab961",
  storageBucket: "diaryofsam-ab961.appspot.com",
  messagingSenderId: "687823357552",
  appId: "1:687823357552:web:fa32cd5cba2864213196b5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();

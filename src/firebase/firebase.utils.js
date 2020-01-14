import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA2jleEOvz0FOr_pPOh8Cp0VZmpN-9dUf0",
  authDomain: "ecomclothing-db.firebaseapp.com",
  databaseURL: "https://ecomclothing-db.firebaseio.com",
  projectId: "ecomclothing-db",
  storageBucket: "ecomclothing-db.appspot.com",
  messagingSenderId: "62199830982",
  appId: "1:62199830982:web:2eb3aaccf34492b1603ac7",
  measurementId: "G-NXMEY9TQPT"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

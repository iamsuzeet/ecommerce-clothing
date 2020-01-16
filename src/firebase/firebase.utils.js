import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

//get this from firebase
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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  // if null
  if (!userAuth) return;

  const userRef = await firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

//initialization start here
firebase.initializeApp(config);

//for auth and firestore access
export const auth = firebase.auth();
export const firestore = firebase.firestore();

//for popup login
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

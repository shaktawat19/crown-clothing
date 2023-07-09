import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyAirSm0qbvhs_CP-m3Tv7ZxNky-lZZ0RJM",
  authDomain: "crown-db-c4ad9.firebaseapp.com",
  projectId: "crown-db-c4ad9",
  storageBucket: "crown-db-c4ad9.appspot.com",
  messagingSenderId: "588441181477",
  appId: "1:588441181477:web:b3f9253413a542670acecc",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }
  
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) { // creates data in firestore
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log('error creating user', err);
    }
  }

  return  userRef; 
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

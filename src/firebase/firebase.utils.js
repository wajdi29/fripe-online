import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyD5uu_rWSQScwHaYT2VuVSKevhs77-cDcQ",
    authDomain: "fripe-online.firebaseapp.com",
    databaseURL: "https://fripe-online.firebaseio.com",
    projectId: "fripe-online",
    storageBucket: "fripe-online.appspot.com",
    messagingSenderId: "968711158252",
    appId: "1:968711158252:web:8751c93e77df709d3768c9",
    measurementId: "G-WRZXFQL9XM"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const SignInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
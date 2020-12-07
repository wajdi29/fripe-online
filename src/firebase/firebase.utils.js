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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }
  return userRef
}

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) =>{
 const  collectionRef = firestore.collection(collectionKey)


  const batch = firestore.batch();
objectsToAdd.forEach(obj => {
  const newDocRef = collectionRef.doc()
  batch.set(newDocRef, obj)
})

return await batch.commit()

}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
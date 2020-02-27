import * as firebase from 'firebase';

export const fbConfig = {
  apiKey: "AIzaSyDM8SiNPZeG6rkuljPk0P_N7vYSkyJMBz4",
  authDomain: "macmoonnetwork.firebaseapp.com",
  databaseURL: "https://macmoonnetwork.firebaseio.com",
  projectId: "macmoonnetwork",
  storageBucket: "macmoonnetwork.appspot.com",
  messagingSenderId: "604587974747",
  appId: "1:604587974747:web:87d823b8511282dbfcdf7e"
}


// Initialize Firebase
firebase.initializeApp(fbConfig)
firebase.firestore();

export const auth = firebase.auth();
export const db = firebase.firestore();
export const dbRef = db.collection('posts');
export const googleProvider = new firebase.auth.GoogleAuthProvider();

export default firebase

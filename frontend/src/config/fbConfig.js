import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// const config = require('../firestore_import/serviceKey.json')

// const API_KEY = process.env.FIREBASE_API_KEY
const API_KEY = "AIzaSyCDN7bytJyieK3f9j94b3soy9aPI16ZLyE"

// Initialize Firebase
const config = {
  apiKey: API_KEY,
  authDomain: "lensyclopedia-786de.firebaseapp.com",
  databaseURL: "https://lensyclopedia-786de.firebaseio.com",
  projectId: "lensyclopedia-786de",
  storageBucket: "lensyclopedia-786de.appspot.com",
  messagingSenderId: "689722740713"
};
firebase.initializeApp(config)

//update on firestore 
firebase.firestore().settings({ timestampsInSnapshots: true})

export default firebase 
import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAHZ_InaxkbB9TagUjhbPjJvJC8vb2Hn0U",
    authDomain: "jumia-clone-9a8a8.firebaseapp.com",
    projectId: "jumia-clone-9a8a8",
    storageBucket: "jumia-clone-9a8a8.appspot.com",
    messagingSenderId: "404897650519",
    appId: "1:404897650519:web:56cb4346ff14c05ff4d012",
    measurementId: "G-HCFQZS65QN"
})


const auth = firebase.auth()

export {auth};
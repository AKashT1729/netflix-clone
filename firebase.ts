// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtduz9lpO9sXVEgPbR4uv448N71Pf9lxg",
  authDomain: "netfilx-clone-85e0c.firebaseapp.com",
  projectId: "netfilx-clone-85e0c",
  storageBucket: "netfilx-clone-85e0c.appspot.com",
  messagingSenderId: "844988872433",
  appId: "1:844988872433:web:46390987f2737ab9669b50"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp;
const db = getFirestore()
const auth = getAuth()

export default app
export {auth,db}


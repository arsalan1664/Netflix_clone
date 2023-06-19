import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCrHwoI5gS-QYyMP_nfXW4c_HfJSPmwN3o",
  authDomain: "my-netflex-clone-2c496.firebaseapp.com",
  projectId: "my-netflex-clone-2c496",
  storageBucket: "my-netflex-clone-2c496.appspot.com",
  messagingSenderId: "491025195201",
  appId: "1:491025195201:web:15d5331712f9397beff440"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore()
const auth = firebase.auth();

export {auth} ;
export default db ;


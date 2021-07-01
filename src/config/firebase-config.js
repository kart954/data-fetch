import firebase from 'firebase';
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBPqAebQzVeT5Kbd57TsDwoF_l3pRCVomY",
    authDomain: "login-project-d33bf.firebaseapp.com",
    projectId: "login-project-d33bf",
    storageBucket: "login-project-d33bf.appspot.com",
    messagingSenderId: "94113277992",
    appId: "1:94113277992:web:36e66383599251ed192d1d",
    measurementId: "G-09T2Z4H428"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
export default firebase;
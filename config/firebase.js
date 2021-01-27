
import * as firebase from "firebase"
import "firebase/storage"
import "firebase/auth"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAiaDZHFyDWBc15TQMVGL-Ih0nnlxQG8PE",
    authDomain: "covid-19-app-b466c.firebaseapp.com",
    projectId: "covid-19-app-b466c",
    storageBucket: "covid-19-app-b466c.appspot.com",
    messagingSenderId: "993217026170",
    appId: "1:993217026170:web:1190456073faf997d883c3",
    measurementId: "G-NLC1ZRBXEM"
  };
  
  let app;

   if(firebase.apps.length === 0) {

 app = firebase.initializeApp(firebaseConfig)
   } else {
       app = firebase.app()
   }

   const db = app.firestore();
   const auth = firebase.auth();

   export {db, auth}

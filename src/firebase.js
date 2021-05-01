import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/database';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyDuGZ1hKrl9DBJhwtt1_RVjALy0RLyzO8w",
    authDomain: "m-city-1e8d7.firebaseapp.com",
    databaseURL: "https://m-city-1e8d7-default-rtdb.firebaseio.com",
    projectId: "m-city-1e8d7",
    storageBucket: "m-city-1e8d7.appspot.com",
    messagingSenderId: "835478047787",
    appId: "1:835478047787:web:7e091594cabb1e67d46e6e",
    measurementId: "G-04KHVKQM1R"
  };

  firebase.initializeApp(firebaseConfig);


  const firebaseDB =firebase.database()

 const firebaseMatches= firebaseDB.ref('matches')
 const firebasePromotions=firebaseDB.ref('promotions')

  export {

    firebase,
      firebaseDB,
      firebaseMatches,
      firebasePromotions
  }
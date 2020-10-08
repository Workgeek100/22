import firebase from 'firebase';
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyAEhK0iyqY3Pd2tBvQDU3gNehsXS3RUuug",
    authDomain: "attendance-app-aa544.firebaseapp.com",
    databaseURL: "https://attendance-app-aa544.firebaseio.com",
    projectId: "attendance-app-aa544",
    storageBucket: "attendance-app-aa544.appspot.com",
    messagingSenderId: "673342764075",
    appId: "1:673342764075:web:236e01adfcb5c5ebbde66e"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
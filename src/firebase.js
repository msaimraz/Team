// import firebase from 'firebase/compat/app';
import firebase from 'firebase';



const firebaseConfig = {
    apiKey: "AIzaSyDIFsUJOBqcevuCMG4EZD97IIlDFvl6KRY",
    authDomain: "teamreporterapp-4b6d6.firebaseapp.com",
    databaseURL: "https://teamreporterapp-4b6d6-default-rtdb.firebaseio.com",
    projectId: "teamreporterapp-4b6d6",
    storageBucket: "teamreporterapp-4b6d6.appspot.com",
    messagingSenderId: "399511992394",
    appId: "1:399511992394:web:5ef1c61c581a2541408eb3",
    measurementId: "G-XKPT0DV4H5"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// export const fire = firebase.initializeApp(firebaseConfig)
// console.log(fire)
// export const auth = firebase.auth()
// console.log(auth)
export default firebase;
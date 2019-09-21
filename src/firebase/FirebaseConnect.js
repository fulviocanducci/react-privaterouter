import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDdF_6S8NpqQbL1rVyWERKM0NuSJD2UfiM" /*,
  authDomain: "local-react-ec8e4.firebaseapp.com"*/,
  databaseURL: "https://local-react-ec8e4.firebaseio.com",
  projectId: "local-react-ec8e4",
  storageBucket: "local-react-ec8e4.appspot.com",
  messagingSenderId: "787758506510",
  appId: "1:787758506510:web:864faeb77422d397ea525f"
};


const firebaseInitialize = firebase.initializeApp(firebaseConfig);
const firebaseDatabase = firebase.database();
const firebaseDatabaseRef = firebase.database().ref();

export {
    firebaseConfig,
    firebaseDatabase,
    firebaseInitialize,
    firebaseDatabaseRef
}
  
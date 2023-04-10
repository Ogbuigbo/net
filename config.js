import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAUGGzGCl8dBscphlyvv_YGLQl-bBmJAfU",
    authDomain: "netflix-cloner-e46d9.firebaseapp.com",
    projectId: "netflix-cloner-e46d9",
    storageBucket: "netflix-cloner-e46d9.appspot.com",
    messagingSenderId: "1023377064739",
    appId: "1:1023377064739:web:a69baa0760545c4839c296",
    measurementId: "G-M6RF9ZV2WV"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore()
  const auth = firebase.auth();

export { auth };
export default db;
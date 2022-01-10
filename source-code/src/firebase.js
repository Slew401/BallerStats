import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getStorage, ref, list } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyDcVlu3J1lDdZK638q5-P2rIfTv99aW0FA",
    authDomain: "ballerstats-7eb38.firebaseapp.com",
    projectId: "ballerstats-7eb38",
    storageBucket: "ballerstats-7eb38.appspot.com",
    messagingSenderId: "28652437254",
    appId: "1:28652437254:web:7d8c23b5b2d9a76c40a887"
  };

  const app = firebase.initializeApp(firebaseConfig);
  const auth = app.auth();
  const db = app.firestore();
  const storage = getStorage(app); 
  const storageRef = ref(storage, "images/"); 
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const signInWithGoogle = async () => {
    try {
      const res = await auth.signInWithPopup(googleProvider);
      const user = res.user;
      const query = await db
        .collection("users")
        .where("uid", "==", user.uid)
        .get();
      if (query.docs.length === 0) {
        await db.collection("users").add({
          uid: user.uid,
          name: user.displayName,
          authProvider: "google",
          email: user.email,
        });
      }
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };
  const signInWithEmailAndPassword = async (email, password) => {
    try {
      await auth.signInWithEmailAndPassword(email, password)
      .setPersistence(auth, firebase.browserSessionPersistence);
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  const registerWithEmailAndPassword = async (name, email, password) => {
    try {
      const res = await auth.createUserWithEmailAndPassword(email, password);
      const user = res.user;
      await db.collection("users").add({
        uid: user.uid,
        name,
        authProvider: "local",
        email,
      });
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };
  
  const sendPasswordResetEmail = async (email) => {
    try {
      await auth.sendPasswordResetEmail(email);
      alert("Password reset link sent!");
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };
  const logout = () => {
    auth.signOut();
  };

  export {
    auth,
    db,
    app,
    storage,
    storageRef,
    signInWithGoogle,
    signInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordResetEmail,
    logout,
  };
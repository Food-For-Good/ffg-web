import app from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBA74ti44yUujSLuzI9snLkSvaeB1l5hC4",
  authDomain: "learning-firebase-7a60d.firebaseapp.com",
  databaseURL: "https://learning-firebase-7a60d.firebaseio.com",
  projectId: "learning-firebase-7a60d",
  storageBucket: "learning-firebase-7a60d.appspot.com",
  messagingSenderId: "242285256483",
};
class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
  }
  //   signup auth
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  // login auth
  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  // log out
  doSignOut = () => this.auth.signOut();

  doPasswordReset = (email) => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = (password) =>
    this.auth.currentUser.updatePassword(password);
}

export default Firebase;

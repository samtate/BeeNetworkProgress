import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: "AIzaSyBS3XRcZ68-Q4w1jCsb-9H2Kxd-JUn4T-E",
  authDomain: "beenetworktracker.firebaseapp.com",
  databaseURL: "https://beenetworktracker.firebaseio.com",
  projectId: "beenetworktracker",
  storageBucket: "beenetworktracker.appspot.com",
  messagingSenderId: "341216514122",
  appId: "1:341216514122:web:6644dcf294cb08dc8396b3"
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
    this.db = app.database();
  }

  doSignIn = (email, password) => {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  doSignOut = () => this.auth.signOut();

  borough = id => this.db.ref(`${id}`);
  scheme = (borough,scheme) => this.db.ref(`${borough}/schemes/${scheme}`);
}
export default Firebase;

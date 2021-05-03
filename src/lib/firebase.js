import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyDd2qg5aRHvFaPD281t76NYBD9Yy0Ir6aw',
  authDomain: 'instagram-c688a.firebaseapp.com',
  projectId: 'instagram-c688a',
  storageBucket: 'instagram-c688a.appspot.com',
  messagingSenderId: '322153232834',
  appId: '1:322153232834:web:87b38247b3e89014eafe5b'
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// seedDatabase(firebase);

export { firebase, FieldValue };

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDL7PIKR7tbkM7CwcFDDRbOcfsRAQrHhcI',
  authDomain: 'ots-2021.firebaseapp.com',
  projectId: 'ots-2021',
  storageBucket: 'ots-2021.appspot.com',
  messagingSenderId: '310174157847',
  appId: '1:310174157847:web:6bccab70c16a8f5971a052',
  measurementId: 'G-9FZGZVFCWY'
};

firebase.initializeApp(firebaseConfig);

export default firebase;

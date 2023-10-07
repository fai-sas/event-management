// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBxvolPJ-A7RlnOi1CaaSZbfHgIAkv7Gh4',
  authDomain: 'ms09-event-management.firebaseapp.com',
  projectId: 'ms09-event-management',
  storageBucket: 'ms09-event-management.appspot.com',
  messagingSenderId: '982723715913',
  appId: '1:982723715913:web:c2b987c360f9eb30e2f098',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

export default auth

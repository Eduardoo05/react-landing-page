// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId:"landing-page-react-kodigo",
  storageBucket:"landing-page-react-kodigo.appspot.com",
  messagingSenderId:"403572880486",
  appId:"1:403572880486:web : 1f520b301057d7c7d129a7"
}


// Initialize Firebase
export const app = initializeApp(firebaseConfig);

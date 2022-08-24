// Import the functions you need from the SDKs you need
import { getStorage } from 'firebase/storage';
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpRCx51GbjWh6mbRZjQL8IvVPDlpq7BeU",
  authDomain: "car-meetup-afb57.firebaseapp.com",
  databaseURL: "https://car-meetup-afb57-default-rtdb.firebaseio.com",
  projectId: "car-meetup-afb57",
  storageBucket: "car-meetup-afb57.appspot.com",
  messagingSenderId: "118598465124",
  appId: "1:118598465124:web:851ee98277bac409d49171"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage =getStorage(app)
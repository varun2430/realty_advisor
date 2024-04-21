// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
// todo: add apiKey in env
  apiKey: "AIzaSyBWlp2MOMr7MqbMtoDwuCdhZcr1oGEmwms",
  authDomain: "realty-advisor-3053b.firebaseapp.com",
  projectId: "realty-advisor-3053b",
  storageBucket: "realty-advisor-3053b.appspot.com",
  messagingSenderId: "294133521078",
  appId: "1:294133521078:web:27edd492a3f7821b44a417"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
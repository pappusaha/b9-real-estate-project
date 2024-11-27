// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9dzanUpEJ6vWzg3ZutgAyvgdYHoaUMkQ",
  authDomain: "a9-real-estate-project.firebaseapp.com",
  projectId: "a9-real-estate-project",
  storageBucket: "a9-real-estate-project.firebasestorage.app",
  messagingSenderId: "698189479360",
  appId: "1:698189479360:web:6a1926f6c4ebd7333d5c25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
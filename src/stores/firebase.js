import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBK72eruBcxkEQjq7SLfPKbqcilFKDBekA",
  authDomain: "retaileazy-project.firebaseapp.com",
  projectId: "retaileazy-project",
  storageBucket: "retaileazy-project.appspot.com",
  messagingSenderId: "505273718033",
  appId: "1:505273718033:web:2fe6afda8caee3d2d2a8b0",
  measurementId: "G-2LCRKY2HLK"
};

initializeApp(firebaseConfig);

const db = getFirestore()

export { db }
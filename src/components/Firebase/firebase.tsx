import { initializeApp } from "firebase/app";
import {getDatabase} from 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyBL2XHfyHPxB94Q06BQgcxbfOYYZP7Vx94",
  authDomain: "chat-app-react-7c4e8.firebaseapp.com",
  projectId: "chat-app-react-7c4e8",
  storageBucket: "chat-app-react-7c4e8.appspot.com",
  messagingSenderId: "21375424985",
  appId: "1:21375424985:web:837b5143651ec1897fa1c8",
  databaseURL: 'https://chat-app-react-7c4e8-default-rtdb.europe-west1.firebasedatabase.app'
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
export default db;

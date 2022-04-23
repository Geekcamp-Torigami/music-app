// 必要な関数を import
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

  apiKey: "AIzaSyCZDnT6VUc70QQkw6TYn_Rsa6OEHQRR6B4",
  authDomain: "music-app-dc35f.firebaseapp.com",
  projectId: "music-app-dc35f",
  storageBucket: "music-app-dc35f.appspot.com",
  messagingSenderId: "172320499978",
  appId: "1:172320499978:web:d8615d7d5eaded78c332f3",
  measurementId: "G-4PMG7D9B1Z",
}

// Firebaseアプリオブジェクトを初期化
const app = initializeApp(firebaseConfig)
// Firestoreを読み込み、db(databaseの略)として export
export const db = getFirestore(app)

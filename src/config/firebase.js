// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyC18Z70L-foEfTBVuC46wJtv34_5dbC4",
  authDomain: "tough-shard-389116.firebaseapp.com",
  projectId: "tough-shard-389116",
  storageBucket: "tough-shard-389116.appspot.com",
  messagingSenderId: "1007368711228",
  appId: "1:1007368711228:web:5bd8de7e449461451ea739",
  measurementId: "G-7KQ9EDNK2V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

export async function getProducts() {
  const response = await getDocs(collection(db, "products"));
  const products = [];
  response.forEach((doc) => {
    products.push({id: doc.id, ...doc.data()});
  });
  return products;
}

export async function getProductById(id) {
  const products = await getProducts();
  console.log(products);
  const response = products.find(product => product.id === id);
  console.log(response);
}
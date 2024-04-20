import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcimx4_xsTi06JlzlE6M7DMIBgrggyav8",
  authDomain: "portfolio-koffi-karl.firebaseapp.com",
  projectId: "portfolio-koffi-karl",
  storageBucket: "portfolio-koffi-karl.appspot.com",
  messagingSenderId: "975070222430",
  appId: "1:975070222430:web:4a160f5e60d42cb3597ccf"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of cities from your database
async function getCities(db) {
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}
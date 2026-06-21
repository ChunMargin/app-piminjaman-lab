import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCH5G0EtyVZDcpMGrAm3Mns---Y8P4j0AY", // Dari current_key
  authDomain: "hybrid-store-mobile.firebaseapp.com", // Dari project_id + .firebaseapp.com
  projectId: "hybrid-store-mobile", // Dari project_id
  storageBucket: "hybrid-store-mobile.firebasestorage.app", // Dari storage_bucket
  messagingSenderId: "848032731242", // Dari project_number
  appId: "1:848032731242:android:e55ed08408a6068c0fba13" // Dari mobilesdk_app_id
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);

// Export module auth dan firestore
export const auth = getAuth(app);
export const db = getFirestore(app);
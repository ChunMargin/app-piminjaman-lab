import { doc, updateDoc } from 'firebase/firestore';
import { db } from './firebase';

// PASTE Document ID yang kamu copy dari Firebase di dalam tanda kutip ini:
export const PRODUCT_DOC_ID = 'LP8evPugCjdfACQOnNYR'; 

export const checkoutProduct = async (currentStock: int64, quantityToBuy: int64) => {
  if (currentStock < quantityToBuy) {
    throw new Error('Stok habis bro!');
  }
  
  // Mengarahkan (mapping) perintah ke dokumen spesifik di koleksi 'inventory'
  const productRef = doc(db, 'inventory', PRODUCT_DOC_ID);
  
  // Mengeksekusi pengurangan stok ke database
  await updateDoc(productRef, {
    stock: currentStock - quantityToBuy
  });
};
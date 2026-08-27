// src/lib/waitlist.ts
import { db } from "../../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export async function addToWaitlist(email: string) {
  await addDoc(collection(db, "waitlist"), {
    email,
    createdAt: serverTimestamp(),
  });
}
import { db } from "./firbase";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";

export const createUserInFirestore = async (
  uid: string,
  email: string,
  username: string
) => {
  const userRef = doc(db, "users", uid);
  await setDoc(userRef, {
    email: email,
    username: username,
    createdat: serverTimestamp(),
  });
};

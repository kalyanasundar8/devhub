import { auth } from "./firbase";
import {
  signInWithPopup,
  GithubAuthProvider,
  GoogleAuthProvider,
} from "firebase/auth";
import { createUserInFirestore } from "./firbaseAuthService";

export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  const user = result.user;

  await createUserInFirestore(user.uid, user.email ?? '', user.displayName ?? '');
};

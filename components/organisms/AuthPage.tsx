"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firbase";
import { signInWithGoogle } from "@/lib/firbaseAuth";
import { useAuthState } from "react-firebase-hooks/auth";

export default function AuthPage() {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle();
    } catch (error: any) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user && !loading) {
      router.push("/");
    }
  }, [user, loading, router]);

  return (
    <div>
      <button onClick={handleGoogleLogin}>Google</button>
    </div>
  );
}

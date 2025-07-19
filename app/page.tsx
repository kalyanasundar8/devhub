"use client";
import { auth } from "@/lib/firbase";
import Image from "next/image";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Home() {
  const [user, loading] = useAuthState(auth);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="">
      {user ? (
        <div>
          <h1>Welcome, {user.displayName}</h1>
          <img src={user.photoURL || ""} alt="#" width={50} height={50}/>
        </div>
      ) : (
        <h1>Please signin</h1>
      )}
    </div>
  );
}

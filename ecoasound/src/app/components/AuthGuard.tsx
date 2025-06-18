"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { auth } from "../lib/firebase"; 

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) router.push("/login");
    });
    return () => unsubscribe();
  }, []);

  return <>{children}</>;
}
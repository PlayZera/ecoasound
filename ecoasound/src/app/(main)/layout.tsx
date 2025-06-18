"use client";
import { useRouter } from "next/navigation";
import { auth } from "../lib/firebase";
import { useEffect } from "react";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) router.push("/login");
    });
    return unsubscribe;
  }, []);

  return <>{children}</>;
}
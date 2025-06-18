"use client";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../lib/firebase";

import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/");
    } catch (err) {
      setError("E-mail ou senha inválidos.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6 text-center text-purple-600">Login</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleLogin} className="space-y-4">
        <input
          type="email"
          placeholder="E-mail"
          className="w-full p-2 border border-gray-200 rounded bg-white"
        />
        <input
          type="password"
          placeholder="Senha"
          className="w-full p-2 border border-gray-200 rounded bg-white"
        />
        <button
          type="submit"
          className="w-full bg-purple-600 text-white p-2 rounded hover:bg-purple-700 transition"
        >
          Entrar
        </button>
      </form>
      <p className="mt-4 text-center">
        Não tem uma conta?{" "}
        <Link href="/signup" className="text-purple-600 hover:underline">
          Cadastre-se
        </Link>
      </p>
    </div>
  );
}
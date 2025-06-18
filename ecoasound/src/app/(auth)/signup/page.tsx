"use client";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../lib/firebase";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push("/");
    } catch (err) {
      setError("Erro ao cadastrar. Tente outro e-mail ou senha mais forte.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-blue-100 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Cadastre-se</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSignup} className="space-y-4">
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border border-blue-600 rounded bg-white"
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border border-blue-300 rounded bg-white"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-blue p-2 rounded hover:bg-blue-700 transition"
        >
          Criar conta
        </button>
      </form>
      <p className="mt-4 text-center text-blue-400">
        Já tem uma conta?{" "}
        <Link href="/login" className="text-blue-600 hover:underline">
          Faça login
        </Link>
      </p>
    </div>
  );
}
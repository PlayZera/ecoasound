"use client";
import Link from 'next/link';
import { useAuth } from '../lib/auth';

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <header className="py-3 px-4 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo à esquerda */}
        <Link href="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition">
          <span>🌊</span>EcoaSound
        </Link>

        {/* Links centrais (opcional) */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/reviews" className="text-gray-700 hover:text-blue-600 transition">
            Reviews
          </Link>
          <Link href="/charts" className="text-gray-700 hover:text-blue-600 transition">
            Rankings
          </Link>
          <Link href="/genres" className="text-gray-700 hover:text-blue-600 transition">
            Gêneros
          </Link>
        </nav>

        {/* Área do usuário à direita */}
        <div className="flex items-center space-x-4">
          {user ? (
            <>
              <Link href="/reviews/create" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition text-sm">
                + Nova Review
              </Link>
              <div className="relative group">
                <button className="flex items-center space-x-1">
                  <span className="text-gray-700">{user.displayName || "Usuário"}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 hidden group-hover:block">
                  <Link href={`/profile/${user.email}`} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Perfil</Link>
                  <button onClick={logout} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">Sair</button>
                </div>
              </div>
            </>
          ) : (
            <>
              <Link href="/login" className="text-gray-700 hover:text-blue-600 transition text-sm">
                Entrar
              </Link>
              <Link href="/signup" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition text-sm">
                Cadastre-se
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '../app/components/Navbar';
import AuthGuard from "./components/AuthGuard";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'EcoaSound',
  description: 'Compartilhe e descubra avaliações de músicas',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthGuard>
      <html lang="pt-BR">
        <body className={`${inter.className} bg-gray-50 dark:bg-gray-900`}>
          <Navbar />
          <main className="container mx-auto p-4">{children}</main>
        </body>
      </html>
    </AuthGuard>
  );
}
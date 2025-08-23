// src/components/Layout.tsx

import React from 'react';
import Link from 'next/link';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white font-sans">
      <header className="bg-gray-800/80 backdrop-blur-sm shadow-md sticky top-0 z-50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-white hover:text-blue-400 transition-colors">
              EventWeb
            </Link>
            <div className="flex items-center space-x-6">
              <Link href="/" className="text-lg text-gray-300 hover:text-blue-400 transition-colors">
                Home
              </Link>
              <Link href="/tickets" className="text-lg text-gray-300 hover:text-blue-400 transition-colors">
                Tiket
              </Link>
              {/* --- TAMBAHKAN LINK INI --- */}
              <Link href="/sponsorship" className="text-lg text-gray-300 hover:text-blue-400 transition-colors">
                Sponsor
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <main className="flex-grow container mx-auto px-6 py-12">
        {children}
      </main>

      <footer className="bg-gray-800 mt-auto">
        <div className="container mx-auto px-6 py-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} EventWeb. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

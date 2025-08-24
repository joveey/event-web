// src/components/Layout.tsx
'use client'; 

import React from 'react';
import Link from 'next/link';
import AuroraBackground from './AuroraBackground';
import SpotlightEffect from './SpotlightEffect';
import { motion } from 'framer-motion';
// Impor ikon LinkedIn
import { FiLinkedin } from 'react-icons/fi';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-black text-white font-sans">
      <AuroraBackground />
      <SpotlightEffect />
      
      {/* Header Baru */}
      <header className="sticky top-0 z-50 bg-black/50 backdrop-blur-lg border-b border-white/10">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Bagian Kiri: Logo & Tagline */}
            <div className="flex items-center gap-4">
              <Link href="/" className="font-display text-2xl font-semibold text-white">
                Event<span className="text-purple-400">Web</span> CONF
              </Link>
              <div className="hidden md:block border-l border-gray-600 h-8 mx-4"></div>
              <p className="hidden lg:block text-sm text-gray-400">FORTIFYING THE FUTURE OF TECHNOLOGY</p>
            </div>

            {/* Bagian Kanan: Ikon & Tombol CTA */}
            <div className="flex items-center gap-4">
              <motion.a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" whileTap={{ scale: 0.9 }}>
                <FiLinkedin className="text-gray-400 hover:text-white transition-colors" size={24} />
              </motion.a>
              <div className="hidden sm:flex items-center gap-2">
                <motion.div whileTap={{ scale: 0.95 }}>
                  <Link href="/sponsorship" className="bg-transparent border border-purple-500 text-purple-400 font-bold py-2 px-4 rounded-md text-sm transition-all hover:bg-purple-500 hover:text-white">
                    Join as a sponsor
                  </Link>
                </motion.div>
                <motion.div whileTap={{ scale: 0.95 }}>
                  <Link href="/tickets" className="bg-purple-600 text-white font-bold py-2 px-4 rounded-md text-sm transition-all hover:bg-purple-700">
                    Buy a ticket
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main className="relative z-10 flex-grow container mx-auto px-6 py-12">
        {children}
      </main>

      <footer className="relative z-10 mt-auto bg-black/30 backdrop-blur-lg border-t border-white/10">
        <div className="container mx-auto px-6 py-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} EventWeb. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

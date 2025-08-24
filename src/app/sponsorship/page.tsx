// src/app/sponsorship/page.tsx
'use client';

import SponsorshipForm from '@/components/SponsorshipForm';
import { motion } from 'framer-motion';

export default function SponsorshipPage() {
  return (
    <div className="flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center"
      >
        <h1 className="font-display text-4xl md:text-5xl font-semibold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
          Jadilah Sponsor Kami
        </h1>
        <p className="text-lg text-gray-400 mb-8 text-center max-w-2xl">
          Dapatkan eksposur eksklusif dan jangkau audiens yang tepat dengan menjadi sponsor Tech Conference 2025. Isi formulir di bawah untuk memulai.
        </p>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        className="w-full"
      >
        <SponsorshipForm />
      </motion.div>
    </div>
  );
}

// src/app/tickets/page.tsx
'use client';

import RegistrationForm from '@/components/RegistrationForm';
import { FiCheckCircle } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function TicketsPage() {

  // Fungsi untuk menangani smooth scroll ke formulir
  const handleScrollToForm = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const formElement = document.getElementById('registration-form');
    if (formElement) {
      formElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="flex flex-col items-center w-full">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center mb-12 md:mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-purple-400">Pilih Tiket Anda</h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Pilih pass yang paling sesuai dengan kebutuhan Anda untuk mendapatkan akses penuh ke semua sesi dan peluang networking.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 w-full max-w-5xl mb-20">
        
        {/* Kartu 1: Event Attendee Pass */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="bg-white/5 backdrop-blur-md p-8 rounded-xl border border-white/10
                        transition-all duration-300 ease-in-out
                        hover:scale-105 hover:border-purple-500 hover:bg-white/10 hover:shadow-2xl hover:shadow-purple-500/20">
          
          <h2 className="text-2xl font-bold text-white mb-2">Event Attendee Pass</h2>
          <p className="text-4xl font-extrabold text-purple-400 mb-6">$398</p>
          
          <ul className="space-y-3 text-gray-300 text-left mb-8">
            <li className="flex items-center gap-3"><FiCheckCircle className="text-green-400 flex-shrink-0" /> Full Access to All Sessions</li>
            <li className="flex items-center gap-3"><FiCheckCircle className="text-green-400 flex-shrink-0" /> Networking Opportunities</li>
            <li className="flex items-center gap-3"><FiCheckCircle className="text-green-400 flex-shrink-0" /> Business Lunch Included</li>
            <li className="flex items-center gap-3"><FiCheckCircle className="text-green-400 flex-shrink-0" /> Conference Swag Bag</li>
          </ul>
          
          <motion.button 
            onClick={handleScrollToForm} 
            whileTap={{ scale: 0.95 }}
            className="block w-full text-center bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-md transition-transform transform hover:scale-105">
            Book my ticket
          </motion.button>
        </motion.div>

        {/* Kartu 2: Solution Provider Pass */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          className="bg-white/5 backdrop-blur-md p-8 rounded-xl border border-white/10
                        transition-all duration-300 ease-in-out
                        hover:scale-105 hover:border-pink-500 hover:bg-white/10 hover:shadow-2xl hover:shadow-pink-500/20">
          
          <h2 className="text-2xl font-bold text-white mb-2">Solution Provider Pass</h2>
          <p className="text-4xl font-extrabold text-pink-400 mb-6">$798</p>
          
          <ul className="space-y-3 text-gray-300 text-left mb-8">
            <li className="flex items-center gap-3"><FiCheckCircle className="text-green-400 flex-shrink-0" /> All Attendee Pass Features</li>
            <li className="flex items-center gap-3"><FiCheckCircle className="text-green-400 flex-shrink-0" /> Dedicated Exhibition Booth</li>
            <li className="flex items-center gap-3"><FiCheckCircle className="text-green-400 flex-shrink-0" /> Lead Generation Access</li>
            <li className="flex items-center gap-3"><FiCheckCircle className="text-green-400 flex-shrink-0" /> Pre-Event Marketing</li>
          </ul>
          
          <motion.button 
            onClick={handleScrollToForm} 
            whileTap={{ scale: 0.95 }}
            className="block w-full text-center bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-4 rounded-md transition-transform transform hover:scale-105">
            Book my ticket
          </motion.button>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        id="registration-form" 
        className="w-full scroll-mt-24">
        <RegistrationForm />
      </motion.div>
    </div>
  );
}

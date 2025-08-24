'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiMail, FiMessageSquare } from 'react-icons/fi';

export default function SponsorshipForm() {
  const [companyName, setCompanyName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [response, setResponse] = useState({ type: '', text: '' });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResponse({ type: '', text: '' });

    try {
      const res = await fetch('/api/sponsorship', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ companyName, contactEmail, message }),
      });

      const result = await res.json();
      if (!res.ok) throw new Error(result.message || 'Gagal mengirim pengajuan.');

      setResponse({ type: 'success', text: 'Terima kasih! Pengajuan Anda telah terkirim. Tim kami akan segera menghubungi Anda.' });
      setCompanyName('');
      setContactEmail('');
      setMessage('');
    } catch (error: unknown) { // <-- PERBAIKAN DI SINI: Menggunakan 'unknown' bukan 'any'
      // Menangani error dengan aman sesuai aturan ESLint
      let errorMessage = 'Gagal mengirim pengajuan karena terjadi kesalahan.';
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      setResponse({ type: 'error', text: errorMessage });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white/5 backdrop-blur-md p-8 rounded-xl border border-white/10 w-full max-w-lg mx-auto">
      <h2 className="font-display text-2xl font-semibold mb-6 text-center text-white">Formulir Pengajuan Sponsor</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Input Nama Perusahaan dengan Ikon */}
        <div className="relative">
          <FiBriefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text" id="companyName" value={companyName} onChange={(e) => setCompanyName(e.target.value)} required
            className="w-full pl-12 pr-4 py-3 bg-white/10 border border-transparent rounded-md text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent focus:bg-white/5 transition"
            placeholder="Nama perusahaan Anda"
          />
        </div>
        {/* Input Email dengan Ikon */}
        <div className="relative">
          <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="email" id="contactEmail" value={contactEmail} onChange={(e) => setContactEmail(e.target.value)} required
            className="w-full pl-12 pr-4 py-3 bg-white/10 border border-transparent rounded-md text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent focus:bg-white/5 transition"
            placeholder="email.anda@perusahaan.com"
          />
        </div>
        {/* Textarea Pesan dengan Ikon */}
        <div className="relative">
          <FiMessageSquare className="absolute left-4 top-5 text-gray-400" />
          <textarea
            id="message" value={message} onChange={(e) => setMessage(e.target.value)} rows={4}
            className="w-full pl-12 pr-4 py-3 bg-white/10 border border-transparent rounded-md text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent focus:bg-white/5 transition"
            placeholder="Sampaikan pertanyaan atau detail penawaran Anda di sini..."
          ></textarea>
        </div>
        <div>
          <motion.button 
            type="submit" 
            disabled={isSubmitting} 
            whileTap={{ scale: 0.95 }}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-md transition-all disabled:bg-gray-500 flex items-center justify-center">
            {isSubmitting ? 'Mengirim...' : 'Kirim Pengajuan'}
          </motion.button>
        </div>
      </form>
      {response.text && (
        <p className={`mt-6 text-center p-3 rounded-md ${
          response.type === 'success' ? 'text-green-400 bg-green-900/50' : 'text-red-400 bg-red-900/50'
        }`}>
          {response.text}
        </p>
      )}
    </div>
  );
}
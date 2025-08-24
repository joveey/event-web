// src/components/RegistrationForm.tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiUser, FiMail, FiTag } from 'react-icons/fi';

export default function RegistrationForm() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [ticketType, setTicketType] = useState('Event Attendee');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [response, setResponse] = useState({ type: '', text: '' });

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsSubmitting(true);
        setResponse({ type: '', text: '' });

        try {
            // Kembali mengirim data ke API pendaftaran asli
            const res = await fetch('/api/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ fullName, email, ticketType }),
            });

            const result = await res.json();
            if (!res.ok) throw new Error(result.message || 'Gagal mendaftar.');

            setResponse({ type: 'success', text: 'Pendaftaran berhasil! Email konfirmasi akan segera dikirim.' });
            
            // Reset form setelah berhasil
            setFullName('');
            setEmail('');
            setTicketType('Event Attendee');

        } catch (error: unknown) {
            let errorMessage = 'Gagal memproses permintaan Anda.';
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
            <h2 className="font-display text-2xl font-semibold mb-6 text-center text-white">Formulir Pendaftaran</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text" id="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} required
                    className="w-full pl-12 pr-4 py-3 bg-white/10 border border-transparent rounded-md text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent focus:bg-white/5 transition"
                    placeholder="Nama lengkap Anda"
                  />
                </div>
                <div className="relative">
                  <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required
                    className="w-full pl-12 pr-4 py-3 bg-white/10 border border-transparent rounded-md text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent focus:bg-white/5 transition"
                    placeholder="email.anda@example.com"
                  />
                </div>
                <div className="relative">
                  <FiTag className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 z-10" />
                  <select
                    id="ticketType" value={ticketType} onChange={(e) => setTicketType(e.target.value)} required
                    className="relative w-full pl-12 pr-10 py-3 bg-white/10 border border-transparent rounded-md text-white appearance-none focus:ring-2 focus:ring-purple-500 focus:border-transparent focus:bg-white/5 transition"
                  >
                    <option value="Event Attendee">Event Attendee Pass</option>
                    <option value="Solution Provider">Solution Provider Pass</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
                <div>
                  <motion.button 
                    type="submit" 
                    disabled={isSubmitting} 
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-md transition-all disabled:bg-gray-500 flex items-center justify-center">
                    {isSubmitting ? 'Memproses...' : 'Daftar Sekarang'}
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

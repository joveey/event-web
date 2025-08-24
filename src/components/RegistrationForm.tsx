// src/components/RegistrationForm.tsx
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Deklarasi tipe untuk objek 'snap' dari Midtrans
declare global {
    interface Window {
        snap: any;
    }
}

export default function RegistrationForm() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [ticketType, setTicketType] = useState('Event Attendee');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [response, setResponse] = useState({ type: '', text: '' });

    // Load script Snap.js dari Midtrans saat komponen dimuat
    useEffect(() => {
        const snapScript = "https://app.sandbox.midtrans.com/snap/snap.js";
        const clientKey = process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY;

        const script = document.createElement('script');
        script.src = snapScript;
        script.setAttribute('data-client-key', clientKey || '');
        script.async = true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsSubmitting(true);
        setResponse({ type: '', text: '' });

        try {
            const res = await fetch('/api/payment/token', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ fullName, email, ticketType }),
            });

            const result = await res.json();
            if (!res.ok) throw new Error(result.error || 'Gagal membuat transaksi.');

            const { token } = result;

            window.snap.pay(token, {
                onSuccess: function(result: any){
                    console.log('Payment Success:', result);
                    setResponse({ type: 'success', text: 'Pembayaran berhasil! Email konfirmasi akan segera dikirim.' });
                },
                onPending: function(result: any){
                    console.log('Payment Pending:', result);
                    setResponse({ type: 'info', text: 'Menunggu pembayaran Anda. Silakan selesaikan transaksi.' });
                },
                onError: function(result: any){
                    console.error('Payment Error:', result);
                    setResponse({ type: 'error', text: 'Pembayaran gagal. Silakan coba lagi.' });
                },
                onClose: function(){
                    console.log('Popup pembayaran ditutup tanpa menyelesaikan transaksi');
                }
            });

            setFullName('');
            setEmail('');
            setTicketType('Event Attendee');

        } catch (error: any) {
            setResponse({ type: 'error', text: error.message });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        // --- PERUBAHAN DESAIN DI SINI ---
        <div className="bg-white/5 backdrop-blur-md p-8 rounded-xl border border-white/10 w-full max-w-lg mx-auto">
            <h2 className="font-display text-2xl font-semibold mb-6 text-center text-white">Formulir Pendaftaran</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-2">Nama Lengkap</label>
                  <input
                    type="text" id="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} required
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-purple-500 focus:border-purple-500 transition"
                    placeholder="Nama lengkap Anda"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Kontak</label>
                  <input
                    type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-purple-500 focus:border-purple-500 transition"
                    placeholder="email.anda@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="ticketType" className="block text-sm font-medium text-gray-300 mb-2">Tipe Tiket</label>
                  <select
                    id="ticketType" value={ticketType} onChange={(e) => setTicketType(e.target.value)} required
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-purple-500 focus:border-purple-500 transition"
                  >
                    <option value="Event Attendee">Event Attendee Pass ($398)</option>
                    <option value="Solution Provider">Solution Provider Pass ($798)</option>
                  </select>
                </div>
                <div>
                  <motion.button 
                    type="submit" 
                    disabled={isSubmitting} 
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-md transition-all disabled:bg-gray-500 flex items-center justify-center">
                    {isSubmitting ? 'Memproses...' : 'Lanjut ke Pembayaran'}
                  </motion.button>
                </div>
            </form>
            {response.text && (
                <p className={`mt-6 text-center p-3 rounded-md ${
                    response.type === 'success' ? 'text-green-400 bg-green-900/50' : 
                    response.type === 'error' ? 'text-red-400 bg-red-900/50' : 'text-yellow-400 bg-yellow-900/50'
                }`}>
                    {response.text}
                </p>
            )}
        </div>
    );
}

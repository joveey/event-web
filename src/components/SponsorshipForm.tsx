// Buat file baru 'SponsorshipForm.tsx' di dalam 'src/components/'.

'use client';

import { useState } from 'react';

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
    } catch (error: any) {
      setResponse({ type: 'error', text: error.message });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-lg mx-auto border border-gray-700">
      <h2 className="text-2xl font-bold mb-6 text-center text-white">Formulir Pengajuan Sponsor</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="companyName" className="block text-sm font-medium text-gray-300 mb-2">Nama Perusahaan</label>
          <input
            type="text" id="companyName" value={companyName} onChange={(e) => setCompanyName(e.target.value)} required
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-blue-500 focus:border-blue-500"
            placeholder="Nama perusahaan Anda"
          />
        </div>
        <div>
          <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-300 mb-2">Email Kontak</label>
          <input
            type="email" id="contactEmail" value={contactEmail} onChange={(e) => setContactEmail(e.target.value)} required
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-blue-500 focus:border-blue-500"
            placeholder="email.anda@perusahaan.com"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Pesan (Opsional)</label>
          <textarea
            id="message" value={message} onChange={(e) => setMessage(e.target.value)} rows={4}
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-blue-500 focus:border-blue-500"
            placeholder="Sampaikan pertanyaan atau detail penawaran Anda di sini..."
          ></textarea>
        </div>
        <div>
          <button type="submit" disabled={isSubmitting} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md transition-all disabled:bg-gray-500 flex items-center justify-center">
            {isSubmitting ? 'Mengirim...' : 'Kirim Pengajuan'}
          </button>
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

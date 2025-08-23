'use client';

import { useState } from 'react';

export default function RegistrationForm() {
  // State untuk menyimpan nilai dari setiap input form
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [ticketType, setTicketType] = useState('Event Attendee');
  
  // 4. State untuk status loading
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // State untuk menampilkan pesan sukses atau error (pengganti alert)
  const [message, setMessage] = useState({ type: '', text: '' });

  // 1. Membuat fungsi handleSubmit
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Mencegah refresh halaman
    setIsSubmitting(true);   // Mengaktifkan status loading
    setMessage({ type: '', text: '' }); // Reset pesan

    try {
      // 2. Mengirim data ke endpoint /api/register menggunakan fetch
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName,
          email,
          ticketType,
        }),
      });

      const result = await response.json();

      // 3. Menangani respons dari API
      if (!response.ok) {
        // Menangani jika API mengembalikan error
        throw new Error(result.message || 'Pendaftaran gagal! Silakan coba lagi.');
      }

      // Menampilkan pesan sukses
      setMessage({ type: 'success', text: `Terima kasih, ${fullName}! Pendaftaran Anda berhasil.` });
      
      // Mengosongkan form setelah berhasil
      setFullName('');
      setEmail('');
      setTicketType('Event Attendee');

    } catch (error: any) {
      // Menampilkan pesan error
      setMessage({ type: 'error', text: error.message });
    } finally {
      // Menonaktifkan status loading setelah selesai
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-lg mx-auto border border-gray-700">
      <h2 className="text-2xl font-bold mb-6 text-center text-white">Formulir Pendaftaran</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Input Nama Lengkap */}
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-2">Nama Lengkap</label>
          <input
            type="text" id="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} required
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-blue-500 focus:border-blue-500 transition"
            placeholder="Masukkan nama Anda"
          />
        </div>
        {/* Input Alamat Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Alamat Email</label>
          <input
            type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-blue-500 focus:border-blue-500 transition"
            placeholder="email@example.com"
          />
        </div>
        {/* Pilihan Tipe Tiket */}
        <div>
          <label htmlFor="ticketType" className="block text-sm font-medium text-gray-300 mb-2">Tipe Tiket</label>
          <select
            id="ticketType" value={ticketType} onChange={(e) => setTicketType(e.target.value)} required
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-blue-500 focus:border-blue-500 transition"
          >
            <option value="Event Attendee">Event Attendee</option>
            <option value="Solution Provider">Solution Provider</option>
          </select>
        </div>
        {/* Tombol 'Daftar Sekarang' */}
        <div>
          <button type="submit" disabled={isSubmitting} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md transition-all duration-300 disabled:bg-gray-500 disabled:cursor-not-allowed flex items-center justify-center">
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Memproses...
              </>
            ) : 'Daftar Sekarang'}
          </button>
        </div>
      </form>
      {/* Menampilkan pesan sukses atau error di UI */}
      {message.text && (
        <p className={`mt-6 text-center p-3 rounded-md ${
          message.type === 'success' ? 'text-green-400 bg-green-900/50' : 'text-red-400 bg-red-900/50'
        }`}>
          {message.text}
        </p>
      )}
    </div>
  );
}

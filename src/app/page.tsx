import Link from 'next/link';

export default function Home() {
  return (
    <div className="text-center flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-300 animate-fade-in-down">
        Tech Conference 2025
      </h1>
      <p className="text-xl text-gray-300 mb-8 max-w-2xl">
        Bergabunglah dengan para inovator dan pemimpin industri di konferensi teknologi terbesar yang akan mengubah masa depan Anda.
      </p>
      
      <div className="bg-gray-800 rounded-lg p-6 max-w-md mx-auto mb-10 shadow-lg border border-gray-700">
        <div className="space-y-3 text-left">
          <p className="text-lg flex items-center"><span className="font-semibold text-blue-400 w-24">🗓️ Tanggal</span>: 25 Agustus 2025</p>
          <p className="text-lg flex items-center"><span className="font-semibold text-blue-400 w-24">📍 Lokasi</span>: Jakarta Convention Center</p>
          <p className="text-lg flex items-center"><span className="font-semibold text-blue-400 w-24">⏰ Waktu</span>: 09:00 - 17:00 WIB</p>
        </div>
      </div>

      <Link 
        href="/tickets" 
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-transform transform hover:scale-105 shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-800"
      >
        Dapatkan Tiket Anda!
      </Link>
    </div>
  );
}

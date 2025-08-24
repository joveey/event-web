// src/components/Countdown.tsx

'use client';

import Countdown, { CountdownRenderProps } from 'react-countdown';

// Komponen kecil untuk satu kotak waktu (misal: Hari, Jam)
const TimeUnit = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center">
    <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700">
      {/* padStart(2, '0') untuk memastikan selalu ada 2 digit, misal: 09, 08 */}
      <span className="text-4xl md:text-5xl font-bold text-white">{value.toString().padStart(2, '0')}</span>
    </div>
    <span className="mt-2 text-sm md:text-base text-gray-400 uppercase tracking-wider">{label}</span>
  </div>
);

// Fungsi renderer kustom untuk mengatur tampilan countdown
const renderer = ({ days, hours, minutes, seconds, completed }: CountdownRenderProps) => {
  if (completed) {
    // Tampilan yang muncul saat countdown selesai
    return <div className="text-2xl font-bold text-green-400 animate-pulse">The Event is Live!</div>;
  } else {
    // Tampilan saat countdown berjalan
    return (
      <div className="flex items-center justify-center gap-4 md:gap-8">
        <TimeUnit value={days} label="Hari" />
        <TimeUnit value={hours} label="Jam" />
        <TimeUnit value={minutes} label="Menit" />
        <TimeUnit value={seconds} label="Detik" />
      </div>
    );
  }
};

const CountdownTimer = () => {
  // Atur tanggal event di sini. Format: YYYY-MM-DDTHH:mm:ss
  const eventDate = new Date('2025-11-12T09:00:00'); 

  return <Countdown date={eventDate} renderer={renderer} />;
};

export default CountdownTimer;

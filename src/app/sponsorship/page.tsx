// 1. Buat folder baru 'sponsorship' di dalam 'src/app/'.
// 2. Buat file 'page.tsx' di dalam folder tersebut.

import SponsorshipForm from '@/components/SponsorshipForm';

export default function SponsorshipPage() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-4 text-center text-blue-400">
        Jadilah Sponsor Kami
      </h1>
      <p className="text-lg text-gray-400 mb-8 text-center max-w-2xl">
        Dapatkan eksposur eksklusif dan jangkau audiens yang tepat dengan menjadi sponsor Tech Conference 2025. Isi formulir di bawah untuk memulai.
      </p>
      
      <SponsorshipForm />
    </div>
  );
}

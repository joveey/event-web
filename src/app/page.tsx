// src/app/page.tsx
'use client'; 

import Link from 'next/link';
import Image from 'next/image';
import { FiCalendar, FiMapPin } from 'react-icons/fi';
import { motion } from 'framer-motion';
import CountdownTimer from '@/components/Countdown';
import YouTubePlayer from '@/components/YouTubePlayer';

// Komponen untuk seksi "Hero" (bagian atas)
const HeroSection = () => (
    <div className="relative flex flex-col items-center justify-center min-h-screen text-white text-center px-4 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-display text-5xl md:text-7xl font-semibold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
          Tech Conference 2025
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          Bergabunglah dengan para inovator, developer, dan pemimpin industri di konferensi teknologi paling ditunggu tahun ini.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-10 text-lg text-gray-200">
          <div className="flex items-center gap-2"><FiCalendar className="text-purple-400" size={20} /><span>12 November 2025</span></div>
          <div className="flex items-center gap-2"><FiMapPin className="text-purple-400" size={20} /><span>Jakarta Convention Center</span></div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
          className="mb-12">
          <CountdownTimer />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
          whileTap={{ scale: 0.95 }}>
          <Link 
            href="/tickets" 
            className="inline-block bg-purple-600 text-white font-bold py-4 px-10 rounded-full text-lg transition-all duration-300 ease-in-out hover:bg-purple-700 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30 focus:outline-none focus:ring-4 focus:ring-purple-800">
            Dapatkan Tiket Anda Sekarang
          </Link>
        </motion.div>
      </div>
    </div>
  );

// Seksi "Why Attend" dengan 3 kartu
const WhyAttendSection = () => {
  const reasons = [
    {
      number: "No.1",
      title: "Stay up-to-date on industry trends",
      description: "Attending our conference can help you stay abreast of the latest trends and best practices.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2940&auto=format&fit=crop"
    },
    {
      number: "No.2",
      title: "Network with industry professionals",
      description: "Conferences provide an opportunity to network with other professionals in your field.",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2835&auto=format&fit=crop"
    },
    {
      number: "No.3",
      title: "Learn from experts and thought leaders",
      description: "Our conferences often feature keynote speakers and panelists who are experts in the field.",
      image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=2940&auto=format&fit=crop"
    }
  ];

  return (
    <motion.section 
      className="py-20 px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.2 }}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div 
              key={index}
              className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 overflow-hidden"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
              }}
            >
              <div className="p-6">
                <h3 className="font-display text-3xl font-semibold text-purple-400 mb-2">{reason.number}</h3>
                <h4 className="font-display text-xl font-semibold text-white h-20">{reason.title}</h4>
              </div>
              <div className="relative w-full h-40">
                <Image src={reason.image} alt={reason.title} layout="fill" objectFit="cover" />
              </div>
              <div className="p-6">
                <p className="text-gray-400">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

// Seksi 'Tentang Event' dengan layout 2 kolom
const AboutSection = () => (
  <section className="py-20 px-4">
    <motion.div 
      className="container mx-auto bg-white/5 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-white/10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="relative w-full h-96"
        >
          <Image
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2940&auto=format&fit=crop"
            alt="Tim berkolaborasi dalam sebuah proyek teknologi"
            layout="fill"
            className="rounded-lg shadow-lg object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        >
          <h2 className="font-display text-4xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            Discover The Future of Cyber Security
          </h2>
          <p className="text-lg text-gray-300 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </motion.div>
      </div>
    </motion.div>
  </section>
);

// Seksi Video YouTube
const VideoSection = () => (
  <motion.section 
    className="py-20 px-4"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    <div className="container mx-auto text-center max-w-4xl">
      <h2 className="font-display text-4xl font-semibold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
        Get Inspired
      </h2>
      <div className="bg-white/5 backdrop-blur-md p-2 rounded-xl border border-white/10">
        <YouTubePlayer videoId="dQw4w9WgXcQ" /> 
      </div>
    </div>
  </motion.section>
);

// Seksi Pembicara Unggulan
const SpeakersSection = () => {
    const speakers = [
      { name: 'Dr. Arini Putri', title: 'AI Specialist, Google', image: 'https://placehold.co/128x128/1a1a1a/ffffff?text=AP' },
      { name: 'Budi Santoso', title: 'Lead Engineer, Gojek', image: 'https://placehold.co/128x128/1a1a1a/ffffff?text=BS' },
      { name: 'Citra Lestari', title: 'VP of Product, Tokopedia', image: 'https://placehold.co/128x128/1a1a1a/ffffff?text=CL' },
    ];
  
    return (
      <motion.section 
        className="py-20 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.2 }}
      >
        <div className="container mx-auto text-center">
          <h2 className="font-display text-4xl font-semibold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">Pembicara Unggulan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {speakers.map((speaker, index) => (
              <motion.div 
                key={index}
                className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 text-center flex flex-col items-center"
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
                }}
              >
                <Image 
                  src={speaker.image} 
                  alt={speaker.name} 
                  width={128}
                  height={128}
                  className="rounded-full mb-4 border-4 border-purple-500" 
                />
                <h3 className="font-display text-xl font-semibold text-white">{speaker.name}</h3>
                <p className="text-purple-300">{speaker.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    );
  };

// Gabungkan semua seksi di komponen utama Halaman
export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyAttendSection />
      <AboutSection />
      <VideoSection />
      <SpeakersSection />
    </>
  );
}

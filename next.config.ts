// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Konfigurasi untuk mengizinkan domain gambar eksternal
  transpilePackages : ['framer-motion'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
  },
};

export default nextConfig;

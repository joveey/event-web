// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Opsi ini secara eksplisit memberitahu Next.js untuk memproses framer-motion
  transpilePackages: ['framer-motion'],
};

export default nextConfig;

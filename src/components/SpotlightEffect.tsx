// src/components/SpotlightEffect.tsx
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const SpotlightEffect = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup listener saat komponen dilepas
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-30 transition duration-300"
      style={{
        background: `radial-gradient(600px at ${position.x}px ${position.y}px, rgba(167, 139, 250, 0.15), transparent 80%)`,
      }}
    ></motion.div>
  );
};

export default SpotlightEffect;

// src/components/AuroraBackground.tsx
'use client';

const AuroraBackground = () => {
  return (
    <div className="absolute inset-0 -z-50 overflow-hidden">
      <div className="relative h-full w-full">
        {/* Blob 1 */}
        <div 
          className="absolute -top-40 -left-40 h-[300px] w-[500px] rounded-full 
                     bg-gradient-to-r from-indigo-500 to-purple-500 
                     opacity-40 blur-3xl filter animate-blob-spin"
          style={{ animationDuration: '20s' }}
        ></div>
        {/* Blob 2 */}
        <div 
          className="absolute -bottom-40 -right-40 h-[400px] w-[400px] rounded-full 
                     bg-gradient-to-r from-blue-400 to-teal-400 
                     opacity-30 blur-3xl filter animate-blob-spin"
          style={{ animationDuration: '25s', animationDelay: '5s' }}
        ></div>
         {/* Blob 3 */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[350px] w-[350px] rounded-full 
                     bg-gradient-to-r from-purple-600 to-pink-500 
                     opacity-20 blur-3xl filter animate-blob-spin"
          style={{ animationDuration: '18s', animationDelay: '10s' }}
        ></div>
      </div>
    </div>
  );
};

export default AuroraBackground;

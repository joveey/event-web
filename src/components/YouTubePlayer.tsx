// src/components/YouTubePlayer.tsx
'use client';

interface YouTubePlayerProps {
  videoId: string;
}

const YouTubePlayer = ({ videoId }: YouTubePlayerProps) => {
  return (
    // Container ini menggunakan plugin aspect-ratio untuk menjaga rasio 16:9
    <div className="aspect-w-16 aspect-h-9 w-full">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="rounded-lg shadow-2xl"
      ></iframe>
    </div>
  );
};

export default YouTubePlayer;

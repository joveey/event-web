    // src/lib/fonts.ts
    import localFont from 'next/font/local';

    // Definisi font Satoshi untuk teks biasa
    export const satoshi = localFont({
      src: [
        {
          path: '../fonts/Satoshi-Regular.otf',
          weight: '400',
          style: 'normal',
        },
        {
          path: '../fonts/Satoshi-Italic.otf',
          weight: '400',
          style: 'italic',
        },
        {
          path: '../fonts/Satoshi-Bold.otf',
          weight: '700',
          style: 'normal',
        },
      ],
      variable: '--font-satoshi', // Nama variabel CSS
    });

    // Definisi font Clash Display untuk judul
    export const clashDisplay = localFont({
      src: [
        {
          path: '../fonts/ClashDisplay-Semibold.otf',
          weight: '600',
          style: 'normal',
        },
      ],
      variable: '--font-clash-display', // Nama variabel CSS
    });
    
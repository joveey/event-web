// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Layout from "@/components/Layout";
// Impor font yang sudah kita definisikan
import { satoshi, clashDisplay } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "JAGO EVENT",
  description: "Website pendaftaran untuk event paling keren tahun ini.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Terapkan variabel font ke body */}
      <body className={`${satoshi.variable} ${clashDisplay.variable}`}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Layout from "@/components/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pendaftaran Event Keren",
  description: "Website pendaftaran untuk event paling keren tahun ini.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Dengan membungkus 'children' di sini, semua halaman
            akan secara otomatis memiliki Navbar dan Footer. */}
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}

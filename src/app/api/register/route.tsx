import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { Resend } from 'resend';
import { render } from '@react-email/render';

// Impor komponen email Anda
import ConfirmationEmail from '@/emails/ConfirmationEmail';
import AdminNotificationEmail from '@/emails/AdminNotificationEmail';

const resend = new Resend(process.env.RESEND_API_KEY);
const ADMIN_EMAIL = 'jovisywl@gmail.com'; // Ganti dengan email admin Anda
const FROM_EMAIL = 'onboarding@resend.dev'; // Email default dari Resend

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, ticketType } = body;

    // Validasi input
    if (!fullName || !email || !ticketType) {
      return NextResponse.json({ message: 'Semua field harus diisi.' }, { status: 400 });
    }

    // Cek apakah email sudah terdaftar
    const existingUser = await prisma.registration.findUnique({ where: { email } });
    if (existingUser) {
      return NextResponse.json({ message: 'Email ini sudah terdaftar.' }, { status: 409 });
    }

    // Buat data pendaftaran baru di database
    const newRegistration = await prisma.registration.create({
      data: { fullName, email, ticketType },
    });

    // Kirim email (ditempatkan di dalam try...catch terpisah agar tidak membatalkan pendaftaran jika gagal)
    try {
      // Render komponen email menjadi HTML string
      const confirmationHtml = await render(<ConfirmationEmail fullName={fullName} ticketType={ticketType} />);
      const adminNotificationHtml = await render(<AdminNotificationEmail fullName={fullName} email={email} ticketType={ticketType} />);

      // Kirim email konfirmasi ke pendaftar
      await resend.emails.send({
        from: FROM_EMAIL,
        to: email,
        subject: 'Konfirmasi Pendaftaran Tech Conference 2025',
        html: confirmationHtml,
      });

      // Kirim email notifikasi ke admin
      await resend.emails.send({
        from: FROM_EMAIL,
        to: ADMIN_EMAIL,
        subject: `Pendaftar Baru: ${fullName}`,
        html: adminNotificationHtml,
      });

    } catch (emailError) {
      // Jika pengiriman email gagal, cukup catat errornya di log
      // Pendaftaran pengguna tetap dianggap berhasil
      console.error("Gagal mengirim email:", emailError);
    }

    // Kembalikan respons sukses
    return NextResponse.json(
      { message: 'Pendaftaran berhasil!', data: newRegistration },
      { status: 201 }
    );

  } catch (error) {
    // Tangani error umum (misalnya, masalah koneksi database)
    console.error("Error saat pendaftaran:", error);
    return NextResponse.json({ message: 'Terjadi kesalahan pada server.' }, { status: 500 });
  }
}
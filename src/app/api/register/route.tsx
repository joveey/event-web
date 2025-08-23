
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { Resend } from 'resend';
import * as React from 'react';
import { render } from '@react-email/render';

// Pastikan import ini sudah tidak menggunakan {}
import ConfirmationEmail from '@/emails/ConfirmationEmail';
import AdminNotificationEmail from '@/emails/AdminNotificationEmail';

const resend = new Resend(process.env.RESEND_API_KEY);
const ADMIN_EMAIL = 'jovisywl@gmail.com';
const FROM_EMAIL = 'onboarding@resend.dev'; 

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, ticketType } = body;

    if (!fullName || !email || !ticketType) {
      return NextResponse.json({ status: 'error', message: 'Semua field harus diisi.' }, { status: 400 });
    }

    const existingUser = await prisma.registration.findUnique({ where: { email } });
    if (existingUser) {
      return NextResponse.json({ status: 'error', message: 'Email ini sudah terdaftar.' }, { status: 409 });
    }

    const newRegistration = await prisma.registration.create({
      data: { fullName, email, ticketType },
    });

    try {
      // --- PERBAIKAN UTAMA DI SINI: Tambahkan 'await' ---
      // Kita harus menunggu proses render selesai sebelum melanjutkan.
      const confirmationHtml = await render(<ConfirmationEmail fullName={fullName} ticketType={ticketType} />);
      const adminNotificationHtml = await render(<AdminNotificationEmail fullName={fullName} email={email} ticketType={ticketType} />);

      // Kirim email konfirmasi ke pendaftar
      await resend.emails.send({
        from: FROM_EMAIL,
        to: email,
        subject: 'Konfirmasi Pendaftaran Tech Conference 2025',
        html: confirmationHtml, // Sekarang confirmationHtml adalah string, bukan Promise
      });

      // Kirim email notifikasi ke admin
      await resend.emails.send({
        from: FROM_EMAIL,
        to: ADMIN_EMAIL,
        subject: `Pendaftar Baru: ${fullName}`,
        html: adminNotificationHtml, // Ini juga sudah menjadi string
      });

    } catch (emailError) {
      console.error("Gagal mengirim email:", emailError);
    }

    return NextResponse.json(
      { status: 'success', message: 'Pendaftaran berhasil!', data: newRegistration },
      { status: 201 }
    );

  } catch (error) {
    console.error("Error saat pendaftaran:", error);
    return NextResponse.json({ status: 'error', message: 'Terjadi kesalahan pada server.' }, { status: 500 });
  }
}

// 1. Buat folder 'sponsorship' di dalam 'src/app/api/'.
// 2. Buat file 'route.tsx' di dalam folder tersebut.

import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import * as React from 'react';
import { render } from '@react-email/render';

import SponsorshipNotificationEmail from '@/emails/SponsorshipNotificationEmail';

const resend = new Resend(process.env.RESEND_API_KEY);
const PARTNERSHIP_EMAIL = 'jovisywl@gmail.com'; // Ganti dengan email tim partnership
const FROM_EMAIL = 'onboarding@resend.dev'; // Gunakan email terverifikasi Anda di production

export async function POST(request: Request) {
  try {
    const { companyName, contactEmail, message } = await request.json();

    if (!companyName || !contactEmail) {
      return NextResponse.json({ message: 'Nama perusahaan dan email kontak wajib diisi.' }, { status: 400 });
    }

    const emailHtml = await render(
      <SponsorshipNotificationEmail 
        companyName={companyName} 
        contactEmail={contactEmail} 
        message={message} 
      />
    );

    await resend.emails.send({
      from: FROM_EMAIL,
      to: PARTNERSHIP_EMAIL,
      subject: `Pengajuan Sponsor Baru dari ${companyName}`,
      html: emailHtml,
    });

    return NextResponse.json({ message: 'Pengajuan berhasil dikirim!' }, { status: 200 });

  } catch (error) {
    console.error("Gagal mengirim pengajuan sponsor:", error);
    return NextResponse.json({ message: 'Terjadi kesalahan pada server.' }, { status: 500 });
  }
}

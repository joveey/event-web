// Buat file baru 'SponsorshipNotificationEmail.tsx' di dalam 'src/emails/'.

import * as React from 'react';
import { Html, Head, Preview, Body, Container, Heading, Text, Hr } from '@react-email/components';

interface SponsorshipNotificationEmailProps {
  companyName: string;
  contactEmail: string;
  message: string;
}

export default function SponsorshipNotificationEmail({
  companyName,
  contactEmail,
  message,
}: SponsorshipNotificationEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Pengajuan Sponsor Baru: {companyName}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={heading}>🚀 Pengajuan Sponsor Baru!</Heading>
          <Text style={paragraph}>
            Ada pengajuan sponsor baru yang masuk melalui website.
          </Text>
          <Hr style={hr} />
          <Text style={paragraph}><strong>Nama Perusahaan:</strong> {companyName}</Text>
          <Text style={paragraph}><strong>Email Kontak:</strong> {contactEmail}</Text>
          <Hr style={hr} />
          <Heading as="h3" style={{ ...heading, fontSize: '20px' }}>Pesan:</Heading>
          <Text style={{ ...paragraph, border: '1px solid #e6ebf1', padding: '15px', borderRadius: '5px' }}>
            {message || "(Tidak ada pesan tambahan)"}
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

// Styles
const main = { backgroundColor: '#f6f9fc', fontFamily: 'Arial, sans-serif' };
const container = { margin: '0 auto', padding: '20px 0 48px', width: '580px' };
const heading = { fontSize: '28px', fontWeight: 'bold', color: '#484848' };
const paragraph = { fontSize: '16px', lineHeight: '24px', color: '#484848' };
const hr = { borderColor: '#e6ebf1', margin: '20px 0' };

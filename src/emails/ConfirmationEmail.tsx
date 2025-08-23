import * as React from 'react';
import { Html, Head, Preview, Body, Container, Heading, Text, Hr } from '@react-email/components';

interface ConfirmationEmailProps {
  fullName: string;
  ticketType: string;
}

// Pastikan Anda menggunakan 'export default function'
export default function ConfirmationEmail({
  fullName,
  ticketType,
}: ConfirmationEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Konfirmasi Pendaftaran Event Tech Conference 2025</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={heading}>Pendaftaran Berhasil!</Heading>
          <Text style={paragraph}>Halo {fullName},</Text>
          <Text style={paragraph}>
            Terima kasih telah mendaftar untuk Tech Conference 2025. Kami sangat senang Anda akan bergabung!
          </Text>
          <Hr style={hr} />
          <Text style={paragraph}>
            <strong>Detail Pendaftaran Anda:</strong>
          </Text>
          <Text style={paragraph}>
            - Nama: {fullName}
            <br />
            - Tipe Tiket: {ticketType}
          </Text>
          <Hr style={hr} />
          <Text style={footer}>
            Tech Conference 2025 | Jakarta Convention Center
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
const footer = { color: '#8898aa', fontSize: '12px' };

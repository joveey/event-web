import * as React from 'react';
import { Html, Head, Preview, Body, Container, Heading, Text, Hr } from '@react-email/components';

interface AdminNotificationEmailProps {
  fullName: string;
  email: string;
  ticketType: string;
}

// Pastikan Anda menggunakan 'export default function'
export default function AdminNotificationEmail({
  fullName,
  email,
  ticketType,
}: AdminNotificationEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Pendaftar Baru: {fullName}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={heading}>🔔 Pendaftar Baru!</Heading>
          <Text style={paragraph}>
            Seseorang baru saja mendaftar untuk Tech Conference 2025.
          </Text>
          <Hr style={hr} />
          <Text style={paragraph}>
            <strong>Detail Pendaftar:</strong>
          </Text>
          <Text style={paragraph}>
            - Nama: {fullName}
            <br />
            - Email: {email}
            <br />
            - Tipe Tiket: {ticketType}
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

// Styles
const main = { backgroundColor: '#f6f9fc', fontFamily: 'Arial, sans-serif' };
const container = { margin: '0 auto', padding: '20AKs0 48px', width: '580px' };
const heading = { fontSize: '28px', fontWeight: 'bold', color: '#484848' };
const paragraph = { fontSize: '16px', lineHeight: '24px', color: '#484848' };
const hr = { borderColor: '#e6ebf1', margin: '20px 0' };

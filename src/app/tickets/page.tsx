import RegistrationForm from '@/components/RegistrationForm';

export default function TicketsPage() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-400">
        Tiket & Registrasi
      </h1>
      
      {/* Gunakan komponen RegistrationForm di sini */}
      <RegistrationForm />
    </div>
  );
}


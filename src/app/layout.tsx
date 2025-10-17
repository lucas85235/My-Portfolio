import './globals.css';
import { Inter } from 'next/font/google';
import { Providers } from './providers';
import { Navbar } from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  // ...
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>

          {/* 1. Navbar (Fora do contêiner de largura limitada) */}
          <Navbar />

          {/* 2. Conteúdo Principal (Container de largura limitada) */}
          {/* Nota: Adicione 'mt-16' (margin top de 4rem) no wrapper do conteúdo 
             para que ele não fique escondido sob a Navbar fixa de 4rem de altura (h-16) */}
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 mt-16">
            {children}
          </div>

        </Providers>
      </body>
    </html>
  );
}
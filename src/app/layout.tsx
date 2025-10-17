import './globals.css';
import { Inter } from 'next/font/google';
import { Providers } from './providers'; // Importe o novo provedor

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
      {/* O suppressHydrationWarning é necessário para o next-themes */}
      <body className={inter.className}>
        <Providers> {/* Envolva o conteúdo com o Provedor */}
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
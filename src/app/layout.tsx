import './globals.css';
import { Inter } from 'next/font/google';
import { Providers } from './providers';
import { Navbar } from '@/components/Navbar';
import { Analytics } from '@vercel/analytics/next';

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
          <Navbar />

          {/* Remova o 'max-w-3xl' daqui e adicione-o apenas onde o conteúdo deve ser limitado. */}
          {/* O conteúdo do HeaderBio será tratado separadamente para ocupar a largura total. */}
          <div className="mt-0"> {/* Apenas a margem para compensar a Navbar */}
            {children}
          </div>

        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
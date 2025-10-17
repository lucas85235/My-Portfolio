import './globals.css';
import { Inter } from 'next/font/google'; // Importe a fonte que está sendo usada

// Configuração da fonte (mantenha como estiver se usou o setup padrão)
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Portfólio Gamedev | Seu Nome',
  description: 'Portfólio de um Desenvolvedor de Jogos (Gamedev) focado em projetos.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={inter.className}>
        {/* O div abaixo garante a largura máxima e o padding lateral */}
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </body>
    </html>
  );
}

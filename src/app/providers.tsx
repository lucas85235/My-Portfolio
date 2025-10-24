'use client'; // Deve ser um Client Component

import { ThemeProvider } from 'next-themes';
import { ReactNode } from 'react';

interface ProvidersProps {
    children: ReactNode;
}

// O ThemeProvider gerencia o tema e adiciona/remove a classe 'dark'
export function Providers({ children }: ProvidersProps) {
    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
        </ThemeProvider>
    );
}
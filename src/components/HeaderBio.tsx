// src/components/HeaderBio.tsx

import React from 'react';

export const HeaderBio: React.FC = () => {
    return (
        <header className="pt-20 pb-16 md:pt-32 md:pb-24">
            {/* Título Principal */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4">
                [Seu Nome] — Gamedev
            </h1>

            {/* Subtítulo/Bio */}
            <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl">
                Desenvolvedor de Jogos focado em [Sua Especialidade, ex: Gameplay Programming, Unity/Unreal, Pixel Art]. Acredito em jogos com mecânicas sólidas e narrativas envolventes.
            </p>

            {/* Espaço para links sociais/contato (Opcional - vamos adicionar no Footer, mas podemos deixar um aqui) */}
            {/* <nav className="mt-6 space-x-4">
        <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">Twitter</a>
        <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">GitHub</a>
      </nav> */}
        </header>
    );
};
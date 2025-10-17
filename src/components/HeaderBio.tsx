import React from 'react';

export const HeaderBio: React.FC = () => {
    return (
        <header className="py-16 md:py-24">
            {/* Título Principal */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4">
                [Seu Nome] — Gamedev
            </h1>

            {/* Subtítulo/Bio */}
            <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl">
                Desenvolvedor de Jogos focado em [Sua Especialidade...]. Acredito em jogos com mecânicas sólidas e narrativas envolventes.
            </p>
        </header>
    );
};
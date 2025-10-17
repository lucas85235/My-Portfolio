import React from 'react';
import { ThemeToggle } from './ThemeToggle'; // Importe o novo Toggle

export const HeaderBio: React.FC = () => {
    return (
        <header className="pt-8 pb-16 md:pt-16 md:pb-24">

            {/* Contêiner para o Toggle (Canto Superior Direito) */}
            <div className="flex justify-end -mr-2 mb-8"> {/* Ajusta a margem para fora do contêiner */}
                <ThemeToggle />
            </div>

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
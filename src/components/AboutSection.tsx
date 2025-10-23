import React from 'react';

export const AboutSection: React.FC = () => {
    return (
        <section id="about" className="pt-16 border-t border-gray-100 dark:border-gray-800">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-50">
                About Me
            </h2>

            <div className="text-lg space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                    Olá! Sou [Seu Nome], game developer e designer do Brasil. Comecei a fazer jogos desde [sua idade ou ano] e publiquei meu primeiro trabalho na [plataforma, ex: itch.io, Google Play]. Sou formado em [sua formação] e atualmente sou [seu cargo/foco].
                </p>
                <p>
                    Você pode ver alguns dos projetos que tive a oportunidade de contribuir, e alguns projetos pessoais. Sempre tive uma forte perseverança em aprender coisas novas e aceitar desafios. Gosto de ir um pouco além para polir minhas criações, garantindo que a visão criativa seja alcançada da melhor forma possível. Minha curiosidade me leva a explorar constantemente o lado técnico do desenvolvimento de jogos.
                </p>
                <p>
                    Também gosto de construir sites minimalistas como este. Se você tiver alguma pergunta, fique à vontade para me contatar. :)
                </p>
            </div>
        </section>
    );
};
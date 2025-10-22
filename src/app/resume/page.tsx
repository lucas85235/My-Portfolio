import React from 'react';
import { Container } from '@/components/Container';

export const metadata = {
    title: 'Currículo - [Seu Nome]',
    description: 'Visualização da experiência profissional e acadêmica como Game Developer.',
};

const ResumePage: React.FC = () => {
    const RESUME_PDF_PATH = '/files/seu_curriculo.pdf';

    return (
        <Container className="pt-24 pb-32">

            {/* Título Principal */}
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-8 text-gray-900 dark:text-gray-50">
                Currículo
            </h1>

            {/* Botão de Download */}
            <a
                href={RESUME_PDF_PATH}
                download
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors dark:bg-blue-500 dark:hover:bg-blue-600"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Baixar Currículo (PDF)
            </a>

            {/* Seção de Resumo (Você pode expandir isso com mais detalhes) */}
            <div className="mt-16 space-y-12">

                {/* Experiência Profissional */}
                <section>
                    <h2 className="text-3xl font-bold mb-6 border-b pb-2 border-gray-200 dark:border-gray-700">
                        Experiência Profissional
                    </h2>

                    <div className="space-y-8">
                        {/* Item 1 */}
                        <article>
                            <h3 className="text-2xl font-semibold">Senior Game Programmer</h3>
                            <p className="text-lg text-gray-700 dark:text-gray-300">Ubisoft Montreal | 2022 – Presente</p>
                            <ul className="list-disc list-inside mt-2 text-gray-600 dark:text-gray-400 space-y-1 ml-4">
                                <li>Desenvolvimento e otimização de sistemas de combate em C++ para título AAA.</li>
                                <li>Mentoria de programadores juniores e revisão de código.</li>
                                <li>Foco em performance e arquitetura de código.</li>
                            </ul>
                        </article>

                        {/* Item 2 */}
                        <article>
                            <h3 className="text-2xl font-semibold">Junior Unity Developer</h3>
                            <p className="text-lg text-gray-700 dark:text-gray-300">Estúdio Indie X | 2020 – 2022</p>
                            <ul className="list-disc list-inside mt-2 text-gray-600 dark:text-gray-400 space-y-1 ml-4">
                                <li>Implementação de mecânicas de jogo e UI usando Unity/C#.</li>
                            </ul>
                        </article>
                    </div>
                </section>

                {/* Educação */}
                <section>
                    <h2 className="text-3xl font-bold mb-6 border-b pb-2 border-gray-200 dark:border-gray-700">
                        Educação
                    </h2>
                    <article>
                        <h3 className="text-2xl font-semibold">Bacharelado em Ciência da Computação</h3>
                        <p className="text-lg text-gray-700 dark:text-gray-300">Universidade Y | 2016 – 2020</p>
                    </article>
                </section>

            </div>

        </Container>
    );
};

export default ResumePage;
import React from 'react';
import { Container } from '@/components/Container';

export const metadata = {
    title: 'Resume - Lucas de Souza Lima',
    description: 'Overview of professional and academic experience as a Game Developer, Technical Artist, and XR/AR Developer.',
};

const ResumePage: React.FC = () => {
    // Certifique-se de que o nome do arquivo PDF no caminho abaixo corresponde ao arquivo que você deseja que o usuário baixe.
    const RESUME_PDF_PATH = '/files/_Lucas_de_Souza_Lima_Currículo.pdf'; 

    return (
        <Container className="pt-24 pb-32">

            {/* Título Principal */}
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-8 text-gray-900 dark:text-gray-50">
                Resume
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
                Download Resume (PDF)
            </a>

            {/* Seção de Resumo (Você pode expandir isso com mais detalhes) */}
            <div className="mt-16 space-y-12">

                {/* Experiência Profissional */}
                <section>
                    <h2 className="text-3xl font-bold mb-6 border-b pb-2 border-gray-200 dark:border-gray-700">
                        Professional Experience
                    </h2>

                    <div className="space-y-8">
                        {/* Item 1: Sidia */}
                        <article>
                            <h3 className="text-2xl font-semibold">SW Developer & Technical Artist (XR/AR)</h3>
                            <p className="text-lg text-gray-700 dark:text-gray-300">Sidia Institute of Science and Technology | February 2023 – Present</p>
                            <ul className="list-disc list-inside mt-2 text-gray-600 dark:text-gray-400 space-y-1 ml-4">
                                <li>Development of Extended Reality (XR/AR) applications.</li>
                                <li>Role as a Technical Artist, responsible for optimization, effect creation, validation, and asset integration.</li>
                                <li>Working and contributing to proprietary technologies from Samsung and Google companies that are not yet on the market.</li>
                            </ul>
                        </article>

                        {/* Item 2: Sardinha Studios */}
                        <article>
                            <h3 className="text-2xl font-semibold">Co-Founder and Developer (Funded and Indie Projects)</h3>
                            <p className="text-lg text-gray-700 dark:text-gray-300">Sardinha Studios | 2020 – Present</p>
                            <ul className="list-disc list-inside mt-2 text-gray-600 dark:text-gray-400 space-y-1 ml-4">
                                <li>Co-founded an indie studio, responsible for project development and technical management.</li>
                                <li>Leadership in fundraising: successfully secured funding from more than 6 cultural grants focused on games.</li>
                                <li>Development of 22+ projects, including Game Jams, prototypes, and commercial games launched or scheduled for release.</li>
                                <li>Finalist at BIG Festival (now Gamescom Latam) 2022 with the game <b>Warbots</b>.</li>
                            </ul>
                        </article>


                         {/* Item 3: Freelancer - Grupo 1 (Reagrupado) */}
                        <article>
                            <h3 className="text-2xl font-semibold">Unity Developer (Freelancer)</h3>
                            <p className="text-lg text-gray-700 dark:text-gray-300">YuzuGames, Stubbird Games, Netuno.io, MIO Studios | 2021 – 2023</p>
                            <ul className="list-disc list-inside mt-2 text-gray-600 dark:text-gray-400 space-y-1 ml-4">
                                <li>Full development of puzzle games for Steam.</li>
                                <li>Creation of mobile games: mechanics development, responsive UI, VFX, and API integration.</li>
                                <li>Fixing of <b>bugs</b> in a multiplayer game with Blockchain integration.</li>
                                <li>Participation in the production, game design, and complete development of mobile and PC games.</li>
                            </ul>
                        </article>

                         {/* Item 4: Fundação CERTI */}
                        <article>
                            <h3 className="text-2xl font-semibold">Software Development Analyst</h3>
                            <p className="text-lg text-gray-700 dark:text-gray-300">Fundação CERTI | August 2019 – December 2020</p>
                            <ul className="list-disc list-inside mt-2 text-gray-600 dark:text-gray-400 space-y-1 ml-4">
                                <li>Development of a game with proprietary <b>hardware</b> integration.</li>
                                <li>Work with embedded systems, <b>bug</b> fixing, unit testing, and implementation of new features.</li>
                                <li>Implementation of business rules in the Back-End and update of a mobile application (Android Studio and Java).</li>
                            </ul>
                        </article>

                    </div>
                </section>

                {/* Educação */}
                <section>
                    <h2 className="text-3xl font-bold mb-6 border-b pb-2 border-gray-200 dark:border-gray-700">
                        Education
                    </h2>
                    <article>
                        <h3 className="text-2xl font-semibold">Technologist in Systems Analysis and Development</h3>
                        <p className="text-lg text-gray-700 dark:text-gray-300">Estácio de Sá | March 2018 – July 2020</p>
                    </article>
                </section>

            </div>

        </Container>
    );
};

export default ResumePage;
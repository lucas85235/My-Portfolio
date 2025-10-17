// src/app/projects/[slug]/page.tsx

import { MOCK_PROJECTS, Project } from '@/data/projects';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectPageProps {
    params: {
        slug: string;
    };
}

export async function generateStaticParams() {
    return MOCK_PROJECTS.map((project) => ({
        slug: project.slug,
    }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
    const resolvedParams = await params as ProjectPageProps['params'];
    const project = MOCK_PROJECTS.find((p) => p.slug === resolvedParams.slug);

    if (!project) {
        return (
            <main className="py-24">
                <h1 className="text-4xl font-bold">404 - Projeto não encontrado</h1>
                <p className="mt-4">O projeto que você está procurando não existe.</p>
                <Link href="/" className="mt-6 inline-block text-blue-600 hover:underline">
                    ← Voltar para a Home
                </Link>
            </main>
        );
    }

    return (
        <main className="pt-20 pb-32">

            {/* Botão Voltar */}
            <Link href="/" className="flex items-center text-lg font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors mb-8">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Voltar para os Trabalhos
            </Link>

            {/* Título e Capa do Projeto */}
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
                {project.title}
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
                {project.description}
            </p>

            {/* Capa/Banner */}
            <div className="mb-12">
                <Image
                    src={project.image}
                    alt={`Capa do projeto ${project.title}`}
                    width={900}
                    height={500}
                    className="w-full h-auto object-cover rounded-xl shadow-2xl"
                />
            </div>

            {/* Detalhes Técnicos e Link */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 border-b pb-8 border-gray-100 dark:border-gray-800">

                {/* Bloco do Ano */}
                <div className="border-l pl-4 border-gray-200 dark:border-gray-700"> {/* Divisor visual */}
                    <h3 className="text-xl font-extrabold mb-1 uppercase tracking-wider text-gray-500 dark:text-gray-400">Ano</h3>
                    <p className="text-lg text-gray-900 dark:text-gray-50">{project.year}</p>
                </div>

                {/* Bloco de Tecnologias */}
                <div className="border-l pl-4 border-gray-200 dark:border-gray-700"> {/* Divisor visual */}
                    <h3 className="text-xl font-extrabold mb-1 uppercase tracking-wider text-gray-500 dark:text-gray-400">Tecnologias</h3>
                    <p className="text-lg text-gray-900 dark:text-gray-50">{project.tech_stack.join(', ')}</p>
                </div>

                {/* Bloco do Link */}
                <div className="border-l pl-4 border-gray-200 dark:border-gray-700"> {/* Divisor visual */}
                    <h3 className="text-xl font-extrabold mb-1 uppercase tracking-wider text-gray-500 dark:text-gray-400">Link</h3>
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg text-blue-600 dark:text-blue-400 hover:underline font-bold transition-colors"
                    >
                        Ver Jogo/Repositório →
                    </a>
                </div>

            </div>

            {/* Descrição Completa / Post-Mortem */}
            <div className="prose dark:prose-invert max-w-none">
                <h2 className="text-3xl font-bold mb-4">Detalhes e Aprendizados</h2>
                <p>{project.full_description}</p>

                {/* Aqui você adicionaria mais conteúdo (Gifs, Screenshots, Secções de código, etc.) */}

                <h3 className="text-2xl font-bold mt-8">O Desafio</h3>
                <p>
                    O maior desafio foi balancear a dificuldade e garantir que a IA dos inimigos mantivesse a jogabilidade engajante ao longo do tempo.
                </p>
            </div>

        </main>
    );
}
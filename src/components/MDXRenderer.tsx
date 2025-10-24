import { getProjectData, getAllProjectsMeta } from '@/lib/mdx';
import { MDXContent } from '@/components/MDXContent';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/Container';
import { notFound } from 'next/navigation';

interface ProjectPageProps {
    params: Promise<{
        slug: string;
    }>;
}

// 1. Geração de Parâmetros Estáticos
export async function generateStaticParams() {
    const projects = getAllProjectsMeta();
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

// 2. Componente Principal
export default async function ProjectPage({ params }: ProjectPageProps) {
    const { slug } = await params;
    
    const projectData = getProjectData(slug);

    if (!projectData) {
        notFound();
    }

    return (
        <Container className="pt-20 pb-32">
            {/* Botão Voltar */}
            <Link 
                href="/" 
                className="flex items-center text-lg font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors mb-8"
            >
                <svg 
                    className="w-5 h-5 mr-2" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                >
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M10 19l-7-7m0 0l7-7m-7 7h18" 
                    />
                </svg>
                ← Voltar para a Home
            </Link>

            {/* Título e Descrição */}
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
                {projectData.title}
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
                {projectData.description}
            </p>

            {/* Imagem de Capa */}
            <div className="mb-12">
                <Image
                    src={projectData.image}
                    alt={`Capa do projeto ${projectData.title}`}
                    width={900}
                    height={500}
                    className="w-full h-auto object-cover rounded-xl shadow-2xl"
                />
            </div>

            {/* Detalhes Técnicos */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 border-b pb-8 border-gray-100 dark:border-gray-800">
                {/* Ano */}
                <div>
                    <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase mb-2">
                        Ano
                    </h3>
                    <p className="text-lg font-medium">{projectData.year}</p>
                </div>

                {/* Tecnologias */}
                <div>
                    <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase mb-2">
                        Tecnologias
                    </h3>
                    <p className="text-lg font-medium">
                        {projectData.tech_stack.join(', ')}
                    </p>
                </div>

                {/* Link */}
                <div>
                    <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase mb-2">
                        Link
                    </h3>
                    {projectData.link ? (
                        <a
                            href={projectData.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-lg font-medium text-blue-600 dark:text-blue-400 hover:underline"
                        >
                            Ver Projeto →
                        </a>
                    ) : (
                        <p className="text-lg font-medium text-gray-400">
                            Indisponível
                        </p>
                    )}
                </div>
            </div>

            {/* ⭐ Renderização do Conteúdo MDX */}
            <MDXContent content={projectData.content} />
        </Container>
    );
}
import { getProjectData, getAllProjectsMeta } from '@/lib/mdx';
import { MDXRenderer } from '@/components/MDXRenderer'; // NOVO: O Componente de Renderização
import { serialize } from 'next-mdx-remote/serialize'; // Import para compilar o MDX
import Image from 'next/image';
import Link from 'next/link';
// O restante dos imports (Container, Link, Image)

interface ProjectPageProps {
    params: {
        slug: string;
    };
}

// 1. Geração de Parâmetros Estáticos (Continua igual)
export async function generateStaticParams() {
    const projects = getAllProjectsMeta(); // Obtém todos os metadados
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

// 2. Componente Principal (Agora Assíncrono para buscar e compilar)
export default async function ProjectPage({ params }: ProjectPageProps) {
    const projectData = getProjectData(params.slug);

    if (!projectData) {
        // Retorna 404
        return (
            <main className="py-24">
                <h1 className="text-4xl font-bold">404 - Projeto não encontrado</h1>
                <Link href="/" className="mt-6 inline-block text-blue-600 hover:underline">
                    ← Voltar para a Home
                </Link>
            </main>
        );
    }

    // Compila o conteúdo MDX para que possa ser renderizado pelo MDXRemote
    const mdxSource = await serialize(projectData.content, {
        parseFrontmatter: false, // O frontmatter já foi extraído pelo gray-matter
    });

    return (
        <main className="pt-20 pb-32">

            {/* Botão Voltar (Mantido) */}
            <Link href="/" className="flex items-center text-lg font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors mb-8">
                {/* ... SVG ... */}
                Voltar para os Trabalhos
            </Link>

            {/* Título e Capa do Projeto (Usando os Metadados) */}
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
                {projectData.title}
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
                {projectData.description}
            </p>

            {/* Capa/Banner */}
            <div className="mb-12">
                <Image
                    src={projectData.image}
                    alt={`Capa do projeto ${projectData.title}`}
                    width={900}
                    height={500}
                    className="w-full h-auto object-cover rounded-xl shadow-2xl"
                />
            </div>

            {/* Detalhes Técnicos e Link (Mantido) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 border-b pb-8 border-gray-100 dark:border-gray-800">
                {/* ... código dos blocos de Ano, Tecnologias, Link (use projectData.tech_stack.join(', ') etc) ... */}
            </div>

            {/* ⭐️ Renderização do Conteúdo MDX ⭐️ */}
            <MDXRenderer source={mdxSource} />

        </main>
    );
}

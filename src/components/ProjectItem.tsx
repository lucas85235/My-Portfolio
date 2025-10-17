import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/data/projects'; // Importe a interface do projeto

interface ProjectItemProps {
    project: Project;
}

export const ProjectItem: React.FC<ProjectItemProps> = ({ project }) => {
    const internalLink = `/projects/${project.slug}`;
    return (
        <Link
            href={internalLink}
            className="block p-4 sm:p-6 rounded-xl transition-all duration-300 ease-in-out 
                hover:bg-gray-50 dark:hover:bg-gray-800/50 group 
                border border-transparent hover:border-gray-200 dark:hover:border-gray-700 
                transform hover:scale-[1.01] hover:shadow-lg"
        >
            <div className="flex flex-col-reverse md:flex-row gap-6">

                {/* Conteúdo de Texto */}
                <div className="flex-grow">

                    <div className="flex justify-between items-start">
                        {/* Título e Ano */}
                        <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-gray-50 group-hover:underline">
                            {project.title}
                        </h3>
                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400 ml-4 pt-1 hidden md:block">
                            {project.year}
                        </span>
                    </div>

                    {/* Descrição */}
                    <p className="mt-2 text-base text-gray-600 dark:text-gray-400">
                        {project.description}
                    </p>

                    {/* Tags */}
                    <div className="mt-3 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                            <span
                                key={tag}
                                className="text-xs font-medium bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Imagem de Prévia */}
                <div className="w-full md:w-56 flex-shrink-0">
                    <Image
                        src={project.image}
                        alt={`Prévia do projeto ${project.title}`}
                        width={224} // 56 * 4 (usando a largura definida no w-56 do Tailwind)
                        height={150} // Ajuste a altura para um aspecto razoável (3:2)
                        className="w-full h-auto object-cover rounded-md shadow-lg"
                    />
                </div>

            </div>
        </Link>
    );
};

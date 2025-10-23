import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ProjectMetadata } from '@/lib/mdx';

interface ProjectItemProps {
  project: ProjectMetadata;
}

export const ProjectItem: React.FC<ProjectItemProps> = ({ project }) => {
    const internalLink = `/projects/${project.slug}`;
    
    return (
        <Link
            href={internalLink}
            className="group block rounded-xl overflow-hidden bg-white dark:bg-gray-900 
                border border-gray-200 dark:border-gray-800
                transition-all duration-300 ease-in-out 
                hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1
                hover:border-gray-300 dark:hover:border-gray-700"
        >
            {/* Imagem de Preview */}
            <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-100 dark:bg-gray-800">
                <Image
                    src={project.image}
                    alt={`Prévia do projeto ${project.title}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                {/* Ano no canto superior direito */}
                <div className="absolute top-3 right-3 bg-black/70 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {project.year}
                </div>
            </div>

            {/* Conteúdo */}
            <div className="p-5 flex flex-col">
                {/* Título */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50 
                    group-hover:text-blue-600 dark:group-hover:text-blue-400 
                    transition-colors line-clamp-2 mb-2">
                    {project.title}
                </h3>

                {/* Descrição */}
                <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3 mb-4">
                    {project.description}
                </p>

                {/* Tags - SEMPRE RENDERIZA */}
                <div className="flex flex-wrap gap-2 mb-3 min-h-[28px]">
                    {project.tags.slice(0, 3).map((tag, index) => (
                        <span
                            key={`${tag}-${index}`}
                            className="text-xs font-medium bg-gray-100 dark:bg-gray-800 
                                text-gray-700 dark:text-gray-300 px-2.5 py-1 rounded-full"
                        >
                            {tag}
                        </span>
                    ))}
                    {project.tags.length > 3 && (
                        <span className="text-xs font-medium text-gray-500 dark:text-gray-400 px-2.5 py-1">
                            +{project.tags.length - 3}
                        </span>
                    )}
                </div>

                {/* Tech Stack */}
                {project.tech_stack && project.tech_stack.length > 0 && (
                    <div className="pt-3 border-t border-gray-100 dark:border-gray-800">
                        <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-1">
                            <span className="font-semibold">Tech:</span> {project.tech_stack.join(', ')}
                        </p>
                    </div>
                )}
            </div>
        </Link>
    );
};
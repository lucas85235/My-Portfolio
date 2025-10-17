// src/components/ProjectItem.tsx

import React from 'react';
import { Project } from '@/data/projects'; // Importe a interface do projeto

interface ProjectItemProps {
    project: Project;
}

export const ProjectItem: React.FC<ProjectItemProps> = ({ project }) => {
    return (
        <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 sm:p-6 rounded-lg transition-colors duration-300 hover:bg-gray-50 dark:hover:bg-gray-800/50 group"
        >
            <div className="flex justify-between items-start">
                {/* Título e Ano */}
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-gray-50 group-hover:underline">
                    {project.title}
                </h3>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400 ml-4 pt-1">
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
        </a>
    );
};
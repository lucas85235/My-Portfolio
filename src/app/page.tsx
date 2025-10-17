// src/app/page.tsx (ou .jsx)

import { HeaderBio } from '@/components/HeaderBio';
import { ProjectItem } from '@/components/ProjectItem'; // Importe o novo componente
import { MOCK_PROJECTS } from '@/data/projects'; // Importe os dados

export default function Home() {
  return (
    <main>
      {/* 1. Header e Bio */}
      <HeaderBio />

      {/* 2. Seção de Projetos */}
      <section className="pt-4 pb-16">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-50">
          Trabalhos
        </h2>

        <div className="space-y-6">
          {MOCK_PROJECTS.map((project) => (
            // Renderiza um ProjectItem para cada projeto na lista
            <ProjectItem key={project.id} project={project} />
          ))}
        </div>

      </section>

      {/* 3. Footer (Próxima etapa) */}
    </main>
  );
}
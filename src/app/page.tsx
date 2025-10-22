// src/app/page.tsx

// Remova: import { MOCK_PROJECTS } from '@/data/projects'; 

import { HeaderBio } from '@/components/HeaderBio';
import { ProjectItem } from '@/components/ProjectItem';
import { AboutSection } from '@/components/AboutSection';
import { Footer } from '@/components/Footer';
import { Container } from '@/components/Container';

// Importe a função de busca de metadados
import { getAllProjectsMeta } from '@/lib/mdx';

// O componente Home deve ser assíncrono para buscar os dados
export default async function Home() {

  // Busca dos dados no servidor (tempo de build ou server-side)
  const projects = getAllProjectsMeta();

  return (
    <>
      {/* 1. Header e Bio */}
      <div id="home-top">
        <HeaderBio/>
      </div>

      {/* 3. Seção Sobre Mim (ABOUT) */}
      <Container id="about">
        <AboutSection/>
      </Container>

      {/* 2. Seção de Projetos (WORKS) */}
      <Container id="works">
        <h2 className="text-3xl font-bold mb-3 text-gray-900 dark:text-gray-50">
          Professional Projects
        </h2>
        <h3 className=" mb-6 text-gray-900 dark:text-gray-50">
          Click on the tiles to learn more about each project.
        </h3>

        {/* className={`mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 ${className}` */}
        <div className="space-y-6">
          {/* Mapeamento dos projetos obtidos do MDX */}
          {projects.map((project) => (
            // O ProjectItem agora recebe os metadados diretamente
            // Nota: Se houver erro de tipagem, você pode precisar ajustar a interface do ProjectItem
            <ProjectItem key={project.slug} project={project} />
          ))}
        </div>
      </Container>

      {/* 4. Footer (CONTACT) */}
      <Container id="contact">
        <Footer />
      </Container>

    </>
  );
}
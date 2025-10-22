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
        <HeaderBio />
      </div>

      {/* 2. Seção de Projetos (WORKS) */}
      <Container id="works" className="pt-24 pb-16">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-50">
          Trabalhos
        </h2>

        <div className="space-y-6">
          {/* Mapeamento dos projetos obtidos do MDX */}
          {projects.map((project) => (
            // O ProjectItem agora recebe os metadados diretamente
            // Nota: Se houver erro de tipagem, você pode precisar ajustar a interface do ProjectItem
            <ProjectItem key={project.slug} project={project} />
          ))}
        </div>
      </Container>

      {/* 3. Seção Sobre Mim (ABOUT) */}
      <Container id="about" className="pt-16 pb-16 border-t border-gray-100 dark:border-gray-800">
        <AboutSection />
      </Container>

      {/* 4. Footer (CONTACT) */}
      <Container id="contact" className="pt-16 py-0">
        <Footer />
      </Container>

    </>
  );
}
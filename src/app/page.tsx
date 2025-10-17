import { HeaderBio } from '@/components/HeaderBio';
import { ProjectItem } from '@/components/ProjectItem';
import { AboutSection } from '@/components/AboutSection'; // <-- Novo Import
import { Footer } from '@/components/Footer'; // Importe o novo componente
import { Container } from '@/components/Container';
import { MOCK_PROJECTS } from '@/data/projects';

export default function Home() {
  return (
    <main>
      {/* 1. Header e Bio */}
      <div id="home-top">
        <HeaderBio />
      </div>

      {/* 2. Seção de Projetos */}
      <Container id="works" className="pt-10 pb-16">
        {/* className="py-12 md:py-16 border-t border-gray-100 dark:border-gray-800 mt-8" */}
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-50">
          Trabalhos
        </h2>
        <div className="space-y-6">
          {MOCK_PROJECTS.map((project) => (
            <ProjectItem key={project.id} project={project} />
          ))}
        </div>
      </Container>

      {/* 3. Seção Sobre Mim (ABOUT) */}
      <Container id="about" className="py-0">
        <AboutSection />
      </Container>

      {/* 4. Footer (CONTACT) - USANDO O CONTAINER para que o footer também fique centralizado */}
      <Container id="contact" className="py-0">
        <Footer />
      </Container>

    </main>
  );
}
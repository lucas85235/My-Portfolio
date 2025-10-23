import { HeaderBio } from '@/components/HeaderBio';
import { ProjectItem } from '@/components/ProjectItem';
import { AboutSection } from '@/components/AboutSection';
import { Footer } from '@/components/Footer';
import { Container } from '@/components/Container';

import { getAllProjectsMeta } from '@/lib/mdx';

export default async function Home() {
  // getAllProjectsMeta is async in the recommended mdx.ts — await it
  const projects = await getAllProjectsMeta();

  return (
    <>
      <div id="home-top">
        <HeaderBio />
      </div>

      <Container id="about">
        <AboutSection />
      </Container>

      {/* separation line */}
      <div className="mx-auto max-w-5xl px-8">
        <hr className="my-12 border-t border-gray-200 dark:border-gray-800" aria-hidden="true" />
      </div>

      <Container id="works" className="max-w-5xl pb-8">  
        <h2 className="text-3xl font-bold mb-3 text-gray-900 dark:text-gray-50">
          Professional Projects
        </h2>
        <h3 className="mb-12 text-gray-900 dark:text-gray-50">
          Click on the tiles to learn more about each project.
        </h3>
        {/* Grid Responsivo */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project) => (
            <ProjectItem key={project.slug} project={project} />
          ))}
        </div>
      </Container>

      <Container id="contact">
        <Footer />
      </Container>
    </>
  );
}

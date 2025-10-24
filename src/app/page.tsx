import { HeaderBio } from '@/components/HeaderBio';
import { ProjectItem } from '@/components/ProjectItem';
import { AboutSection } from '@/components/AboutSection';
import { Footer } from '@/components/Footer';
import { Container } from '@/components/Container';
import { getAllProjectsMeta } from '@/lib/mdx';

export default async function Home() {
  const allProjects = await getAllProjectsMeta();

  const featuredProjects = allProjects
    .filter(project => project.featured)
    .sort((a, b) => (b.year as number) - (a.year as number));

  const regularProjects = allProjects
    .filter(project => !project.featured)
    .sort((a, b) => (b.year as number) - (a.year as number));

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

      {featuredProjects.length > 0 && (
        <Container id="featured-works" className="max-w-5xl pb-16">
          <h2 className="text-3xl font-bold mb-3 text-gray-900 dark:text-gray-50">
            Featured Projects
          </h2>
          <h3 className="mb-12 text-gray-700 dark:text-gray-400">
            My most relevant work, highlighting key technical skills.
          </h3>
          {/* Grid para Projetos em Destaque (pode ser maior/diferente) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <ProjectItem
                key={project.slug}
                project={project}
              />
            ))}
          </div>
        </Container>
      )}


      <Container id="works" className="max-w-5xl pb-8">
        <h2 className="text-3xl font-bold mb-3 text-gray-900 dark:text-gray-50">
          All Projects
        </h2>
        <h3 className="mb-12 text-gray-700 dark:text-gray-400">
          Click on the tiles to learn more about each project.
        </h3>
        {/* Grid Responsivo */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularProjects.map((project) => (
            <ProjectItem
              key={project.slug}
              project={project}
            />
          ))}
        </div>
      </Container>

      <Container id="contact">
        <Footer />
      </Container>
    </>
  );
}

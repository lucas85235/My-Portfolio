import fs from 'fs';
import path from 'path';
import matter from 'gray-matter'; // Para ler o frontmatter

const projectsDirectory = path.join(process.cwd(), 'src', 'content', 'projects');

export interface ProjectMetadata {
  title: string;
  description: string;
  tags: string[];
  link: string;
  year: number;
  image: string;
  slug: string;
  tech_stack: string[];
  // O slug será o nome do arquivo (sem a extensão)
}

export interface ProjectData extends ProjectMetadata {
  content: string; // O corpo MDX/Markdown
}

// Função para obter todos os metadados dos projetos
export function getAllProjectsMeta(): ProjectMetadata[] {
  const fileNames = fs.readdirSync(projectsDirectory);

  const allProjectsMeta = fileNames.map((fileName) => {
    const fullPath = path.join(projectsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Usa gray-matter para separar o frontmatter do conteúdo
    const { data } = matter(fileContents);

    // Retorna apenas os metadados (certifique-se de que correspondem à sua interface)
    return data as ProjectMetadata;
  });

  // Opcional: ordenar por ano
  return allProjectsMeta.sort((a, b) => b.year - a.year);
}

// Função para obter o conteúdo completo de um projeto
export function getProjectData(slug: string): ProjectData | null {
  const fullPath = path.join(projectsDirectory, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    ...(data as ProjectMetadata),
    content, // Retorna também o corpo do markdown
  };
}
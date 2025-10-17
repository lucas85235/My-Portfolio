// src/data/projects.ts

export interface Project {
    id: number;
    title: string;
    description: string;
    tags: string[]; // ex: Unity, C#, Shader, 2D
    link: string; // URL do itch.io, GitHub, etc.
    year: number;
}

// Dados Mock
export const MOCK_PROJECTS: Project[] = [
    {
        id: 1,
        title: 'Starship Defender',
        description: 'Um jogo de tiro espacial 2D rápido e baseado em ondas. Desenvolvido em Unity com foco em otimização de performance.',
        tags: ['Unity', 'C#', '2D', 'Gameplay'],
        link: 'https://seuitchio.itch.io/starship',
        year: 2024,
    },
    {
        id: 2,
        title: 'Echoes of the Void',
        description: 'Um protótipo de RPG de ação em 3D, explorando mecânicas de combate baseadas em tempo e parry.',
        tags: ['Unreal Engine 5', 'C++', '3D', 'AI'],
        link: 'https://seugithub.com/echoes',
        year: 2023,
    },
    {
        id: 3,
        title: 'Pixel Painter',
        description: 'Uma ferramenta web para criação de sprites em pixel art. Foco em experiência de usuário e exportação de spritesheets.',
        tags: ['Next.js', 'TypeScript', 'Tooling', 'React'],
        link: 'https://seusite.com/pixelpainter',
        year: 2022,
    },
];
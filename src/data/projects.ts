export interface Project {
    id: number;
    title: string;
    description: string;
    tags: string[];
    link: string;
    year: number;
    image: string;
    slug: string; // <-- Novo campo para a URL
    // Adicione campos de detalhes para uso na página interna:
    full_description: string;
    tech_stack: string[]; // Lista detalhada de tecnologias
}

// Dados Mock Atualizados (Adapte os caminhos com suas imagens)
export const MOCK_PROJECTS: Project[] = [
    {
        id: 1,
        title: 'Starship Defender',
        description: 'Um jogo de tiro espacial 2D rápido e baseado em ondas...',
        tags: ['Unity', 'C#', '2D', 'Gameplay'],
        link: 'https://seuitchio.itch.io/starship',
        year: 2024,
        image: '/images/Arcade.png',
        slug: 'starship-defender', // <-- SLUG
        full_description: "Este projeto foi um exercício de otimização de script e gerenciamento de memória em Unity. O foco principal foi o sistema de geração procedural de inimigos e a curva de dificuldade dinâmica, implementada com o padrão de projeto Observer.",
        tech_stack: ['Unity 2023 LTS', 'C#', 'DOTS', 'Shader Graph', 'Git'],
    },
    {
        id: 2,
        title: 'Echoes of the Void',
        description: 'Um protótipo de RPG de ação em 3D, explorando mecânicas de combate baseadas em tempo e parry.',
        tags: ['Unreal Engine 5', 'C++', '3D', 'AI'],
        link: 'https://seugithub.com/echoes',
        year: 2023,
        image: '/images/Arcade.png', // Exemplo: Imagem em public/images/echoes.jpg
        slug: 'echoes-avoid', // <-- SLUG
        full_description: "Este projeto foi um exercício de otimização de script e gerenciamento de memória em Unity. O foco principal foi o sistema de geração procedural de inimigos e a curva de dificuldade dinâmica, implementada com o padrão de projeto Observer.",
        tech_stack: ['Unity 2023 LTS', 'C#', 'DOTS', 'Shader Graph', 'Git'],
    },
    {
        id: 3,
        title: 'Pixel Painter',
        description: 'Uma ferramenta web para criação de sprites em pixel art. Foco em experiência de usuário e exportação de spritesheets.',
        tags: ['Next.js', 'TypeScript', 'Tooling', 'React'],
        link: 'https://seusite.com/pixelpainter',
        year: 2022,
        image: '/images/Arcade.png', // Exemplo: Imagem em public/images/pixel_painter.png
        slug: 'pixel-painter', // <-- SLUG
        full_description: "Este projeto foi um exercício de otimização de script e gerenciamento de memória em Unity. O foco principal foi o sistema de geração procedural de inimigos e a curva de dificuldade dinâmica, implementada com o padrão de projeto Observer.",
        tech_stack: ['Unity 2023 LTS', 'C#', 'DOTS', 'Shader Graph', 'Git'],
    },
];
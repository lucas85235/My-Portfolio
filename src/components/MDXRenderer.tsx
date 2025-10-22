// src/components/MDXRenderer.tsx

'use client';

import { MDXRemote } from 'next-mdx-remote';
import Image from 'next/image';

interface MDXRendererProps {
    source: any; // O resultado compilado da string MDX
}

// Mapeamento de componentes customizados que podem ser usados dentro do MDX
const components = {
    // Exemplo: Substitui a tag <img> nativa por <Image> do Next.js
    img: (props: any) => (
        <Image
            className="rounded-lg shadow-xl my-8"
            alt={props.alt || ''}
            width={900}
            height={500}
            {...props}
        />
    ),
    // Adicione outros componentes customizados aqui (Embeds de jogos, Galerias, etc.)
};

export const MDXRenderer: React.FC<MDXRendererProps> = ({ source }) => {
    // O MDXRemote renderiza o conteúdo pré-compilado
    return (
        <div className="prose dark:prose-invert max-w-none">
            <MDXRemote {...source} components={components} />
        </div>
    );
};
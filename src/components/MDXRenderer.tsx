'use client';

import { MDXRemote } from 'next-mdx-remote';
import Image from 'next/image';
import React from 'react';

interface MDXRendererProps {
    source: any;
}

// -------------------------------------------------------------------
// ⭐️ NOVO COMPONENTE: CustomLink
// -------------------------------------------------------------------
const CustomLink: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement>> = (props) => {
    const { href, children } = props;

    // Verifica se o link é externo (começa com http/https)
    const isExternal = href && (href.startsWith('http://') || href.startsWith('https://'));

    if (isExternal) {
        // Se for externo, adiciona target="_blank" e rel de segurança
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
                {children}
            </a>
        );
    }

    // Se for interno, usa a tag <a> padrão ou <Link> do Next.js se preferir
    return (
        <a
            href={href}
            className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
        >
            {children}
        </a>
    );
};
// -------------------------------------------------------------------


// Mapeamento de componentes customizados que podem ser usados dentro do MDX
const components = {
    // Substitui a tag <img> nativa por <Image> do Next.js
    img: (props: any) => (
        <Image
            className="rounded-lg shadow-xl my-8"
            alt={props.alt || ''}
            width={900}
            height={500}
            {...props}
        />
    ),
    // ⭐️ SUBSTITUI A TAG <a> PADRÃO PELO SEU CUSTOM LINK
    a: CustomLink,
};

export const MDXRenderer: React.FC<MDXRendererProps> = ({ source }) => {
    return (
        <div className="mdx-content max-w-none">
            <MDXRemote {...source} components={components} />
        </div>
    );
};

'use client';

import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import VideoPlayer from './VideoPlayer';
import remarkGfm from 'remark-gfm';

interface MDXContentProps {
    content: string;
}

// -------------------------------------------------------------------
// ⭐ COMPONENTE: CustomLink
// -------------------------------------------------------------------
const CustomLink: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement>> = (props) => {
    const { href, children } = props;

    const isExternal = href && (href.startsWith('http://') || href.startsWith('https://'));

    if (isExternal) {
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
// ⭐ COMPONENTE: CustomImage
// -------------------------------------------------------------------
interface CustomImageProps {
    src?: string;
    alt?: string;
    width?: number;
    height?: number;
}

const CustomImage: React.FC<CustomImageProps> = (props) => {
    const { src, alt = '', width = 900, height = 500 } = props;
    
    if (!src) return null;

    return (
        <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="rounded-lg shadow-xl my-8"
        />
    );
};

// -------------------------------------------------------------------
// Mapeamento de componentes customizados
// -------------------------------------------------------------------
const components = {
    img: CustomImage,
    a: CustomLink,
    VideoPlayer,
};

export const MDXContent: React.FC<MDXContentProps> = ({ content }) => {
    const [mdxSource, setMdxSource] = useState<MDXRemoteSerializeResult | null>(null);

    useEffect(() => {
        const compileMDX = async () => {
            const compiled = await serialize(content, {
                parseFrontmatter: false,
                mdxOptions: {
                    remarkPlugins: [remarkGfm],
                },
            });
            setMdxSource(compiled);
        };

        compileMDX();
    }, [content]);

    if (!mdxSource) {
        return (
            <div className="flex items-center justify-center py-12">
                <div className="animate-pulse text-gray-500">Carregando conteúdo...</div>
            </div>
        );
    }

    return (
        <div className="mdx-content max-w-none prose prose-lg dark:prose-invert">
            <MDXRemote {...mdxSource} components={components} />
        </div>
    );
};

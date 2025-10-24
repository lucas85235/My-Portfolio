// next.config.js

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    // Opções para o processador MDX
    remarkPlugins: [
      require('remark-gfm'), // Habilita tabelas, etc.
    ],
    rehypePlugins: [],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configurações padrão do Next.js
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'], // Permite usar .md e .mdx

  // ... outras configurações

  // Habilite o Image component para a pasta 'images' na public
  images: {
    remotePatterns: [
        // Adicione domínios externos aqui, se for usar
    ],
  },
};

module.exports = withMDX(nextConfig);
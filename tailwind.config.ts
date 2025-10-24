import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
    darkMode: 'class',
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans], // Mantém Inter como primária
                // Se quiser uma fonte serif para títulos:
                // serif: ['Georgia', ...defaultTheme.fontFamily.serif],
            },
            // Adicione cores customizadas se quiser, ex: cor primária de link
            colors: {
                primary: '#0070f3', // Azul do Vercel/Next.js
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'), // ⭐️ Adicione esta linha
        // ... outros plugins
    ],
};
export default config;
// tailwind.config.ts (ou .js)

import type { Config } from 'tailwindcss';

const config: Config = {
    darkMode: 'class', // <--- Garanta que está como 'class'
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    // ... outras configurações
};
export default config;
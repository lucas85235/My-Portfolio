import React from 'react';

export const Footer: React.FC = () => {
    // Defina seus links aqui para fácil manutenção
    const socialLinks = [
        { name: 'GitHub', href: 'https://github.com/seu-perfil' },
        { name: 'LinkedIn', href: 'https://linkedin.com/in/seu-perfil' },
        { name: 'Email', href: 'mailto:seu.email@exemplo.com' },
        // Adicione outros links como Itch.io, Twitter/X, etc.
        // { name: 'Itch.io', href: 'https://seu-perfil.itch.io' },
    ];

    return (
        <footer className="py-12 md:py-16 border-t border-gray-100 dark:border-gray-800 mt-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">

                {/* Seção de Links */}
                <nav className="flex flex-wrap gap-x-6 gap-y-2 mb-4 sm:mb-0">
                    {socialLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-lg font-medium"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                {/* Copyright / Info */}
                <p className="text-sm text-gray-400 dark:text-gray-600">
                    © {new Date().getFullYear()} Seu Nome. Feito com Next.js.
                </p>
            </div>
        </footer>
    );
};
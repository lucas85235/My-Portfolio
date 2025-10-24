'use client';

import React from 'react';
import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';
import { usePathname } from 'next/navigation';

const navLinks = [
    { name: 'About', href: '#about', isAnchor: true },
    { name: 'Works', href: '#works', isAnchor: true }, // Mudei para 'Works'
    { name: 'Resume', href: '/resume', isAnchor: false },
    { name: 'Contact', href: '#contact', isAnchor: true },
];

export const Navbar: React.FC = () => {
    const pathname = usePathname();
    const isHomePage = pathname === '/';

    return (
        <nav className="fixed top-0 left-0 right-0 z-10 bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm shadow-md dark:shadow-xl">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">

                    {/* Logo / Nome */}
                    <Link href="/" className="flex-shrink-0 text-xl font-extrabold tracking-tight text-gray-900 dark:text-gray-50 hover:opacity-80 transition-opacity">
                        Lucas Lima
                    </Link>

                    {/* Links de Navegação */}
                    <div className="hidden md:flex items-center space-x-6">
                        {navLinks.map((link) => {
                            // Se não estiver na Home, redireciona para a Home com a âncora
                            const href = isHomePage ? link.href : (link.isAnchor ? `/${link.href}` : link.href);

                            return (
                                <Link
                                    key={link.name}
                                    href={href}
                                    className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                                >
                                    {link.name}
                                </Link>
                            );
                        })}

                        {/* Link Social/Follow (mantendo como estava) */}
                        <a
                            href="https://www.linkedin.com/in/lucas85235/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-500 transition-colors border-l pl-6 border-gray-200 dark:border-gray-700"
                        >
                            My Linkefin
                        </a>

                        <ThemeToggle />
                    </div>
                </div>
            </div>
        </nav>
    );
};
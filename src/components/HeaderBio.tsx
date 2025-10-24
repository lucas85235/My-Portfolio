// src/components/HeaderBio.tsx

'use client';

import React, { useState } from 'react';

const VIDEO_SRC = '/videos/gamedev-trailer.mp4';
const POSTER_SRC = '/images/gamedev-poster.jpg';

export const HeaderBio: React.FC = () => {
    // Renomeado para isExpanded, pois controlará a altura da div (h-screen)
    const [isExpanded, setIsExpanded] = useState(false);

    // Função que simplesmente inverte o estado de expansão
    const handleExpansionToggle = () => {
        setIsExpanded(prev => !prev);
    };

    return (
        // O height agora usa isExpanded: 'h-screen' ou o height normal
        // Adicionamos 'sticky' e 'top-16' para que o vídeo não suma ao rolar quando expandido
        <div
            className={`relative w-full overflow-hidden transition-all duration-700 ease-in-out 
                ${isExpanded ? 'h-screen' : 'h-[600px] md:h-[700px]'}
                `}
            style={{
                // Adiciona um padding top quando expandido para evitar que o conteúdo 
                // fique debaixo da Navbar fixa (h-16)
                paddingTop: isExpanded ? '4rem' : '0'
            }}
        >

            {/* O Video: Ocupa 100% da área */}
            <video
                className="absolute inset-0 w-full h-full object-cover"
                src={VIDEO_SRC}
                poster={POSTER_SRC}
                autoPlay
                loop
                muted
                playsInline
            />

            {/* Camada de Overlay e Conteúdo Centralizado */}
            <div className={`absolute inset-0 bg-black flex items-center justify-center transition-opacity duration-700
                        ${isExpanded ? 'opacity-50' : 'opacity-30'}`}>

                {/* Conteúdo: Seu nome/título/CTA, sempre por cima */}
                <div className="text-center text-white p-8 z-20">
                    <h1 className="text-4xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 drop-shadow-xl">
                        Lucas Lima
                    </h1>
                    <p className="text-xl sm:text-2xl text-gray-200 max-w-xl drop-shadow-md">
                        Game Developer & Software Engineer
                    </p>
                    {/* Você pode adicionar um CTA aqui se quiser */}
                </div>
            </div>

            {/* Botão de Expansão/Minimização */}
            <button
                onClick={handleExpansionToggle}
                aria-label={isExpanded ? "Minimizar Vídeo" : "Expandir Vídeo"}
                className="absolute bottom-4 right-4 z-30 p-3 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white transition-colors"
            >
                {/* Ícone de Expansão (Mantenha os ícones que fazem mais sentido para sua UI) */}
                {isExpanded ? (
                    // Ícone de Minimização (Sair da Viewport Total)
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z" />
                    </svg>
                ) : (
                    // Ícone de Expansão (Ir para Viewport Total)
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
                    </svg>
                )}
            </button>

        </div>
    );
};
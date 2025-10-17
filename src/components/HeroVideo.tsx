import React from 'react';

// O caminho do vídeo é relativo à pasta /public
const VIDEO_SRC = '/videos/gamedev-trailer.mp4';
// Use uma imagem de fallback para navegadores que não suportam vídeo
const POSTER_SRC = '/images/gamedev-poster.jpg';

export const HeroVideo: React.FC = () => {
    return (
        <div className="relative w-full h-[600px] md:h-[700px] overflow-hidden rounded-xl shadow-2xl">

            {/* O Video: Ocupa 100% da área, centralizado, sem som, loop */}
            <video
                className="absolute inset-0 w-full h-full object-cover"
                src={VIDEO_SRC}
                poster={POSTER_SRC}
                autoPlay
                loop
                muted
                playsInline // Importante para reprodução em dispositivos móveis
            />

            {/* Camada de Overlay Escura (para garantir que o texto seja legível) */}
            <div className="absolute inset-0 bg-black opacity-40"></div>

        </div>
    );
};
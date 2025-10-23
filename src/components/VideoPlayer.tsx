import React from 'react';

interface VideoPlayerProps {
    /** A URL do vídeo do YouTube ou o caminho para um arquivo local (ex: /videos/trailer.mp4) */
    src: string;
    /** Título/Descrição do vídeo para acessibilidade */
    title: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, title }) => {
    const isYouTube = src.includes('youtube.com') || src.includes('youtu.be');

    if (isYouTube) {
        // Lógica para extrair o ID do YouTube e usar embed-nocookie
        const getYouTubeId = (url: string) => {
            const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|\/(?:watch\?.*v=|embed\/|v\/))|youtu\.be\/)([^"&?\/\s]{11})/;
            const match = url.match(regex);
            return match ? match[1] : null;
        };

        const videoId = getYouTubeId(src);

        if (!videoId) {
            console.error("URL do YouTube inválida:", src);
            return <p className="text-red-500">Erro: URL do YouTube inválida.</p>;
        }

        const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}`;

        return (
            <div className="my-8 rounded-lg overflow-hidden shadow-2xl">
                <div
                    className="relative"
                    style={{ paddingBottom: '56.25%', height: 0 }} // Proporção 16:9
                >
                    <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src={embedUrl}
                        title={title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        frameBorder="0"
                    />
                </div>
            </div>
        );
    } else {
        // Lógica para vídeos locais (.mp4, .webm)
        return (
            <div className="my-8">
                <video
                    controls
                    className="w-full h-auto rounded-lg shadow-xl"
                    title={title}
                >
                    <source src={src} type={`video/${src.split('.').pop()}`} />
                    Seu navegador não suporta a tag de vídeo.
                </video>
            </div>
        );
    }
};

export default VideoPlayer;
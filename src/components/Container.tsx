import React, { ReactNode } from 'react';

interface ContainerProps {
    children: ReactNode;
    className?: string;
    id?: string;
}

export const Container: React.FC<ContainerProps> = ({ children, className = '', id }) => {
    // Este é o container que limita a largura do seu conteúdo
    return (
        <div id={id} className={`mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 ${className}`}>
            {children}
        </div>
    );
};
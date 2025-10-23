import React from 'react';

export const AboutSection: React.FC = () => {
    return (
        <section id="about" className="pt-16 border-t border-gray-100 dark:border-gray-800">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-50">
                About Me
            </h2>

            <div className="text-lg space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                    Since I was young, I've always wanted to transform my free time into stories and challenges and I found the perfect way to do that in games. I'm a software engineer and game developer focusing on Unity Engine and C#. Throughout my career, I've worked on rapid prototypes, game jams, and projects supported by public notices, building everything from gameplay systems to publishing pipelines.
                </p>
                <p>
                    What motivates me isn't just "getting the game running," but making it communicate a feeling: surprise, tension, lightness, or simplicity depending on the experience's needs. I enjoy working on the technical aspects (optimization, debugging, pipeline building) because I believe that delivery techniques are what allow a design vision to reach the player cleanly. I work well in small timeframes and also on solo projects. I value direct communication, rapid prototyping, and constant feedback.
                </p>
                <p>
                    If you have an idea that needs to take shape whether a short experiment or a larger project I want to participate. I'm based in Manaus and open to remote work and collaborations.
                </p>
                <p>
                    Contact: lucas85235@gmail.com
                </p>
            </div>
        </section>
    );
};
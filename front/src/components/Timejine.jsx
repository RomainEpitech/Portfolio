import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Timeline = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const timelineElement = document.getElementById('timeline');
        if (timelineElement) {
            observer.observe(timelineElement);
        }

        return () => observer.disconnect();
    }, []);

    const skills = [
        {
            year: "2022",
            title: "React.js",
            description: "Maîtrise des composants, hooks, et gestion d'état",
            color: "from-purple-400 to-purple-900"
        },
        {
            year: "2023",
            title: "Node.js",
            description: "Développement backend et API REST",
            color: "from-emerald-400 to-emerald-900"
        },
        {
            year: "2024",
            title: "Next.js",
            description: "Applications full-stack et SSR",
            color: "from-blue-400 to-blue-900"
        }
    ];

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.2, 0.65, 0.3, 0.9]
            }
        }
    };

    return (
        <div id="timeline" className="relative min-h-screen p-4 md:p-8 overflow-hidden">
            <div className={`absolute left-1/2 w-0.5 h-full bg-gradient-to-b from-transparent via-purple-500/30 to-transparent transform -translate-x-1/2
                ${isVisible ? 'animate-glow' : ''}`}>
                <div className={`absolute top-0 w-full h-full bg-gradient-to-b from-purple-400 via-pink-400 to-blue-400
                    ${isVisible ? 'animate-line-descent' : 'opacity-0'}`} />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto">
                {skills.map((skill, index) => (
                    <motion.div
                        key={skill.title}
                        className={`relative flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center mb-16`}
                        initial="hidden"
                        animate={isVisible ? "visible" : "hidden"}
                        variants={cardVariants}
                        custom={index}
                    >
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10">
                            <div className={`w-full h-full rounded-full bg-gradient-radial ${skill.color} 
                                animate-float shadow-[inset_-2px_-2px_4px_rgba(0,0,0,0.6)]`}>
                                <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_25%_25%,rgba(255,255,255,0.3)_0%,transparent_60%)]" />
                                <div className="absolute inset-0 bg-gradient-conic from-transparent via-white/10 to-transparent animate-selfRotate" />
                            </div>
                        </div>

                        <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} mt-8 md:mt-0`}>
                            <motion.div 
                                className="relative p-6 rounded-lg bg-black/30 backdrop-blur-md border border-white/10"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.2 }}
                            >
                                <div className="absolute -top-2 -right-2 w-4 h-4 bg-purple-400 rounded-full animate-twinkle" />
                                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-blue-400 rounded-full animate-twinkle-delayed" />
                                
                                <div className="text-sm bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">{skill.year}</div>
                                <h3 className="text-xl font-bold text-white mb-2">{skill.title}</h3>
                                <p className="text-gray-300">{skill.description}</p>

                                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/0 via-pink-500/10 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </motion.div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <style jsx>{`
                @keyframes glow {
                    0%, 100% { box-shadow: 0 0 20px rgba(147,51,234,0.3); }
                    50% { box-shadow: 0 0 40px rgba(147,51,234,0.5); }
                }

                @keyframes lineDescend {
                    from { height: 0%; }
                    to { height: 100%; }
                }

                @keyframes twinkle {
                    0%, 100% { opacity: 1; transform: scale(1); }
                    50% { opacity: 0.4; transform: scale(0.8); }
                }

                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }

                @keyframes selfRotate {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }

                .animate-glow {
                    animation: glow 3s infinite;
                }

                .animate-line-descent {
                    animation: lineDescend 2s ease-out forwards;
                }

                .animate-twinkle {
                    animation: twinkle 3s infinite;
                }

                .animate-twinkle-delayed {
                    animation: twinkle 3s infinite 1.5s;
                }

                .animate-float {
                    animation: float 6s infinite ease-in-out;
                }

                .animate-selfRotate {
                    animation: selfRotate 20s linear infinite;
                }
            `}</style>
        </div>
    );
};

export default Timeline;
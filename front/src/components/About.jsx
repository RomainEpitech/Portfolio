import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Smartphone, Server, Database } from 'lucide-react';

const About = () => {
    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const containerVariants = {
        visible: {
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const borderVariants = {
        initial: {
            opacity: 0,
            pathLength: 0
        },
        animate: {
            opacity: 1,
            pathLength: 1,
            transition: {
                duration: 2,
                ease: "easeInOut"
            }
        }
    };

    return (
        <div className="w-full flex items-center justify-center p-4 sm:p-6 md:p-8">
            <div className="w-full max-w-[90vw] md:max-w-2xl lg:max-w-4xl relative">
                {/* Animated border container */}
                <div className="absolute inset-0">
                    <svg 
                        className="w-full h-full absolute"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                    >
                        {/* Effet de lueur animée */}
                        <motion.path
                            d={`M 10,2 H 90 A 8,8 0 0,1 98,10 V 90 A 8,8 0 0,1 90,98 H 10 A 8,8 0 0,1 2,90 V 10 A 8,8 0 0,1 10,2`}
                            fill="none"
                            stroke="url(#glowGradient)"
                            strokeWidth="1"
                            vectorEffect="non-scaling-stroke"
                            initial="initial"
                            animate="animate"
                            variants={borderVariants}
                            style={{ 
                                filter: 'blur(4px)',
                                opacity: 0.5
                            }}
                            className="animate-pulse"
                        />
                        
                        {/* Bordure principale */}
                        <motion.path
                            d={`M 10,2 H 90 A 8,8 0 0,1 98,10 V 90 A 8,8 0 0,1 90,98 H 10 A 8,8 0 0,1 2,90 V 10 A 8,8 0 0,1 10,2`}
                            fill="none"
                            stroke="url(#gradient)"
                            strokeWidth="0.5"
                            vectorEffect="non-scaling-stroke"
                            initial="initial"
                            animate="animate"
                            variants={borderVariants}
                            style={{ 
                                filter: 'drop-shadow(0 0 8px rgba(147, 51, 234, 0.3))'
                            }}
                        />

                        {/* Points lumineux animés aux coins */}
                        {[
                            { x: 2, y: 2 },
                            { x: 98, y: 2 },
                            { x: 98, y: 98 },
                            { x: 2, y: 98 }
                        ].map((point, index) => (
                            <motion.circle
                                key={index}
                                cx={point.x}
                                cy={point.y}
                                r="1"
                                fill="white"
                                initial={{ scale: 0.5, opacity: 0.2 }}
                                animate={{ 
                                    scale: [0.5, 1, 0.5],
                                    opacity: [0.2, 0.8, 0.2]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    delay: index * 0.5
                                }}
                            />
                        ))}

                        <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#8B5CF6">
                                    <animate
                                        attributeName="offset"
                                        values="0;0.3;0"
                                        dur="3s"
                                        repeatCount="indefinite"
                                    />
                                </stop>
                                <stop offset="50%" stopColor="#EC4899">
                                    <animate
                                        attributeName="offset"
                                        values="0.5;0.8;0.5"
                                        dur="3s"
                                        repeatCount="indefinite"
                                    />
                                </stop>
                                <stop offset="100%" stopColor="#3B82F6">
                                    <animate
                                        attributeName="offset"
                                        values="1;0.7;1"
                                        dur="3s"
                                        repeatCount="indefinite"
                                    />
                                </stop>
                            </linearGradient>
                            <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="rgba(139, 92, 246, 0.5)" />
                                <stop offset="50%" stopColor="rgba(236, 72, 153, 0.5)" />
                                <stop offset="100%" stopColor="rgba(59, 130, 246, 0.5)" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                {/* Content */}
                <motion.div 
                    className="relative w-full"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <div className="p-4 sm:p-6 md:p-8 rounded-2xl bg-black/30 backdrop-blur-md">
                        <motion.h1 
                            className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400"
                            variants={textVariants}
                        >
                            Romain FARINACCI
                        </motion.h1>

                        <motion.div 
                            className="space-y-4 sm:space-y-6 text-gray-200"
                            variants={textVariants}
                        >
                            <p className="text-base sm:text-lg md:text-xl leading-relaxed mt-6 sm:mt-8">
                                Développeur fullstack passionné, mon parcours a débuté avec l'apprentissage des langages compilés comme le C et le C++. Cette base solide en programmation système m'a permis d'acquérir une compréhension approfondie des concepts fondamentaux du développement. À Epitech Marseille, j'ai élargi mes compétences vers le développement web et mobile.
                            </p>

                            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                                Depuis septembre 2024, j'occupe un poste de développeur fullstack en alternance au sein du groupe IP-Energy, avec une forte composante DevOps. Cette expérience m'a permis de développer une expertise pointue dans la gestion des données RGPD, l'administration système, et le maintien d'infrastructures serveur. Mes responsabilités englobent tant le développement d'applications que la mise en place de bonnes pratiques de sécurité et de performance.
                            </p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
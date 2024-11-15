import React, { useState, useEffect } from 'react';
import projectData from './inc/project.json';

const ProjectModal = ({ project, isOpen, onClose }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        setCurrentImageIndex(0);
    }, [project]);

    useEffect(() => {
        if (!isOpen || !project?.gallery?.length) return;

        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => 
                prevIndex === project.gallery.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);

        return () => clearInterval(interval);
    }, [isOpen, project]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-black/90 border border-purple-500/20 rounded-xl w-full max-w-4xl max-h-[90vh] flex flex-col">
                {/* Header fixe */}
                <div className="sticky top-0 z-30 bg-gradient-to-b from-black/90 to-black/50 p-6 border-b border-gray-800 flex flex-col items-center">
                    <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-2">
                        {project.title}
                    </h3>
                    {project.isAwardWinner && (
                        <div className="flex items-center gap-2 text-yellow-500 mb-2">
                            <span className="text-xl">🏆</span>
                            <span className="text-sm font-medium">{project.hackathonName}</span>
                        </div>
                    )}
                    <button 
                        onClick={onClose}
                        className="absolute right-4 top-4 text-gray-400 hover:text-white transition-colors 
                                hover:rotate-90 transform duration-300"
                    >
                        <span className="sr-only">Fermer</span>
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Contenu scrollable */}
                <div className="overflow-y-auto flex-1">
                    <div className="p-6">
                        {/* Carousel avec ajustement de l'image */}
                        <div className="relative h-[400px] group mb-6">
                            {project.gallery?.map((img, index) => (
                                <div
                                    key={index}
                                    className={`absolute inset-0 transition-opacity duration-1000 ${
                                        index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                                    }`}
                                >
                                    <img 
                                        src={img}
                                        alt={`${project.title} - image ${index + 1}`}
                                        className="w-full h-full object-contain bg-black/50 rounded-lg"
                                    />
                                </div>
                            ))}

                            {/* Contrôles de navigation */}
                            <button 
                                onClick={() => setCurrentImageIndex(prev => 
                                    prev === 0 ? project.gallery.length - 1 : prev - 1
                                )}
                                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full 
                                    text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300
                                    hover:bg-black/70"
                            >
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button 
                                onClick={() => setCurrentImageIndex(prev => 
                                    prev === project.gallery.length - 1 ? 0 : prev + 1
                                )}
                                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full 
                                    text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300
                                    hover:bg-black/70"
                            >
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>

                            {/* Indicateurs */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                {project.gallery?.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentImageIndex(index)}
                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                            index === currentImageIndex 
                                                ? 'bg-white w-4' 
                                                : 'bg-white/50 hover:bg-white/80'
                                        }`}
                                    >
                                        <span className="sr-only">Image {index + 1}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Description et caractéristiques */}
                        <div className="space-y-6 text-gray-300">
                            <div className="bg-black/50 rounded-lg p-6 backdrop-blur-sm">
                                <h4 className="text-xl font-semibold text-white mb-4 bg-gradient-to-r from-blue-500 to-purple-500 
                                            text-transparent bg-clip-text">Description</h4>
                                <p className="text-lg leading-relaxed">{project.fullDescription}</p>
                            </div>
                            
                            <div className="bg-black/50 rounded-lg p-6 backdrop-blur-sm">
                                <h4 className="text-xl font-semibold text-white mb-4 bg-gradient-to-r from-blue-500 to-purple-500 
                                            text-transparent bg-clip-text">Caractéristiques principales</h4>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {project.features?.map((feature, index) => (
                                        <li key={index} className="flex items-center gap-2">
                                            <span className="text-purple-500">•</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="flex flex-wrap gap-4 justify-center pt-4">
                                {project.githubUrl && (
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-6 py-3 bg-black hover:bg-gray-900 
                                                rounded-lg transition-all duration-300 border border-gray-800 
                                                hover:border-gray-700 group"
                                    >
                                        <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                                        </svg>
                                        Code source
                                    </a>
                                )}
                                {project.demoUrl && (
                                    <a
                                        href={project.demoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 
                                                rounded-lg transition-all duration-300 group"
                                    >
                                        <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                        Voir la démo
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const AwardBadge = () => (
    <div className="absolute -top-3 -right-3 z-20 animate-pulse">
        <div className="relative">
            <svg className="w-16 h-16 text-yellow-500 rotate-12 animate-spin-slow" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-black">1er</span>
        </div>
    </div>
);

const Project = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const languageColors = {
        python: 'text-blue-500',
        react: 'text-cyan-400',
        angular: 'text-red-500',
        typescript: 'text-blue-600',
        mongodb: 'text-green-500',
        api: 'text-purple-500',
        tailwind: 'text-teal-400',
        bash: 'text-red-700',
        docker: 'text-sky-500',
        php: 'text-indigo-400',
        sql: 'text-orange-400',
        springboot: 'text-green-400',
        supabase: '',
    };

    const awardedProjects = projectData.projects.filter(project => project.isAwardWinner);
    const regularProjects = projectData.projects.filter(project => !project.isAwardWinner);

    const ProjectCard = ({ project, isAwardWinner = false }) => (
        <div 
            onClick={() => setSelectedProject(project)}
            className={`group relative bg-black/60 border border-transparent rounded-xl overflow-hidden 
                hover:bg-black/80 transition-all duration-500 hover:scale-105 hover:shadow-xl 
                hover:shadow-purple-500/20 before:absolute before:inset-0 before:border 
                ${isAwardWinner ? 'before:border-yellow-500/50' : 'before:border-purple-500/20'}
                before:rounded-xl before:scale-105 before:opacity-0 before:transition-all before:duration-700
                hover:before:scale-100 hover:before:opacity-100 after:absolute after:inset-0 after:border 
                ${isAwardWinner ? 'after:border-yellow-500/50' : 'after:border-blue-500/20'}
                after:rounded-xl after:scale-105 after:opacity-0 after:transition-all 
                after:duration-700 hover:after:scale-100 hover:after:opacity-100 backdrop-blur-sm
                cursor-pointer ${isAwardWinner ? 'ring-2 ring-yellow-500/20' : ''}`}
        >
            {isAwardWinner && <AwardBadge />}
            <div className="p-5 z-10 relative">
                <div className="relative overflow-hidden rounded-lg mb-4">
                    <div className={`absolute inset-0 bg-gradient-to-br 
                        ${isAwardWinner 
                            ? 'from-yellow-500/20 to-orange-500/20' 
                            : 'from-purple-500/20 to-blue-500/20'} 
                        opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10`}
                    />
                    <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-48 object-cover transform group-hover:scale-110 transition-all duration-700 group-hover:rotate-2"
                    />
                </div>
                <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat bg-left-bottom group-hover:bg-[length:100%_2px] transition-all duration-500">
                    {project.title}
                </h3>
                {isAwardWinner && (
                    <div className="mb-2 text-yellow-500 text-sm font-medium">
                        🏆 {project.hackathonName} 🏆
                    </div>
                )}
                <p className="text-gray-300 mb-4 text-sm leading-relaxed group-hover:text-gray-200 
                            transition-colors duration-500">
                    {project.description}
                </p>
                <div className="flex flex-wrap gap-3 justify-center pt-2 border-t border-gray-800/50 relative">
                    {project.tags.map((tag, tagIndex) => (
                        <span
                            key={tagIndex}
                            className={`text-sm font-medium ${
                                languageColors[tag.toLowerCase()] || 'text-gray-400'
                            } hover:scale-110 transition-transform duration-300 hover:-rotate-6`}
                        >
                            #{tag}
                        </span>
                    ))}
                </div>
            </div>
            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r 
                ${isAwardWinner 
                    ? 'from-transparent via-yellow-500 to-transparent' 
                    : 'from-transparent via-purple-500 to-transparent'}
                opacity-0 group-hover:opacity-100 transition-opacity duration-700`} 
            />
            <div className={`absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r 
                ${isAwardWinner 
                    ? 'from-yellow-500 via-orange-500 to-transparent' 
                    : 'from-blue-500 via-purple-500 to-transparent'}
                opacity-0 group-hover:opacity-100 transition-opacity duration-700`} 
            />
        </div>
    );

    return (
        <section className="w-full p-6">
            {/* Section des projets lauréats */}
            {awardedProjects.length > 0 && (
                <div className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 text-center">
                        <span className="bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-500 text-transparent bg-clip-text">
                            Projets Lauréats 🏆
                        </span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {awardedProjects.map((project, index) => (
                            <ProjectCard key={index} project={project} isAwardWinner={true} />
                        ))}
                    </div>
                </div>
            )}

            {/* Section des projets réguliers */}
            <div>
                <h2 className="text-3xl font-bold mb-8 text-center animate-pulse">
                    <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                        Mes Projets
                    </span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {regularProjects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>

            <ProjectModal 
                project={selectedProject}
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </section>
    );
};

export default Project;
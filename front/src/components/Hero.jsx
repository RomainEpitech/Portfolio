import React from "react";
import { motion } from 'framer-motion';

const Hero = () => {
    const textContainer = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const letterAnimation = {
        hidden: {
            opacity: 0,
            y: 50
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                ease: [0.2, 0.65, 0.3, 0.9]
            }
        }
    };

    const title = "Bienvenue dans mon espace";
    const name = "développeur fullstack";
    return (
        <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            {/* Planète rouge style Mars */}
            <div className="absolute w-[180px] h-[180px] top-[10%] left-[10%] hidden sm:flex items-center justify-center animate-float">
                <div className="absolute w-full h-full rounded-full bg-black/20 blur-xl transform scale-110" />
                <div className="w-full h-full rounded-full absolute bg-gradient-to-br from-red-900 via-red-700 to-red-950 animate-selfRotate shadow-[inset_-25px_-25px_40px_rgba(0,0,0,0.8)]">
                    <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_25%_25%,rgba(255,255,255,0.2)_0%,transparent_50%)]" />
                    <div className="absolute -inset-1 rounded-full opacity-20 bg-[radial-gradient(circle_at_70%_70%,#fff_0%,transparent_25%)] animate-glow" />
                    <div className="absolute h-12 w-12 rounded-full bg-gradient-to-br from-red-950 to-transparent top-8 left-8 blur-sm" />
                    <div className="absolute h-8 w-8 rounded-full bg-gradient-to-br from-red-950 to-transparent bottom-10 right-6 blur-sm" />
                </div>
            </div>

            {/* Planète gazeuse style Saturne */}
            <div className="absolute w-[220px] h-[220px] top-[10%] right-[10%] hidden sm:flex items-center justify-center animate-float-slow">
                <div className="absolute w-[200%] h-[200%] rounded-full bg-transparent [transform:rotateX(75deg)] -z-10">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-24 bg-[radial-gradient(ellipse_at_center,rgba(250,204,21,0.3)_0%,transparent_70%)] rounded-full animate-pulse" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-20 bg-[linear-gradient(to_right,transparent,rgba(234,179,8,0.4)_20%,rgba(234,179,8,0.5)_40%,rgba(234,179,8,0.5)_60%,rgba(234,179,8,0.4)_80%,transparent)] rounded-full animate-ringRotate opacity-90" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-16 bg-[linear-gradient(to_right,transparent,rgba(234,179,8,0.2)_30%,rgba(234,179,8,0.2)_70%,transparent)] rounded-full animate-ringRotate-reverse" />
                </div>
                <div className="w-full h-full rounded-full absolute bg-gradient-radial from-yellow-600 via-yellow-700 to-yellow-900 animate-selfRotate-slow shadow-[inset_-25px_-25px_40px_rgba(0,0,0,0.8)]">
                    <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.4)_0%,transparent_60%)]" />
                    <div className="absolute inset-0 rounded-full animate-atmosphere opacity-30">
                        <div className="absolute top-1/4 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-yellow-500/40 to-transparent transform rotate-6" />
                        <div className="absolute top-1/3 left-0 right-0 h-3 bg-gradient-to-r from-transparent via-yellow-600/40 to-transparent transform -rotate-3" />
                        <div className="absolute top-1/2 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-yellow-500/40 to-transparent transform rotate-2" />
                    </div>
                </div>
            </div>

            {/* Planète glacée */}
            <div className="absolute w-[150px] h-[150px] bottom-[10%] left-[10%] hidden sm:flex items-center justify-center animate-float-reverse">
                <div className="absolute w-full h-full rounded-full bg-cyan-500/10 blur-xl transform scale-125 animate-pulse" />
                <div className="w-full h-full rounded-full absolute overflow-hidden bg-gradient-radial from-cyan-300 via-blue-500 to-cyan-900 animate-selfRotate-reverse shadow-[inset_-25px_-25px_40px_rgba(0,0,0,0.8)]">
                    <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_25%_25%,rgba(255,255,255,0.5)_0%,transparent_50%)]" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent animate-ice" />
                    <div className="absolute -inset-2 bg-gradient-conic from-transparent via-cyan-200/10 to-transparent animate-aurora opacity-60" />
                </div>
            </div>

            {/* Planète gazeuse géante */}
            <div className="absolute w-[200px] h-[200px] bottom-[10%] right-[10%] hidden sm:flex items-center justify-center animate-float-slow">
                <div className="absolute w-[170%] h-[170%] rounded-full bg-transparent [transform:rotateX(75deg)] -z-10">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-16 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.3)_0%,transparent_70%)] rounded-full animate-pulse" />
                </div>
                <div className="w-full h-full rounded-full absolute bg-gradient-radial from-emerald-400 via-emerald-600 to-emerald-900 animate-selfRotate shadow-[inset_-25px_-25px_40px_rgba(0,0,0,0.8)]">
                    <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_25%_25%,rgba(255,255,255,0.3)_0%,transparent_60%)]" />
                    <div className="absolute inset-0 animate-storms opacity-40">
                        <div className="absolute top-1/4 w-full h-4 bg-gradient-to-r from-transparent via-emerald-300/30 to-transparent transform rotate-6" />
                        <div className="absolute top-2/4 w-full h-6 bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent transform -rotate-3" />
                        <div className="absolute bottom-1/4 w-full h-5 bg-gradient-to-r from-transparent via-emerald-300/30 to-transparent transform rotate-2" />
                    </div>
                </div>
            </div>

            {/* Planète mobile violet mystérieux */}
            <div className="absolute w-[180px] h-[180px] top-[5%] left-[5%] sm:hidden flex items-center justify-center animate-float">
                <div className="absolute w-[170%] h-[170%] rounded-full bg-transparent [transform:rotateX(75deg)] -z-10">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-16 bg-[radial-gradient(ellipse_at_center,rgba(147,51,234,0.3)_0%,transparent_70%)] rounded-full animate-pulse" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-20 bg-[linear-gradient(to_right,transparent,rgba(147,51,234,0.3)_20%,rgba(147,51,234,0.4)_40%,rgba(147,51,234,0.4)_60%,rgba(147,51,234,0.3)_80%,transparent)] rounded-full animate-ringRotate" />
                </div>
                <div className="w-full h-full rounded-full absolute bg-gradient-radial from-purple-400 via-purple-600 to-purple-900 animate-selfRotate-slow shadow-[inset_-25px_-25px_40px_rgba(0,0,0,0.8)]">
                    <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_25%_25%,rgba(255,255,255,0.3)_0%,transparent_60%)]" />
                    <div className="absolute inset-0 animate-mystical opacity-30">
                        <div className="absolute inset-0 bg-gradient-conic from-transparent via-purple-300/20 to-transparent" />
                    </div>
                </div>
            </div>

            {/* Planète mobile rocheuse orange */}
            <div className="absolute w-[180px] h-[180px] bottom-[5%] right-[5%] sm:hidden flex items-center justify-center animate-float-reverse">
                <div className="absolute w-full h-full rounded-full bg-orange-500/10 blur-xl transform scale-110" />
                <div className="w-full h-full rounded-full absolute bg-gradient-radial from-orange-400 via-orange-700 to-orange-900 animate-selfRotate shadow-[inset_-25px_-25px_40px_rgba(0,0,0,0.8)]">
                    <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_25%_25%,rgba(255,255,255,0.3)_0%,transparent_60%)]" />
                    <div className="absolute bg-[radial-gradient(circle_at_50%_50%,transparent_40%,rgba(0,0,0,0.4)_70%)]" />
                    <div className="absolute h-10 w-10 rounded-full bg-gradient-to-br from-orange-950/60 to-transparent blur-sm top-10 left-10" />
                    <div className="absolute h-8 w-8 rounded-full bg-gradient-to-br from-orange-950/60 to-transparent blur-sm bottom-8 right-8" />
                </div>
            </div>
            
            <motion.div 
                className="relative z-10 text-center px-5 max-w-4xl"
                initial="hidden"
                animate="visible"
                variants={textContainer}
            >
                <motion.h1 
                    className="relative text-4xl md:text-6xl mb-8 text-white"
                >
                    {title.split("").map((letter, index) => (
                        <motion.span
                            key={index}
                            className="inline-block"
                            variants={letterAnimation}
                            style={{ 
                                textShadow: '0 0 20px rgba(255,255,255,0.5)',
                            }}
                        >
                            {letter === " " ? "\u00A0" : letter}
                        </motion.span>
                    ))}
                    <motion.div
                        className="absolute -inset-2 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                        initial={{ x: '-100%', opacity: 0 }}
                        animate={{ 
                            x: ['-100%', '100%'],
                            opacity: [0, 1, 0]
                        }}
                        transition={{
                            duration: 3,
                            ease: "easeInOut",
                            repeat: Infinity,
                            repeatDelay: 4
                        }}
                    />
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5, duration: 1 }}
                    className="relative p-2"
                >
                    <motion.div
                        className="absolute inset-0 rounded-xl bg-black/40 backdrop-blur-sm"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ delay: 2.3, duration: 0.8 }}
                    />

                    <motion.div 
                        className="relative"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2.8, duration: 0.5 }}
                    >
                        <motion.p 
                            className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 text-transparent bg-clip-text"
                            animate={{ 
                                textShadow: [
                                    '0 0 20px rgba(168,85,247,0.3)',
                                    '0 0 25px rgba(168,85,247,0.5)',
                                    '0 0 20px rgba(168,85,247,0.3)'
                                ]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                repeatType: "reverse"
                            }}
                        >
                            {name}
                        </motion.p>

                        <motion.div
                            className="absolute -inset-1 rounded-xl"
                            style={{
                                background: 'linear-gradient(90deg, transparent, rgba(168,85,247,0.2), transparent)',
                                backgroundSize: '200% 100%'
                            }}
                            animate={{
                                backgroundPosition: ['100% 0', '-100% 0']
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                repeatType: "reverse",
                                ease: "linear"
                            }}
                        />
                    </motion.div>
                </motion.div>
            </motion.div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                }

                @keyframes float-slow {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-15px); }
                }

                @keyframes float-reverse {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(20px); }
                }
                
                @keyframes selfRotate {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }

                @keyframes selfRotate-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }

                @keyframes selfRotate-reverse {
                    from { transform: rotate(360deg); }
                    to { transform: rotate(0deg); }
                }
                
                @keyframes ringRotate {
                    from { transform: translate(-50%, -50%) rotate(0deg); }
                    to { transform: translate(-50%, -50%) rotate(360deg); }
                }

                @keyframes ringRotate-reverse {
                    from { transform: translate(-50%, -50%) rotate(360deg); }
                    to { transform: translate(-50%, -50%) rotate(0deg); }
                }

                @keyframes atmosphere {
                    0%, 100% { opacity: 0.3; }
                    50% { opacity: 0.5; }
                }

                @keyframes aurora {
                    0%, 100% { transform: rotate(0deg); }
                    50% { transform: rotate(180deg); }
                }

                @keyframes ice {
                    0%, 100% { opacity: 0.1; }
                    50% { opacity: 0.3; }
                }

                @keyframes storms {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.05); }
                }

                @keyframes mystical {
                    0% { transform: rotate(0deg) scale(1); }
                    50% { transform: rotate(180deg) scale(1.1); }
                    100% { transform: rotate(360deg) scale(1); }
                }

                .animate-float {
                    animation: float 8s infinite ease-in-out;
                }

                .animate-float-slow {
                    animation: float-slow 12s infinite ease-in-out;
                }

                .animate-float-reverse {
                    animation: float-reverse 10s infinite ease-in-out;
                }
                
                .animate-selfRotate {
                    animation: selfRotate 20s linear infinite;
                }

                .animate-selfRotate-slow {
                    animation: selfRotate-slow 30s linear infinite;
                }

                .animate-selfRotate-reverse {
                    animation: selfRotate-reverse 25s linear infinite;
                }
                
                .animate-ringRotate {
                    animation: ringRotate 30s linear infinite;
                }

                .animate-ringRotate-reverse {
                    animation: ringRotate-reverse 25s linear infinite;
                }

                .animate-atmosphere {
                    animation: atmosphere 8s infinite ease-in-out;
                }

                .animate-pulse {
                    animation: pulse 4s infinite ease-in-out;
                }

                .animate-ice {
                    animation: ice 6s infinite ease-in-out;
                }

                .animate-aurora {
                    animation: aurora 20s infinite linear;
                }

                .animate-storms {
                    animation: storms 8s infinite ease-in-out;
                }

                .animate-mystical {
                    animation: mystical 15s infinite linear;
                }

                .animate-glow {
                    animation: pulse 4s infinite ease-in-out;
                }
            `}</style>
        </div>
    );
};

export default Hero;
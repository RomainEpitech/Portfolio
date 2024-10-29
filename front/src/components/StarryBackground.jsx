import React, { useEffect, useState } from 'react';

const StarryBackground = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const createStars = () => {
            const starsContainer = document.getElementById('stars-container');
            if (!starsContainer) return;

            // Créer différents types d'étoiles
            for (let i = 0; i < 300; i++) {
                const star = document.createElement('div');
                star.className = i % 3 === 0 ? 'star large' : i % 2 === 0 ? 'star medium' : 'star small';
                star.style.left = `${Math.random() * 100}%`;
                star.style.top = `${Math.random() * 100}%`;
                star.style.animationDelay = `${Math.random() * 5}s`;
                starsContainer.appendChild(star);
            }

            // Créer des nébuleuses colorées
            for (let i = 0; i < 5; i++) {
                const nebula = document.createElement('div');
                nebula.className = 'nebula';
                nebula.style.left = `${Math.random() * 100}%`;
                nebula.style.top = `${Math.random() * 100}%`;
                nebula.style.background = `radial-gradient(
                    circle at center,
                    ${['#ff61d5', '#7161ff', '#61ffb4'][Math.floor(Math.random() * 3)]}33 0%,
                    transparent 70%
                )`;
                nebula.style.animationDelay = `${Math.random() * 10}s`;
                starsContainer.appendChild(nebula);
            }

            const createShootingStar = () => {
                const shootingStar = document.createElement('div');
                shootingStar.className = 'shooting-star';
                shootingStar.style.top = `${Math.random() * 70}%`;
                shootingStar.style.right = '0';
                document.body.appendChild(shootingStar);
                
                setTimeout(() => {
                    shootingStar.remove();
                }, 3000);
            };

            const shootingStarInterval = setInterval(createShootingStar, 4000);

            return () => {
                clearInterval(shootingStarInterval);
            };
        };

        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            setMousePosition({
                x: (clientX / window.innerWidth) * 20 - 10,
                y: (clientY / window.innerHeight) * 20 - 10,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        createStars();

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="starry-background">
            <div 
                id="stars-container" 
                style={{
                    transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
                }}
            />
            <div className="cosmic-overlay" />
            <style jsx>{`
                .starry-background {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    pointer-events: none;
                    z-index: -1;
                    background: linear-gradient(to bottom, 
                        #0a0510 0%,
                        #12102e 25%,
                        #1b1638 50%,
                        #241842 75%,
                        #2d1a4c 100%
                    );
                    overflow: hidden;
                }

                .cosmic-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: 
                        radial-gradient(circle at 20% 30%, rgba(88, 83, 255, 0.15) 0%, transparent 50%),
                        radial-gradient(circle at 80% 70%, rgba(255, 83, 205, 0.15) 0%, transparent 50%);
                    animation: cosmicPulse 15s ease-in-out infinite;
                }

                #stars-container {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    transform-style: preserve-3d;
                    transition: transform 0.1s ease-out;
                }

                .star {
                    position: absolute;
                    background: #fff;
                    border-radius: 50%;
                    animation: twinkle var(--duration, 3s) ease-in-out infinite;
                }

                .star.small {
                    width: 1px;
                    height: 1px;
                    box-shadow: 0 0 2px #fff;
                }

                .star.medium {
                    width: 2px;
                    height: 2px;
                    box-shadow: 0 0 4px #fff;
                }

                .star.large {
                    width: 3px;
                    height: 3px;
                    box-shadow: 0 0 6px #fff;
                }

                .nebula {
                    position: absolute;
                    width: 150px;
                    height: 150px;
                    filter: blur(20px);
                    opacity: 0.3;
                    animation: nebulaPulse 10s ease-in-out infinite;
                }

                .shooting-star {
                    position: fixed;
                    width: 150px;
                    height: 2px;
                    background: linear-gradient(to right, 
                        rgba(255,255,255,0), 
                        rgba(255,255,255,0.8) 50%,
                        rgba(255,255,255,0)
                    );
                    box-shadow: 
                        0 0 10px rgba(255,255,255,0.5),
                        0 0 20px rgba(255,255,255,0.3);
                    animation: shooting 3s linear forwards;
                    opacity: 0;
                }

                @keyframes twinkle {
                    0%, 100% { opacity: 0.2; transform: scale(1); }
                    50% { opacity: 1; transform: scale(1.5); }
                }

                @keyframes nebulaPulse {
                    0%, 100% { transform: scale(1); opacity: 0.3; }
                    50% { transform: scale(1.2); opacity: 0.4; }
                }

                @keyframes cosmicPulse {
                    0%, 100% { opacity: 0.7; }
                    50% { opacity: 1; }
                }

                @keyframes shooting {
                    0% {
                        transform: translateX(0) translateY(0) rotate(-45deg);
                        opacity: 1;
                    }
                    100% {
                        transform: translateX(-1000px) translateY(1000px) rotate(-45deg);
                        opacity: 0;
                    }
                }
            `}</style>
        </div>
    );
};

export default StarryBackground;
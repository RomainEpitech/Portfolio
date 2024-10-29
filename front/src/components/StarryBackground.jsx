import React, { useEffect } from 'react';

const StarryBackground = () => {
    useEffect(() => {
        const createStars = () => {
            const starsContainer = document.getElementById('stars-container');
            if (!starsContainer) return;

            for (let i = 0; i < 200; i++) {
                const star = document.createElement('div');
                star.className = 'star';
                star.style.left = `${Math.random() * 100}%`;
                star.style.top = `${Math.random() * 100}%`;
                star.style.animationDelay = `${Math.random() * 2}s`;
                starsContainer.appendChild(star);
            }

            const createShootingStar = () => {
                const shootingStar = document.createElement('div');
                shootingStar.className = 'shooting-star';
                shootingStar.style.top = `${Math.random() * 50}%`;
                shootingStar.style.right = '0';
                document.body.appendChild(shootingStar);
                
                setTimeout(() => {
                    shootingStar.remove();
                }, 3000);
            };

            const shootingStarInterval = setInterval(createShootingStar, 8000);

            return () => {
                clearInterval(shootingStarInterval);
            };
        };

        createStars();
    }, []);

    return (
        <div className="starry-background">
            <div id="stars-container" />
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
                        #000000 0%,
                        #0a0a2a 40%,
                        #1a1a3a 60%,
                        #2a2a4a 80%,
                        #3a3a5a 100%
                    );
                }

                #stars-container {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    transform-style: preserve-3d;
                    animation: starRotate 240s linear infinite;
                }

                .star {
                    position: absolute;
                    width: 2px;
                    height: 2px;
                    background: #fff;
                    border-radius: 50%;
                    animation: twinkle 3s ease-in-out infinite;
                }

                .shooting-star {
                    position: fixed;
                    width: 100px;
                    height: 1px;
                    background: linear-gradient(to right, 
                        rgba(255,255,255,0), 
                        rgba(255,255,255,0.8),
                        rgba(255,255,255,0)
                    );
                    animation: shooting 3s linear forwards;
                    opacity: 0;
                    z-index: 0;
                }

                @keyframes twinkle {
                    0%, 100% { opacity: 0.2; transform: scale(1); }
                    50% { opacity: 1; transform: scale(1.2); }
                }

                @keyframes shooting {
                    0% {
                        transform: translateX(0) translateY(0) rotate(-45deg);
                        opacity: 1;
                    }
                    100% {
                        transform: translateX(-500px) translateY(500px) rotate(-45deg);
                        opacity: 0;
                    }
                }
            `}</style>
        </div>
    );
};

export default StarryBackground;
import { useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
    const heroRef = useRef(null);
    const particlesRef = useRef(null);

    useEffect(() => {
        // Create dust particles
        const createParticles = () => {
            const container = particlesRef.current;
            if (!container) return;

            for (let i = 0; i < 30; i++) {
                const particle = document.createElement('div');
                particle.className = 'hero__particle';
                particle.style.left = `${Math.random() * 100}%`;
                particle.style.top = `${Math.random() * 100}%`;
                particle.style.animationDelay = `${Math.random() * 5}s`;
                particle.style.animationDuration = `${3 + Math.random() * 4}s`;
                container.appendChild(particle);
            }
        };

        createParticles();
    }, []);

    return (
        <section className="hero" id="home" ref={heroRef}>
            {/* Background Effects */}
            <div className="hero__bg">
                <div className="hero__gradient-orb hero__gradient-orb--1"></div>
                <div className="hero__gradient-orb hero__gradient-orb--2"></div>
                <div className="hero__grid"></div>
            </div>

            {/* Dust Particles */}
            <div className="hero__particles" ref={particlesRef}></div>

            <div className="hero__container container">
                {/* Left Content */}
                <div className="hero__content">
                    <div className="hero__badge animate-fadeInUp">
                        <span className="hero__badge-dot"></span>
                        Premium Quality Tyres
                    </div>

                    <h1 className="hero__title">
                        <span className="hero__title-line animate-fadeInUp delay-100">
                            Beyond
                        </span>
                        <span className="hero__title-line hero__title-line--accent animate-fadeInUp delay-200">
                            Expectations
                        </span>
                    </h1>

                    <p className="hero__description animate-fadeInUp delay-300">
                        Discover new destinations with KRT Tyres. Engineered for performance,
                        designed for excellence. Experience the road like never before.
                    </p>

                    <div className="hero__actions animate-fadeInUp delay-400">
                        <a href="#products" className="btn btn-primary hero__btn">
                            Explore Tyres
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                        <a href="#about" className="btn btn-secondary hero__btn">
                            Learn More
                        </a>
                    </div>

                    {/* Stats */}
                    <div className="hero__stats animate-fadeInUp delay-500">
                        <div className="hero__stat">
                            <span className="hero__stat-value">15+</span>
                            <span className="hero__stat-label">Years Experience</span>
                        </div>
                        <div className="hero__stat-divider"></div>
                        <div className="hero__stat">
                            <span className="hero__stat-value">50K+</span>
                            <span className="hero__stat-label">Happy Customers</span>
                        </div>
                        <div className="hero__stat-divider"></div>
                        <div className="hero__stat">
                            <span className="hero__stat-value">100+</span>
                            <span className="hero__stat-label">Tyre Models</span>
                        </div>
                    </div>
                </div>

                {/* Right - Tyre Visual */}
                <div className="hero__visual">
                    <div className="hero__tyre-container">
                        {/* Glow Ring */}
                        <div className="hero__tyre-glow"></div>

                        {/* Main Tyre */}
                        <div className="hero__tyre animate-float">
                            <svg viewBox="0 0 400 400" className="hero__tyre-svg">
                                {/* Outer Ring */}
                                <circle cx="200" cy="200" r="180" fill="none" stroke="url(#tyreGradient)" strokeWidth="40" />

                                {/* Tread Pattern */}
                                <g className="hero__tyre-treads">
                                    {[...Array(24)].map((_, i) => (
                                        <rect
                                            key={i}
                                            x="195"
                                            y="10"
                                            width="10"
                                            height="30"
                                            fill="#333"
                                            transform={`rotate(${i * 15} 200 200)`}
                                            rx="2"
                                        />
                                    ))}
                                </g>

                                {/* Inner Ring */}
                                <circle cx="200" cy="200" r="140" fill="none" stroke="#1a1a1a" strokeWidth="20" />

                                {/* Rim */}
                                <circle cx="200" cy="200" r="120" fill="url(#rimGradient)" stroke="#333" strokeWidth="2" />

                                {/* Rim Spokes */}
                                <g className="hero__tyre-spokes">
                                    {[...Array(6)].map((_, i) => (
                                        <path
                                            key={i}
                                            d={`M200 200 L${200 + 100 * Math.cos((i * 60 - 90) * Math.PI / 180)} ${200 + 100 * Math.sin((i * 60 - 90) * Math.PI / 180)}`}
                                            stroke="#444"
                                            strokeWidth="15"
                                            strokeLinecap="round"
                                            transform={`rotate(${i * 60} 200 200)`}
                                        />
                                    ))}
                                </g>

                                {/* Center Hub */}
                                <circle cx="200" cy="200" r="40" fill="#222" stroke="#F5A623" strokeWidth="3" />
                                <circle cx="200" cy="200" r="20" fill="#F5A623" />

                                {/* Gradients */}
                                <defs>
                                    <linearGradient id="tyreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#2a2a2a" />
                                        <stop offset="50%" stopColor="#1a1a1a" />
                                        <stop offset="100%" stopColor="#0a0a0a" />
                                    </linearGradient>
                                    <radialGradient id="rimGradient" cx="30%" cy="30%">
                                        <stop offset="0%" stopColor="#3a3a3a" />
                                        <stop offset="100%" stopColor="#1a1a1a" />
                                    </radialGradient>
                                </defs>
                            </svg>
                        </div>

                        {/* Rotating Ring */}
                        <div className="hero__tyre-ring animate-rotate"></div>
                    </div>

                    {/* Floating Tags */}
                    <div className="hero__tag hero__tag--1 animate-fadeInRight delay-300">
                        <span className="hero__tag-icon">🏆</span>
                        Premium Quality
                    </div>
                    <div className="hero__tag hero__tag--2 animate-fadeInRight delay-400">
                        <span className="hero__tag-icon">⚡</span>
                        High Performance
                    </div>
                    <div className="hero__tag hero__tag--3 animate-fadeInRight delay-500">
                        <span className="hero__tag-icon">🛡️</span>
                        2 Year Warranty
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="hero__scroll">
                <div className="hero__scroll-mouse">
                    <div className="hero__scroll-wheel"></div>
                </div>
                <span>Scroll to explore</span>
            </div>
        </section>
    );
};

export default Hero;

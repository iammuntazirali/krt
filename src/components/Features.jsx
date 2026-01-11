import { useEffect, useRef } from 'react';
import './Features.css';

const Features = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const cards = sectionRef.current?.querySelectorAll('.feature-card');
        cards?.forEach((card) => observer.observe(card));

        return () => observer.disconnect();
    }, []);

    const features = [
        {
            icon: (
                <svg viewBox="0 0 48 48" fill="none">
                    <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2" />
                    <path d="M24 14V24L30 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
            ),
            title: 'Long Lasting',
            description: 'Engineered for durability with advanced rubber compounds that extend tyre life by up to 40%.',
        },
        {
            icon: (
                <svg viewBox="0 0 48 48" fill="none">
                    <path d="M24 4L44 14V34L24 44L4 34V14L24 4Z" stroke="currentColor" strokeWidth="2" />
                    <path d="M24 20V28M24 32V32.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
            ),
            title: 'Superior Grip',
            description: 'Advanced tread patterns provide exceptional grip on wet and dry surfaces for maximum safety.',
        },
        {
            icon: (
                <svg viewBox="0 0 48 48" fill="none">
                    <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2" />
                    <path d="M16 24L22 30L32 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            title: 'Quality Assured',
            description: 'Each tyre undergoes rigorous testing to meet international safety and quality standards.',
        },
        {
            icon: (
                <svg viewBox="0 0 48 48" fill="none">
                    <path d="M42 24C42 33.9411 33.9411 42 24 42C14.0589 42 6 33.9411 6 24C6 14.0589 14.0589 6 24 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M32 8L38 14L44 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            title: 'Fuel Efficient',
            description: 'Low rolling resistance technology reduces fuel consumption by up to 15%.',
        },
        {
            icon: (
                <svg viewBox="0 0 48 48" fill="none">
                    <path d="M8 34L24 14L40 34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="24" cy="34" r="6" stroke="currentColor" strokeWidth="2" />
                </svg>
            ),
            title: 'All Terrain',
            description: 'Versatile design handles highways, city streets, and off-road conditions with ease.',
        },
        {
            icon: (
                <svg viewBox="0 0 48 48" fill="none">
                    <path d="M24 6V12M24 36V42M6 24H12M36 24H42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="24" cy="24" r="10" stroke="currentColor" strokeWidth="2" />
                </svg>
            ),
            title: 'Quiet Ride',
            description: 'Noise-reducing technology ensures a smooth, quiet driving experience on any road.',
        },
    ];

    return (
        <section className="features section" id="features" ref={sectionRef}>
            <div className="container">
                {/* Section Header */}
                <div className="features__header">
                    <span className="features__label">Why Choose Us</span>
                    <h2 className="features__title">
                        Engineered for <span className="gradient-text">Excellence</span>
                    </h2>
                    <p className="features__subtitle">
                        Discover what makes KRT tyres the preferred choice for drivers who demand the best.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="features__grid">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="feature-card"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="feature-card__icon">
                                {feature.icon}
                            </div>
                            <h3 className="feature-card__title">{feature.title}</h3>
                            <p className="feature-card__description">{feature.description}</p>
                            <div className="feature-card__glow"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;

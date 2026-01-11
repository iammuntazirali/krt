import { useState, useEffect, useRef } from 'react';
import './Products.css';

const Products = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const sectionRef = useRef(null);

    const products = [
        {
            id: 1,
            name: 'KRT Apex Pro',
            category: 'Performance',
            tagline: 'Ultimate Performance',
            description: 'Designed for sports cars and high-performance vehicles. Maximum grip at high speeds.',
            features: ['Asymmetric Tread', 'Silica Compound', 'XL Load Rating'],
            price: 'From ₹8,999',
        },
        {
            id: 2,
            name: 'KRT Terrain Master',
            category: 'All-Terrain',
            tagline: 'Conquer Any Path',
            description: 'Built for adventure. Handles mud, gravel, and rocky terrains with confidence.',
            features: ['Aggressive Tread', 'Reinforced Sidewall', 'Self-Cleaning Grooves'],
            price: 'From ₹7,499',
        },
        {
            id: 3,
            name: 'KRT City Cruiser',
            category: 'Touring',
            tagline: 'Smooth City Rides',
            description: 'Perfect for daily commutes. Quiet, comfortable, and fuel-efficient.',
            features: ['Low Noise Pattern', 'Fuel Efficient', 'Long Mileage'],
            price: 'From ₹5,999',
        },
        {
            id: 4,
            name: 'KRT Storm Guard',
            category: 'All-Season',
            tagline: 'Weather Ready',
            description: 'Reliable performance in rain, sun, or light snow. Year-round confidence.',
            features: ['Aqua Channels', 'Variable Pitch', '3D Sipes'],
            price: 'From ₹6,499',
        },
    ];

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

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section className="products section" id="products" ref={sectionRef}>
            {/* Background */}
            <div className="products__bg">
                <div className="products__bg-gradient"></div>
            </div>

            <div className="container">
                {/* Header */}
                <div className="products__header">
                    <span className="products__label">Our Collection</span>
                    <h2 className="products__title">
                        Find Your Perfect <span className="gradient-text">Tyre</span>
                    </h2>
                    <p className="products__subtitle">
                        Premium tyres designed for every driving style and road condition.
                    </p>
                </div>

                {/* Products Display */}
                <div className="products__content">
                    {/* Category Tabs */}
                    <div className="products__tabs">
                        {products.map((product, index) => (
                            <button
                                key={product.id}
                                className={`products__tab ${activeIndex === index ? 'active' : ''}`}
                                onClick={() => setActiveIndex(index)}
                            >
                                <span className="products__tab-category">{product.category}</span>
                                <span className="products__tab-name">{product.name}</span>
                            </button>
                        ))}
                    </div>

                    {/* Active Product */}
                    <div className="products__showcase">
                        <div className="products__visual">
                            {/* Animated Tyre */}
                            <div className="products__tyre-wrapper">
                                <div className="products__tyre-glow"></div>
                                <svg viewBox="0 0 300 300" className="products__tyre-svg animate-float">
                                    {/* Outer Tyre */}
                                    <circle cx="150" cy="150" r="140" fill="none" stroke="url(#productTyreGradient)" strokeWidth="30" />

                                    {/* Tread */}
                                    <g className="products__tyre-treads">
                                        {[...Array(20)].map((_, i) => (
                                            <rect
                                                key={i}
                                                x="147"
                                                y="5"
                                                width="6"
                                                height="20"
                                                fill="#333"
                                                transform={`rotate(${i * 18} 150 150)`}
                                                rx="2"
                                            />
                                        ))}
                                    </g>

                                    {/* Inner Ring */}
                                    <circle cx="150" cy="150" r="110" fill="none" stroke="#1a1a1a" strokeWidth="15" />

                                    {/* Rim */}
                                    <circle cx="150" cy="150" r="90" fill="url(#productRimGradient)" stroke="#333" strokeWidth="2" />

                                    {/* Spokes */}
                                    {[...Array(5)].map((_, i) => (
                                        <ellipse
                                            key={i}
                                            cx={150 + 55 * Math.cos((i * 72 - 90) * Math.PI / 180)}
                                            cy={150 + 55 * Math.sin((i * 72 - 90) * Math.PI / 180)}
                                            rx="20"
                                            ry="35"
                                            fill="#1a1a1a"
                                            transform={`rotate(${i * 72} 150 150)`}
                                        />
                                    ))}

                                    {/* Center */}
                                    <circle cx="150" cy="150" r="30" fill="#222" stroke="#F5A623" strokeWidth="2" />
                                    <circle cx="150" cy="150" r="15" fill="#F5A623" />

                                    <defs>
                                        <linearGradient id="productTyreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="#2a2a2a" />
                                            <stop offset="50%" stopColor="#1a1a1a" />
                                            <stop offset="100%" stopColor="#0a0a0a" />
                                        </linearGradient>
                                        <radialGradient id="productRimGradient" cx="30%" cy="30%">
                                            <stop offset="0%" stopColor="#3a3a3a" />
                                            <stop offset="100%" stopColor="#1a1a1a" />
                                        </radialGradient>
                                    </defs>
                                </svg>
                                <div className="products__tyre-ring"></div>
                            </div>
                        </div>

                        <div className="products__info">
                            <span className="products__info-category">{products[activeIndex].category}</span>
                            <h3 className="products__info-name">{products[activeIndex].name}</h3>
                            <p className="products__info-tagline">{products[activeIndex].tagline}</p>
                            <p className="products__info-description">{products[activeIndex].description}</p>

                            <ul className="products__info-features">
                                {products[activeIndex].features.map((feature, index) => (
                                    <li key={index}>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <circle cx="8" cy="8" r="8" fill="rgba(245, 166, 35, 0.2)" />
                                            <path d="M5 8L7 10L11 6" stroke="#F5A623" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <div className="products__info-footer">
                                <span className="products__info-price">{products[activeIndex].price}</span>
                                <a href="#contact" className="btn btn-primary">
                                    Get Quote
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Products;

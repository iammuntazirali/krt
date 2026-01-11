import { useEffect, useRef, useState } from 'react';
import './Stats.css';

const Stats = () => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    const stats = [
        { value: 15, suffix: '+', label: 'Years of Excellence' },
        { value: 50, suffix: 'K+', label: 'Happy Customers' },
        { value: 100, suffix: '+', label: 'Tyre Models' },
        { value: 500, suffix: '+', label: 'Dealers Nationwide' },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                });
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section className="stats" ref={sectionRef}>
            <div className="stats__bg">
                <div className="stats__line stats__line--1"></div>
                <div className="stats__line stats__line--2"></div>
            </div>

            <div className="container">
                <div className="stats__grid">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className={`stats__item ${isVisible ? 'animate-in' : ''}`}
                            style={{ animationDelay: `${index * 0.15}s` }}
                        >
                            <div className="stats__value">
                                <CountUp
                                    end={stat.value}
                                    isVisible={isVisible}
                                    delay={index * 150}
                                />
                                <span className="stats__suffix">{stat.suffix}</span>
                            </div>
                            <div className="stats__label">{stat.label}</div>
                            <div className="stats__glow"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// CountUp Component
const CountUp = ({ end, isVisible, delay }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isVisible) return;

        const timeout = setTimeout(() => {
            const duration = 2000;
            const steps = 60;
            const increment = end / steps;
            let current = 0;

            const timer = setInterval(() => {
                current += increment;
                if (current >= end) {
                    setCount(end);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(current));
                }
            }, duration / steps);

            return () => clearInterval(timer);
        }, delay);

        return () => clearTimeout(timeout);
    }, [isVisible, end, delay]);

    return <span>{count}</span>;
};

export default Stats;

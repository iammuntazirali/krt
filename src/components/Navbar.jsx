import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Products', href: '#products' },
        { name: 'Features', href: '#features' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
            <div className="navbar__container container">
                {/* Logo */}
                <a href="#home" className="navbar__logo">
                    <span className="navbar__logo-icon">
                        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2" />
                            <circle cx="20" cy="20" r="12" stroke="currentColor" strokeWidth="2" />
                            <circle cx="20" cy="20" r="6" fill="currentColor" />
                            <path d="M20 2L20 8M20 32L20 38M2 20L8 20M32 20L38 20" stroke="currentColor" strokeWidth="2" />
                        </svg>
                    </span>
                    <span className="navbar__logo-text">KRT</span>
                </a>

                {/* Desktop Navigation */}
                <ul className="navbar__links">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a href={link.href} className="navbar__link">
                                {link.name}
                                <span className="navbar__link-underline"></span>
                            </a>
                        </li>
                    ))}
                </ul>

                {/* CTA Button */}
                <div className="navbar__actions">
                    <a href="#contact" className="btn btn-primary navbar__cta">
                        Get Quote
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className={`navbar__toggle ${isMobileMenuOpen ? 'active' : ''}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`navbar__mobile ${isMobileMenuOpen ? 'active' : ''}`}>
                <ul className="navbar__mobile-links">
                    {navLinks.map((link, index) => (
                        <li key={link.name} style={{ animationDelay: `${index * 0.1}s` }}>
                            <a
                                href={link.href}
                                className="navbar__mobile-link"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
                <a href="#contact" className="btn btn-primary navbar__mobile-cta">
                    Get Quote
                </a>
            </div>
        </nav>
    );
};

export default Navbar;

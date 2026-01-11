import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        Products: [
            { name: 'Passenger Tyres', href: '#' },
            { name: 'SUV Tyres', href: '#' },
            { name: 'Commercial Tyres', href: '#' },
            { name: 'Off-Road Tyres', href: '#' },
        ],
        Company: [
            { name: 'About Us', href: '#about' },
            { name: 'Dealers', href: '#' },
            { name: 'Careers', href: '#' },
            { name: 'News', href: '#' },
        ],
        Support: [
            { name: 'Contact', href: '#contact' },
            { name: 'FAQs', href: '#' },
            { name: 'Warranty', href: '#' },
            { name: 'Tyre Care', href: '#' },
        ],
    };

    const socialLinks = [
        {
            name: 'Facebook',
            href: '#',
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
            ),
        },
        {
            name: 'Instagram',
            href: '#',
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
            ),
        },
        {
            name: 'Twitter',
            href: '#',
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
            ),
        },
        {
            name: 'LinkedIn',
            href: '#',
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
            ),
        },
    ];

    return (
        <footer className="footer" id="about">
            <div className="container">
                {/* Top Section */}
                <div className="footer__top">
                    {/* Brand */}
                    <div className="footer__brand">
                        <a href="#home" className="footer__logo">
                            <span className="footer__logo-icon">
                                <svg viewBox="0 0 40 40" fill="none">
                                    <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2" />
                                    <circle cx="20" cy="20" r="12" stroke="currentColor" strokeWidth="2" />
                                    <circle cx="20" cy="20" r="6" fill="currentColor" />
                                    <path d="M20 2L20 8M20 32L20 38M2 20L8 20M32 20L38 20" stroke="currentColor" strokeWidth="2" />
                                </svg>
                            </span>
                            <span className="footer__logo-text">KRT</span>
                        </a>
                        <p className="footer__tagline">
                            Beyond Expectations. Premium tyres engineered for performance,
                            designed for excellence.
                        </p>

                        {/* Social Links */}
                        <div className="footer__social">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    className="footer__social-link"
                                    aria-label={social.name}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    <div className="footer__links">
                        {Object.entries(footerLinks).map(([title, links]) => (
                            <div key={title} className="footer__links-group">
                                <h4 className="footer__links-title">{title}</h4>
                                <ul className="footer__links-list">
                                    {links.map((link) => (
                                        <li key={link.name}>
                                            <a href={link.href} className="footer__link">
                                                {link.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="footer__bottom">
                    <p className="footer__copyright">
                        © {currentYear} KRT Tyres. All rights reserved.
                    </p>
                    <div className="footer__legal">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

import './CTA.css';

const CTA = () => {
    return (
        <section className="cta section" id="contact">
            {/* Background Effects */}
            <div className="cta__bg">
                <div className="cta__gradient"></div>
                <div className="cta__particles">
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="cta__particle"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 5}s`,
                                animationDuration: `${3 + Math.random() * 4}s`,
                            }}
                        ></div>
                    ))}
                </div>
            </div>

            <div className="container">
                <div className="cta__content">
                    {/* Animated Border */}
                    <div className="cta__border"></div>

                    {/* Icon */}
                    <div className="cta__icon">
                        <svg viewBox="0 0 80 80" fill="none">
                            <circle cx="40" cy="40" r="36" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                            <circle cx="40" cy="40" r="24" stroke="currentColor" strokeWidth="2" />
                            <circle cx="40" cy="40" r="12" fill="currentColor" />
                        </svg>
                    </div>

                    <h2 className="cta__title">
                        Ready to Hit the <span className="gradient-text">Road</span>?
                    </h2>

                    <p className="cta__description">
                        Get in touch with our experts to find the perfect tyres for your vehicle.
                        Free consultation and competitive pricing guaranteed.
                    </p>

                    <div className="cta__actions">
                        <a href="tel:+911234567890" className="btn btn-primary cta__btn">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M18 14.5V17.5C18 17.79 17.7 18.05 17.35 18.1C12.25 18.7 7.35 15.55 4.4 11.6C1.45 7.65 1.15 3.25 2.9 1.65C3.1 1.45 3.35 1.35 3.65 1.35H6.65C7.05 1.35 7.4 1.6 7.55 1.95L8.85 5.05C8.95 5.35 8.9 5.7 8.7 5.95L7.1 8.05C8.5 10.7 10.7 12.9 13.35 14.3L15.45 12.7C15.7 12.5 16.05 12.45 16.35 12.55L19.45 13.85C19.8 14 20.05 14.35 20.05 14.75L18 14.5Z" stroke="currentColor" strokeWidth="1.5" />
                            </svg>
                            Call Now
                        </a>
                        <a href="mailto:info@krt.com" className="btn btn-secondary cta__btn">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
                                <path d="M2 6L10 11L18 6" stroke="currentColor" strokeWidth="1.5" />
                            </svg>
                            Email Us
                        </a>
                    </div>

                    {/* Contact Info */}
                    <div className="cta__info">
                        <div className="cta__info-item">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <circle cx="8" cy="6" r="2" stroke="currentColor" strokeWidth="1.5" />
                                <path d="M8 14C8 14 14 10 14 6C14 2.69 11.31 0 8 0C4.69 0 2 2.69 2 6C2 10 8 14 8 14Z" stroke="currentColor" strokeWidth="1.5" />
                            </svg>
                            <span>kalim razvi tyre, Mumbai, India</span>
                        </div>
                        <div className="cta__info-item">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
                                <path d="M8 4V8L11 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                            <span>Mon - Sat: 9:00 AM - 8:00 PM</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;

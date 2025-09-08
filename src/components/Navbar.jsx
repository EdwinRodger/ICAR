import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';
import logo from '/icar-logo.png';

export const Navbar = () => {
    const { t, i18n } = useTranslation();
    const [showLanguageModal, setShowLanguageModal] = useState(false);
    const navbarRef = useRef(null);
    const brandRef = useRef(null);
    const navLinksRef = useRef(null);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setShowLanguageModal(false);
    };

    const languages = [
        { code: 'en', name: 'English', nativeName: 'English' },
        { code: 'hi', name: 'Hindi', nativeName: 'हिंदी' }
    ];

    useEffect(() => {
        // Navbar animation
        gsap.fromTo(
            navbarRef.current,
            { y: -100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
        );

        // Brand animation
        gsap.fromTo(
            brandRef.current,
            { x: -50, opacity: 0 },
            { x: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 0.5 }
        );

        // Nav links animation
        if (navLinksRef.current) {
            gsap.fromTo(
                navLinksRef.current.children,
                { y: -20, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: "power2.out",
                    delay: 0.8
                }
            );

            // Add hover animation to nav links
            const navLinks = navLinksRef.current.children;
            Array.from(navLinks).forEach(link => {
                link.addEventListener('mouseenter', () => {
                    gsap.to(link, {
                        scale: 1.05,
                        duration: 0.3,
                        ease: "power2.out"
                    });
                });
                link.addEventListener('mouseleave', () => {
                    gsap.to(link, {
                        scale: 1,
                        duration: 0.3,
                        ease: "power2.out"
                    });
                });
            });
        }
    }, []);

    return (
        <>
            {/* Brand/Logo - Always at the top, centered */}
            <div ref={navbarRef} className="bg-success-subtle py-2">
                <div className="container d-flex flex-column align-items-center">
                    <a ref={brandRef} className="d-flex align-items-center justify-content-center" href="#home">
                        <img src={logo} alt="ICAR Logo" className="me-2" style={{ height: '60px' }} />
                        <div className="text-center">
                            <h1 className="mb-0">SmartFarm AI</h1>
                            <p className="mb-0 small">Developed by ICAR-NSRI & IITI under AgriHub Project</p>
                        </div>
                        <img src="https://www.iiti.ac.in/public/themes/iitindore/demos/update-logo.png" alt="IITI Logo" className="ms-2" style={{ height: '60px' }} />
                    </a>
                </div>
            </div>

            {/* Links and Translate - md+ screens only */}
            <nav ref={navbarRef} className="navbar navbar-expand d-none d-md-flex bg-success-subtle border-bottom">
                <div className="container">
                    <ul ref={navLinksRef} className="navbar-nav flex-row justify-content-center w-100 mb-2 mb-lg-0">
                        <li className="nav-item mx-2">
                            <a className="nav-link text-black text-decoration-underline" href="#home">
                                <b>{t('nav.home')}</b>
                            </a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link text-black text-decoration-underline" href="#features">
                                <b>{t('features.title')}</b>
                            </a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link text-black text-decoration-underline" href="#diseases">
                                <b>Disease & Insect Prediction</b>
                            </a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link text-black text-decoration-underline" href="#crops">
                                <b>{t('crops.title')}</b>
                            </a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link text-black text-decoration-underline" href="#contact">
                                <b>Contact Us</b>
                            </a>
                        </li>
                    </ul>
                    <button
                        className="btn btn-outline-success mt-2 d-flex"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#languageModal"
                    >
                        <i className="bi bi-translate me-1"></i>
                        हिंदी
                    </button>
                </div>
            </nav>

            {/* Mobile Navbar - sm screens only */}
            <nav className="navbar navbar-expand-md d-md-none bg-success-subtle border-bottom">
                <div className="container">
                    {/* Hamburger Menu Button */}
                    <button
                        className="navbar-toggler ms-auto"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavMobile"
                        aria-controls="navbarNavMobile"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavMobile">
                        <ul className="navbar-nav text-center w-100">
                            <li className="nav-item">
                                <a className="nav-link text-black text-decoration-underline" href="#home">
                                    <b>{t('nav.home')}</b>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-black text-decoration-underline" href="#features">
                                    <b>{t('features.title')}</b>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-black text-decoration-underline" href="#diseases">
                                    <b>{t('diseases.title')}</b>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-black text-decoration-underline" href="#weather">
                                    <b>{t('weather.title')}</b>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-black text-decoration-underline" href="#crops">
                                    <b>{t('crops.title')}</b>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-black text-decoration-underline" href="#contact">
                                    <b>Contact Us</b>
                                </a>
                            </li>
                        </ul>
                        <button
                            className="btn btn-outline-success w-100 mt-2"
                            type="button"
                            data-bs-toggle="modal"
                            data-bs-target="#languageModal"
                        >
                            <i className="bi bi-translate me-1"></i>
                            हिंदी
                        </button>
                    </div>
                </div>
            </nav>

            {/* Language Selection Modal */}
            <div
                className="modal fade"
                id="languageModal"
                tabIndex="-1"
                aria-labelledby="languageModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="languageModalLabel">
                                {t('language.title', 'Select Language')}
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <div className="list-group">
                                {languages.map((language) => (
                                    <button
                                        key={language.code}
                                        className={`list-group-item list-group-item-action ${i18n.language === language.code ? 'active' : ''}`}
                                        onClick={() => changeLanguage(language.code)}
                                        data-bs-dismiss="modal"
                                    >
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div>
                                                <span className="fw-bold">{language.nativeName}</span>
                                                <br />
                                                <small className="text-muted">{language.name}</small>
                                            </div>
                                            {i18n.language === language.code && (
                                                <i className="bi bi-check-circle-fill"></i>
                                            )}
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}; 
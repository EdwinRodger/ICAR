import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import logo from '/icar-logo.png';

export const Navbar = () => {
    const navbarRef = useRef(null);
    const brandRef = useRef(null);
    const navLinksRef = useRef(null);

    useEffect(() => {
        // Navbar entrance animation
        gsap.fromTo(navbarRef.current,
            { y: -100, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
        );

        // Brand animation
        gsap.fromTo(brandRef.current,
            { scale: 0.8, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.6, delay: 0.2, ease: "back.out(1.7)" }
        );

        // Nav links animation
        gsap.fromTo(navLinksRef.current.children,
            { y: -20, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.5,
                stagger: 0.1,
                delay: 0.3,
                ease: "power2.out"
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
    }, []);

    return (
        <nav ref={navbarRef} className="navbar navbar-expand-lg navbar-dark bg-success-subtle">
            <div className="container">
                <a ref={brandRef} className="navbar-brand d-flex align-items-center" href="#home">
                    <img src={logo} alt="ICAR Logo" className="me-2" style={{ width: '40px' }} />
                    <div>
                        <h2 className="mb-0 fs-4">SmartFarm AI</h2>
                        <p className="mb-0 small">Powered by ICAR-IISR</p>
                    </div>
                </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div ref={navLinksRef} className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link text-black text-decoration-underline" href="#home"><b>Home</b></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-black text-decoration-underline" href="#features"><b>Features</b></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-black text-decoration-underline" href="#diseases"><b>Disease ID</b></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-black text-decoration-underline" href="#weather"><b>Weather</b></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-black text-decoration-underline" href="#crops"><b>Crop Guide</b></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-black text-decoration-underline" href="#contact"><b>Contact</b></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}; 
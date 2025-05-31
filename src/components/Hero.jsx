import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const Hero = () => {
    const heroRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const descriptionRef = useRef(null);
    const buttonsRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Hero section animation
        const heroTimeline = gsap.timeline();
        heroTimeline
            .fromTo(titleRef.current,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
            )
            .fromTo(subtitleRef.current,
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
                "-=0.6"
            )
            .fromTo(descriptionRef.current,
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
                "-=0.6"
            )
            .fromTo(buttonsRef.current,
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
                "-=0.6"
            )
            .fromTo(imageRef.current,
                { x: 50, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
                "-=0.6"
            );

        // Features section animation
        gsap.fromTo(".feature-card",
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: "#features",
                    start: "top 70%",
                    toggleActions: "play none none reverse"
                }
            }
        );

        // Disease section animation
        gsap.fromTo("#diseases .col-lg-6",
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: "#diseases",
                    start: "top 70%",
                    toggleActions: "play none none reverse"
                }
            }
        );

        // Weather section animation
        gsap.fromTo("#weather .card",
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: "#weather",
                    start: "top 70%",
                    toggleActions: "play none none reverse"
                }
            }
        );

        // Crop guide section animation
        gsap.fromTo("#crops .card",
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: "#crops",
                    start: "top 70%",
                    toggleActions: "play none none reverse"
                }
            }
        );

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <main ref={heroRef}>
            {/* Hero Section */}
            <section id="home" className="py-5 bg-light">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <h1 ref={titleRef} className="display-4 fw-bold text-success mb-3">Your Smart Farming Assistant</h1>
                            <p ref={subtitleRef} className="lead text-success mb-3">AI-Powered Agricultural Solutions</p>
                            <p ref={descriptionRef} className="mb-4">
                                Get personalized crop recommendations, identify plant diseases instantly,
                                and access real-time weather forecasts. Make smarter farming decisions
                                with our comprehensive agricultural toolkit.
                            </p>
                            <div ref={buttonsRef} className="d-flex gap-3">
                                <a href="#features" className="btn btn-success">Explore Features</a>
                                <a href="#diseases" className="btn btn-outline-success">Try Disease ID</a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <img
                                ref={imageRef}
                                src="https://placehold.co/600x400.png"
                                alt="Smart Farming"
                                className="img-fluid rounded-3"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-5">
                <div className="container">
                    <h2 className="text-center text-success mb-5">Smart Features</h2>
                    <div className="row g-4">
                        <div className="col-md-4">
                            <div className="card h-100 border-success feature-card">
                                <div className="card-body text-center">
                                    <i className="bi bi-camera display-4 text-success mb-3"></i>
                                    <h3 className="h5">Disease Identification</h3>
                                    <p>Upload plant images for instant disease detection and treatment recommendations.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card h-100 border-success feature-card">
                                <div className="card-body text-center">
                                    <i className="bi bi-cloud-sun display-4 text-success mb-3"></i>
                                    <h3 className="h5">Weather Forecast</h3>
                                    <p>Get accurate weather predictions and farming advisories for your location.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card h-100 border-success feature-card">
                                <div className="card-body text-center">
                                    <i className="bi bi-flower3 display-4 text-success mb-3"></i>
                                    <h3 className="h5">Crop Planning</h3>
                                    <p>Receive personalized crop recommendations based on soil and climate data.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Disease Identification Section */}
            <section id="diseases" className="py-5 bg-light">
                <div className="container">
                    <h2 className="text-center text-success mb-5">Plant Disease Identification</h2>
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <img
                                src="https://placehold.co/600x400.png"
                                alt="Disease Identification"
                                className="img-fluid rounded-3 mb-4 mb-lg-0"
                            />
                        </div>
                        <div className="col-lg-6">
                            <h3 className="text-success mb-4">Identify Diseases Instantly</h3>
                            <ul className="list-unstyled">
                                <li className="mb-3">
                                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                                    Upload plant images for instant analysis
                                </li>
                                <li className="mb-3">
                                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                                    Get detailed disease information
                                </li>
                                <li className="mb-3">
                                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                                    Receive treatment recommendations
                                </li>
                                <li className="mb-3">
                                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                                    Access preventive measures
                                </li>
                            </ul>
                            <button className="btn btn-success">Try Disease ID</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Weather Section */}
            <section id="weather" className="py-5">
                <div className="container">
                    <h2 className="text-center text-success mb-5">Weather & Farming Advisory</h2>
                    <div className="row g-4">
                        <div className="col-md-6">
                            <div className="card border-success h-100">
                                <div className="card-body">
                                    <h3 className="h5 text-success mb-3">Real-time Weather</h3>
                                    <img
                                        src="https://placehold.co/600x300.png"
                                        alt="Weather Forecast"
                                        className="img-fluid rounded mb-3"
                                    />
                                    <p>Get accurate weather forecasts and farming advisories for your location.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card border-success h-100">
                                <div className="card-body">
                                    <h3 className="h5 text-success mb-3">Farming Advisory</h3>
                                    <ul className="list-unstyled">
                                        <li className="mb-2"><i className="bi bi-calendar-check text-success me-2"></i>Optimal planting dates</li>
                                        <li className="mb-2"><i className="bi bi-droplet text-success me-2"></i>Irrigation scheduling</li>
                                        <li className="mb-2"><i className="bi bi-shield-check text-success me-2"></i>Pest control timing</li>
                                        <li className="mb-2"><i className="bi bi-sun text-success me-2"></i>Harvest recommendations</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Crop Guide Section */}
            <section id="crops" className="py-5 bg-light">
                <div className="container">
                    <h2 className="text-center text-success mb-5">Smart Crop Planning</h2>
                    <div className="row g-4">
                        <div className="col-md-4">
                            <div className="card h-100 border-success">
                                <img src="https://placehold.co/600x400.png" className="card-img-top" alt="Crop Planning" />
                                <div className="card-body">
                                    <h3 className="h5 text-success">Crop Selection</h3>
                                    <p>Get personalized crop recommendations based on your soil type and local climate.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card h-100 border-success">
                                <img src="https://placehold.co/600x400.png" className="card-img-top" alt="Growing Guide" />
                                <div className="card-body">
                                    <h3 className="h5 text-success">Growing Guide</h3>
                                    <p>Access detailed growing instructions and best practices for your selected crops.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card h-100 border-success">
                                <img src="https://placehold.co/600x400.png" className="card-img-top" alt="Market Insights" />
                                <div className="card-body">
                                    <h3 className="h5 text-success">Market Insights</h3>
                                    <p>Stay informed about market trends and demand for your crops.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-5">
                <div className="container">
                    <h2 className="text-center text-success mb-5">Get in Touch</h2>
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="card border-success">
                                <div className="card-body">
                                    <form>
                                        <div className="mb-3">
                                            <input type="text" className="form-control" placeholder="Your Name" required />
                                        </div>
                                        <div className="mb-3">
                                            <input type="email" className="form-control" placeholder="Your Email" required />
                                        </div>
                                        <div className="mb-3">
                                            <textarea className="form-control" rows="5" placeholder="Your Message" required></textarea>
                                        </div>
                                        <button type="submit" className="btn btn-success">Send Message</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}; 
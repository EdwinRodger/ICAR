import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslation } from 'react-i18next';
import '../i18n';

export const Hero = () => {
    const { t } = useTranslation();
    const heroRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const descriptionRef = useRef(null);
    const buttonsRef = useRef(null);
    const imageRef = useRef(null);

    // useEffect(() => {
    //     gsap.registerPlugin(ScrollTrigger);

    //     // Hero section animation
    //     const heroTimeline = gsap.timeline();
    //     heroTimeline
    //         .fromTo(titleRef.current,
    //             { y: 50, opacity: 0 },
    //             { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
    //         )
    //         .fromTo(subtitleRef.current,
    //             { y: 30, opacity: 0 },
    //             { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
    //             "-=0.6"
    //         )
    //         .fromTo(descriptionRef.current,
    //             { y: 30, opacity: 0 },
    //             { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
    //             "-=0.6"
    //         )
    //         .fromTo(buttonsRef.current,
    //             { y: 20, opacity: 0 },
    //             { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
    //             "-=0.6"
    //         )
    //         .fromTo(imageRef.current,
    //             { x: 50, opacity: 0 },
    //             { x: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
    //             "-=0.6"
    //         );

    //     // Add hover animations to buttons
    //     const buttons = buttonsRef.current.querySelectorAll('.btn');
    //     buttons.forEach(button => {
    //         button.addEventListener('mouseenter', () => {
    //             gsap.to(button, {
    //                 scale: 1.05,
    //                 duration: 0.3,
    //                 ease: "power2.out"
    //             });
    //         });
    //         button.addEventListener('mouseleave', () => {
    //             gsap.to(button, {
    //                 scale: 1,
    //                 duration: 0.3,
    //                 ease: "power2.out"
    //             });
    //         });
    //     });

    //     // Features section animation with hover effects
    //     gsap.fromTo(".feature-card",
    //         { y: 50, opacity: 0 },
    //         {
    //             y: 0,
    //             opacity: 1,
    //             duration: 0.8,
    //             stagger: 0.2,
    //             ease: "power2.out",
    //             scrollTrigger: {
    //                 trigger: "#features",
    //                 start: "top 70%",
    //                 toggleActions: "play none none reverse"
    //             }
    //         }
    //     );

    //     // Add hover animations to feature cards
    //     const featureCards = document.querySelectorAll('.feature-card');
    //     featureCards.forEach(card => {
    //         card.addEventListener('mouseenter', () => {
    //             gsap.to(card, {
    //                 y: -10,
    //                 boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
    //                 duration: 0.3,
    //                 ease: "power2.out"
    //             });
    //         });
    //         card.addEventListener('mouseleave', () => {
    //             gsap.to(card, {
    //                 y: 0,
    //                 boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    //                 duration: 0.3,
    //                 ease: "power2.out"
    //             });
    //         });
    //     });

    //     // Disease section animation with hover effects
    //     gsap.fromTo("#diseases .col-lg-6",
    //         { y: 50, opacity: 0 },
    //         {
    //             y: 0,
    //             opacity: 1,
    //             duration: 0.8,
    //             stagger: 0.2,
    //             ease: "power2.out",
    //             scrollTrigger: {
    //                 trigger: "#diseases",
    //                 start: "top 70%",
    //                 toggleActions: "play none none reverse"
    //             }
    //         }
    //     );

    //     // Add hover animations to disease section buttons
    //     const diseaseButtons = document.querySelectorAll("#diseases .btn");
    //     diseaseButtons.forEach(button => {
    //         button.addEventListener('mouseenter', () => {
    //             gsap.to(button, {
    //                 scale: 1.05,
    //                 duration: 0.3,
    //                 ease: "power2.out"
    //             });
    //         });
    //         button.addEventListener('mouseleave', () => {
    //             gsap.to(button, {
    //                 scale: 1,
    //                 duration: 0.3,
    //                 ease: "power2.out"
    //             });
    //         });
    //     });

    //     // Weather section animation with hover effects
    //     // gsap.fromTo("#weather .card",
    //     //     { y: 50, opacity: 0 },
    //     //     {
    //     //         y: 0,
    //     //         opacity: 1,
    //     //         duration: 0.8,
    //     //         stagger: 0.2,
    //     //         ease: "power2.out",
    //     //         scrollTrigger: {
    //     //             trigger: "#weather",
    //     //             start: "top 70%",
    //     //             toggleActions: "play none none reverse"
    //     //         }
    //     //     }
    //     // );

    //     // Add hover animations to weather cards
    //     const weatherCards = document.querySelectorAll("#weather .card");
    //     weatherCards.forEach(card => {
    //         card.addEventListener('mouseenter', () => {
    //             gsap.to(card, {
    //                 y: -10,
    //                 boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
    //                 duration: 0.3,
    //                 ease: "power2.out"
    //             });
    //         });
    //         card.addEventListener('mouseleave', () => {
    //             gsap.to(card, {
    //                 y: 0,
    //                 boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    //                 duration: 0.3,
    //                 ease: "power2.out"
    //             });
    //         });
    //     });

    //     // Crop guide section animation with hover effects
    //     gsap.fromTo("#crops .card",
    //         { y: 50, opacity: 0 },
    //         {
    //             y: 0,
    //             opacity: 1,
    //             duration: 0.8,
    //             stagger: 0.2,
    //             ease: "power2.out",
    //             scrollTrigger: {
    //                 trigger: "#crops",
    //                 start: "top 70%",
    //                 toggleActions: "play none none reverse"
    //             }
    //         }
    //     );

    //     // Add hover animations to crop cards
    //     const cropCards = document.querySelectorAll("#crops .card");
    //     cropCards.forEach(card => {
    //         card.addEventListener('mouseenter', () => {
    //             gsap.to(card, {
    //                 y: -10,
    //                 boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
    //                 duration: 0.3,
    //                 ease: "power2.out"
    //             });
    //         });
    //         card.addEventListener('mouseleave', () => {
    //             gsap.to(card, {
    //                 y: 0,
    //                 boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    //                 duration: 0.3,
    //                 ease: "power2.out"
    //             });
    //         });
    //     });

    //     return () => {
    //         ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    //     };
    // }, []);

    return (
        <main ref={heroRef}>
            {/* Hero Section */}
            <section id="home" className="py-5 bg-light" style={{ paddingTop: '80px' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <h1 ref={titleRef} className=" fw-bold text-success mb-3">
                                {t('hero.title')}
                            </h1>
                            <p ref={subtitleRef} className="lead text-success mb-3">
                                Integrated smart decision support system for precision soybean farming
                            </p>
                            <p ref={descriptionRef} className="mb-4">
                                {t('hero.description')}
                            </p>
                            <div ref={buttonsRef} className="d-flex gap-3">
                                <a href="#features" className="btn btn-success">
                                    {t('hero.buttons.explore')}
                                </a>
                                <a href="#diseases" className="btn btn-outline-success">
                                    {t('hero.buttons.tryDisease')}
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <img
                                ref={imageRef}
                                src="/hero-logo-1.png"
                                alt="Smart Farming"
                                className="img-fluid rounded-3"
                                style={{ width: '600px', height: '400px', objectFit: 'fill' }}
                                width={600}
                                height={400}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-5">
                <div className="container">
                    <h2 className="text-center text-success mb-5">{t('features.title')}</h2>
                    <div className="row g-4 justify-content-center">
                        <div className="col-md-4">
                            <div className="card h-100 border-success feature-card">
                                <div className="card-body text-center">
                                    <i className="bi bi-leaf-fill display-4 text-success mb-3"></i>
                                    <h3 className="h5">{t('features.disease.title')}</h3>
                                    <p>{t('features.disease.description')}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card h-100 border-success feature-card">
                                <div className="card-body text-center">
                                    <i className="bi bi-bug display-4 text-success mb-3"></i>
                                    <h3 className="h5">Insect Prediction</h3>
                                    <p>Enter your agri field details-Location, Date of Sowing and Crop Variety sown to get disease prediction based on climatic conditions.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card h-100 border-success feature-card">
                                <div className="card-body text-center">
                                    <i className="bi bi-cloud-sun display-4 text-success mb-3"></i>
                                    <h3 className="h5">{t('features.weather.title')}</h3>
                                    <p>{t('features.weather.description')}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card h-100 border-success feature-card">
                                <div className="card-body text-center">
                                    <div className="d-flex justify-content-center mb-3">
                                        <img src="/drone-green.png" alt="Drone SOP" className="img-fluid display-4 text-success" style={{ width: '56px', height: '56px', objectFit: 'contain' }} />
                                    </div>
                                    <h3 className="h5">Drone SOP for Soybean</h3>
                                    <p>Get Standard Operating Procedure (SOP) for drone spraying in Soybean Crop</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card h-100 border-success feature-card">
                                <div className="card-body text-center">
                                    <i className="bi bi-robot display-4 text-success mb-3"></i>
                                    <h3 className="h5">AI Chat Bot</h3>
                                    <p>Get expert guidance powered by AI</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Disease Identification Section */}
            <section id="diseases" className="py-5 bg-light">
                <div className="container">
                    <h2 className="text-center text-success mb-5">{t('diseases.title')}</h2>
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <img
                                src="https://scontent-bom2-3.xx.fbcdn.net/v/t39.30808-6/304910627_440792361412616_7706182859402633115_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=NRybpUgq0YQQ7kNvwFuJZm-&_nc_oc=AdnxrWglSqPFXUQ2yymmnpFErbWxfum_ytom5Thv1vg3OEEX04yb7-Hbc-WVzukin3n8eZDy0d5D2XNYYE3ntUdy&_nc_zt=23&_nc_ht=scontent-bom2-3.xx&_nc_gid=I2rV8pDDZG15JXbui8p91Q&oh=00_AfSZiN71Wo37roZmnexZaNnDTL9_U2KozXJ4r-GKpgidbA&oe=687A9D81"
                                alt="Disease Identification"
                                className="img-fluid rounded-3 mb-4 mb-lg-0"
                                style={{ width: '600px', height: '400px', objectFit: 'fill' }}
                            />
                        </div>
                        <div className="col-lg-6">
                            <h3 className="text-success mb-4">Get Disease Prediction</h3>
                            <ul className="list-unstyled">
                                <li className="mb-3">
                                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                                    Enter your agri field details - Location, Date of Sowing and Crop Variety sown
                                </li>
                                <li className="mb-3">
                                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                                    Get detailed disease prediction based on climatic conditions
                                </li>
                                <li className="mb-3">
                                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                                    Get disease information and treatment recommendations
                                </li>
                                <li className="mb-3">
                                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                                    Get AI expert advice for disease management
                                </li>
                            </ul>
                            <button className="btn btn-success">Click Here</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Weather Section */}
            <section id="weather" className="py-5 d-none">
                <div className="container">
                    <h2 className="text-center text-success mb-5">{t('weather.title')}</h2>
                    <div className="row g-4">
                        <div className="col-md-6">
                            <div className="card border-success h-100">
                                <div className="card-body">
                                    <h3 className="h5 text-success mb-3">{t('weather.realtime.title')}</h3>
                                    <img
                                        src="https://placehold.co/600x300.png"
                                        alt="Weather Forecast"
                                        className="img-fluid rounded mb-3"
                                    />
                                    <p>{t('weather.realtime.description')}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card border-success h-100">
                                <div className="card-body">
                                    <h3 className="h5 text-success mb-3">{t('weather.advisory.title')}</h3>
                                    <ul className="list-unstyled">
                                        <li className="mb-2">
                                            <i className="bi bi-calendar-check text-success me-2"></i>
                                            {t('weather.advisory.items.planting')}
                                        </li>
                                        <li className="mb-2">
                                            <i className="bi bi-droplet text-success me-2"></i>
                                            {t('weather.advisory.items.irrigation')}
                                        </li>
                                        <li className="mb-2">
                                            <i className="bi bi-shield-check text-success me-2"></i>
                                            {t('weather.advisory.items.pest')}
                                        </li>
                                        <li className="mb-2">
                                            <i className="bi bi-sun text-success me-2"></i>
                                            {t('weather.advisory.items.harvest')}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Crop Guide Section */}
            <section id="crops" className="py-5">
                <div className="container">
                    <h2 className="text-center text-success mb-5">{t('crops.title')}</h2>
                    <div className="row g-4">
                        <div className="col-md-4">
                            <div className="card h-100 border-success">
                                <div className="ratio ratio-1x1 card-img-top" style={{ overflow: 'hidden' }}>
                                    <img
                                        src="https://scontent-bom2-1.xx.fbcdn.net/v/t39.30808-6/517019122_1153166483508530_7455421039899486734_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=RyU58n2qeEUQ7kNvwFG4maV&_nc_oc=AdlK86xaQcsuuYN251YwYxHC_lkS5PcHXpsFwAr7gVUoI722jQXu8exf3q28VsmjH8KJ2MOFkEnqyzdTmQ_yDkqu&_nc_zt=23&_nc_ht=scontent-bom2-1.xx&_nc_gid=eYlniToJ8HzJ9IioqLuc5w&oh=00_AfRw_t61gncmDhVd3nwIp14W23kVw8KeD3xnXsW3zWB5pA&oe=687A9049"
                                        alt="Crop Advisory"
                                        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                                    />
                                </div>
                                <div className="card-body">
                                    <h3 className="h5 text-success">Crop Advisory</h3>
                                    <p>Get farmer advisory compiled by expert scientists team of ICAR-NSRI as per weather forecast</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card h-100 border-success">
                                <div className="ratio ratio-1x1 card-img-top" style={{ overflow: 'hidden' }}>
                                    <img
                                        src="https://scontent-bom1-2.xx.fbcdn.net/v/t39.30808-6/514665519_1149181580573687_2482724923229874791_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=okT6wZikbmgQ7kNvwEQwZyX&_nc_oc=AdmAyD56KExyU-qWgMcaqoKlXSwD7ztnR9JZL-0u-hKPDhZl7XejDE7HKrdhtHsjrGyGJNC2nIR5406Zmnz7HXu6&_nc_zt=23&_nc_ht=scontent-bom1-2.xx&_nc_gid=BTg1p_zEz2FZ3-kT5ElEnA&oh=00_AfQ78brq1jRSlxjU0v2L0y2JFYvwS-q9k2FYDdl5gbEc0w&oe=687AA089"
                                        alt="Recommended Package of Practice"
                                        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                                    />
                                </div>
                                <div className="card-body">
                                    <h3 className="h5 text-success">Recommended Package of Practice</h3>
                                    <p>Scientific recommendations generated under multi-locational research projects conducted by ICAR-NSRI</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card h-100 border-success">
                                <div className="ratio ratio-1x1 card-img-top" style={{ overflow: 'hidden' }}>
                                    <img
                                        src="/market-trend.png"
                                        alt="Market Trends"
                                        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                                    />
                                </div>
                                <div className="card-body">
                                    <h3 className="h5 text-success">Market Trends</h3>
                                    <p>Stay informed about market trends and current mandi rates</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-5 bg-light">
                <div className="container">
                    <h2 className="text-center text-success mb-5">Connect With Crop Expert</h2>
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="card border-success">
                                <div className="card-body">
                                    <form>
                                        <div className="mb-3">
                                            <input type="text" className="form-control" placeholder={t('contact.form.name')} required />
                                        </div>
                                        <div className="mb-3">
                                            <input type="email" className="form-control" placeholder={t('contact.form.email')} required />
                                        </div>
                                        <div className="mb-3">
                                            <textarea className="form-control" rows="5" placeholder={t('contact.form.message')} required></textarea>
                                        </div>
                                        <button type="submit" className="btn btn-success">{t('contact.form.submit')}</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main >
    );
}; 
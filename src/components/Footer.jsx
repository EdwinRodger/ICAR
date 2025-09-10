import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
    const { t } = useTranslation();
    const currentYear = new Date().getFullYear();
    const footerRef = useRef(null);
    const footerContentRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Footer entrance animation
        gsap.fromTo(footerRef.current,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: footerRef.current,
                    start: "top bottom-=100",
                    toggleActions: "play none none reverse"
                }
            }
        );

        // Animate footer content
        gsap.fromTo(footerContentRef.current.children,
            { y: 30, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.6,
                stagger: 0.1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: footerRef.current,
                    start: "top bottom-=100",
                    toggleActions: "play none none reverse"
                }
            }
        );

        // Add hover animation to footer links
        const footerLinks = footerRef.current.querySelectorAll('a');
        footerLinks.forEach(link => {
            link.addEventListener('mouseenter', () => {
                gsap.to(link, {
                    x: 5,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });
            link.addEventListener('mouseleave', () => {
                gsap.to(link, {
                    x: 0,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });
        });
    }, []);

    return (
        <footer ref={footerRef} className="bg-dark text-light py-5">
            <div ref={footerContentRef} className="container">
                <div className="row g-4">
                    {/* Contact/Institutes */}
                    <div className="col-lg-3 col-md-6">
                        <h3 className="h5 text-success mb-3">{t('branding.connectWithUs', 'Connect With Us')}</h3>
                        <div className="mb-4">
                            <h6 className="text-light mb-1">{t('footer.nsri.name', 'ICAR-NSRI (ICAR-National Soybean Research Institute)')}</h6>
                            <p className="mb-1">{t('footer.nsri.address1', 'Khandwa Road, Indore - 452001')}</p>
                            <p className="mb-1">{t('footer.nsri.address2', 'Madhya Pradesh, India')}</p>
                            <p className="mb-1"><i className="bi bi-telephone-fill me-2"></i>{t('footer.nsri.phone', '+91-731-2476188')}</p>
                            <p className="mb-1"><i className="bi bi-envelope-fill me-2"></i>{t('footer.nsri.email', 'director.iisr@icar.gov.in')}</p>
                            <a href="https://icar-nsri.res.in/" target="_blank" rel="noopener noreferrer" className="text-success small text-decoration-underline">{t('branding.visitNsri', 'Visit ICAR-NSRI Website')}</a>
                        </div>
                        <div className="mb-4">
                            <h6 className="text-light mb-1">{t('footer.iiti.name', 'IIT Indore (Indian Institute of Technology Indore)')}</h6>
                            <p className="mb-1">{t('footer.iiti.address1', 'Khandwa Road, Simrol, Indore - 453552')}</p>
                            <p className="mb-1">{t('footer.iiti.address2', 'Madhya Pradesh, India')}</p>
                            <p className="mb-1"><i className="bi bi-telephone-fill me-2"></i>{t('footer.iiti.phone', '+91-731-6603556')}</p>
                            <p className="mb-1"><i className="bi bi-envelope-fill me-2"></i>{t('footer.iiti.email', 'info@iiti.ac.in')}</p>
                            <a href="https://www.iiti.ac.in/" target="_blank" rel="noopener noreferrer" className="text-success small text-decoration-underline">{t('branding.visitIiti', 'Visit IIT Indore Website')}</a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="col-lg-3 col-md-6">
                        <h3 className="h5 text-success mb-3">{t('branding.quickLinks', 'Quick Links')}</h3>
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href="#home" className="text-light text-decoration-none">{t('nav.home', 'Home')}</a></li>
                            <li className="mb-2"><a href="#features" className="text-light text-decoration-none">{t('features.title', 'Features')}</a></li>
                            <li className="mb-2"><a href="#diseases" className="text-light text-decoration-none">{t('diseases.title', 'Disease ID')}</a></li>
                            <li className="mb-2"><a href="#weather" className="text-light text-decoration-none">{t('weather.title', 'Weather')}</a></li>
                            <li className="mb-2"><a href="#crops" className="text-light text-decoration-none">{t('crops.title', 'Crop Guide')}</a></li>
                            <li><a href="#contact" className="text-light text-decoration-none">{t('contact.title', 'Contact Us')}</a></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div className="col-lg-3 col-md-6">
                        <h3 className="h5 text-success mb-3">{t('branding.resources', 'Resources')}</h3>
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href="#blog" className="text-light text-decoration-none">{t('footer.resources.blog', 'Blog')}</a></li>
                            <li className="mb-2"><a href="#faq" className="text-light text-decoration-none">{t('footer.resources.faq', 'FAQ')}</a></li>
                            <li className="mb-2"><a href="#support" className="text-light text-decoration-none">{t('footer.resources.support', 'Support')}</a></li>
                            {/* <li className="mb-2"><a href="#api" className="text-light text-decoration-none">{t('footer.resources.api', 'API Docs')}</a></li> */}
                            <li><a href="https://play.google.com/store/apps/details?id=com.soybean_gyn&hl=en_IN" target="_blank" className="text-light text-decoration-none">{t('footer.resources.download', 'Download App')}</a></li>
                        </ul>
                    </div>

                    {/* Stay Connected: Social Media & Newsletter */}
                    <div className="col-lg-3 col-md-12">
                        {/* About/SmartFarm AI */}
                        <h3 className="h5 text-success mb-3">{t('branding.appName', 'SmartFarm AI')}</h3>
                        <p>{t('branding.footerAbout', 'Developed by ICAR-NSRI and IIT-Indore')}</p>

                        <h3 className="h5 text-success mb-3 mt-5">{t('branding.stayConnected', 'Stay Connected')}</h3>
                        <div className="d-flex gap-3 mb-3">
                            <a href="#" className="text-light"><i className="bi bi-facebook fs-4"></i></a>
                            <a href="#" className="text-light"><i className="bi bi-twitter-x fs-4"></i></a>
                            <a href="#" className="text-light"><i className="bi bi-linkedin fs-4"></i></a>
                            <a href="#" className="text-light"><i className="bi bi-instagram fs-4"></i></a>
                        </div>
                        <p className="small">{t('branding.newsletterPrompt', 'Subscribe to our newsletter for updates and farming tips.')}</p>
                        <div className="input-group mb-3">
                            <input type="email" className="form-control" placeholder={t('branding.yourEmail', 'Your email')} />
                            <button className="btn btn-success">{t('branding.subscribe', 'Subscribe')}</button>
                        </div>
                    </div>
                </div>

                <hr className="my-4" />

                <div className="row">
                    <div className="col-md-6 text-center text-md-start">
                        <p className="mb-0">&copy; {currentYear} {t('branding.copyright', 'SmartFarm AI. All rights reserved. Application developed under AgriHub: Innovation Hub for Agriculture (AI/ML & Deep Learning Center of Excellence) scheme')}</p>
                    </div>
                    <div className="col-md-6 text-center text-md-end">
                        <a href="#privacy" className="text-light text-decoration-none me-3">{t('branding.privacy', 'Privacy Policy')}</a>
                        <a href="#terms" className="text-light text-decoration-none me-3">{t('branding.terms', 'Terms of Service')}</a>
                        <a href="#sitemap" className="text-light text-decoration-none">{t('branding.sitemap', 'Sitemap')}</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}; 
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const Footer = () => {
    const currentYear = new Date().getFullYear();
    const footerRef = useRef(null);
    const footerContentRef = useRef(null);

    // useEffect(() => {
    //     gsap.registerPlugin(ScrollTrigger);

    //     // Footer entrance animation
    //     gsap.fromTo(footerRef.current,
    //         { y: 50, opacity: 0 },
    //         {
    //             y: 0,
    //             opacity: 1,
    //             duration: 0.8,
    //             ease: "power2.out",
    //             scrollTrigger: {
    //                 trigger: footerRef.current,
    //                 start: "top bottom-=100",
    //                 toggleActions: "play none none reverse"
    //             }
    //         }
    //     );

    //     // Animate footer content
    //     gsap.fromTo(footerContentRef.current.children,
    //         { y: 30, opacity: 0 },
    //         {
    //             y: 0,
    //             opacity: 1,
    //             duration: 0.6,
    //             stagger: 0.1,
    //             ease: "power2.out",
    //             scrollTrigger: {
    //                 trigger: footerRef.current,
    //                 start: "top bottom-=100",
    //                 toggleActions: "play none none reverse"
    //             }
    //         }
    //     );

    //     // Add hover animation to footer links
    //     const footerLinks = footerRef.current.querySelectorAll('a');
    //     footerLinks.forEach(link => {
    //         link.addEventListener('mouseenter', () => {
    //             gsap.to(link, {
    //                 x: 5,
    //                 duration: 0.3,
    //                 ease: "power2.out"
    //             });
    //         });
    //         link.addEventListener('mouseleave', () => {
    //             gsap.to(link, {
    //                 x: 0,
    //                 duration: 0.3,
    //                 ease: "power2.out"
    //             });
    //         });
    //     });
    // }, []);

    return (
        <footer ref={footerRef} className="bg-dark text-light py-5">
            <div ref={footerContentRef} className="container">
                <div className="row g-4">
                    {/* Contact/Institutes */}
                    <div className="col-lg-3 col-md-6">
                        <h3 className="h5 text-success mb-3">Connect With Us</h3>
                        <div className="mb-4">
                            <h6 className="text-light mb-1">ICAR-NSRI (ICAR-National Soybean Research Institute)</h6>
                            <p className="mb-1">Khandwa Road, Indore - 452001</p>
                            <p className="mb-1">Madhya Pradesh, India</p>
                            <p className="mb-1"><i className="bi bi-telephone-fill me-2"></i>+91-731-2476188</p>
                            <p className="mb-1"><i className="bi bi-envelope-fill me-2"></i>director.iisr@icar.gov.in</p>
                            <a href="https://icar-nsri.res.in/" target="_blank" rel="noopener noreferrer" className="text-success small text-decoration-underline">Visit ICAR-NSRI Website</a>
                        </div>
                        <div className="mb-4">
                            <h6 className="text-light mb-1">IIT Indore (Indian Institute of Technology Indore)</h6>
                            <p className="mb-1">Khandwa Road, Simrol, Indore - 453552</p>
                            <p className="mb-1">Madhya Pradesh, India</p>
                            <p className="mb-1"><i className="bi bi-telephone-fill me-2"></i>+91-731-6603556</p>
                            <p className="mb-1"><i className="bi bi-envelope-fill me-2"></i>info@iiti.ac.in</p>
                            <a href="https://www.iiti.ac.in/" target="_blank" rel="noopener noreferrer" className="text-success small text-decoration-underline">Visit IIT Indore Website</a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="col-lg-3 col-md-6">
                        <h3 className="h5 text-success mb-3">Quick Links</h3>
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href="#home" className="text-light text-decoration-none">Home</a></li>
                            <li className="mb-2"><a href="#features" className="text-light text-decoration-none">Features</a></li>
                            <li className="mb-2"><a href="#diseases" className="text-light text-decoration-none">Disease ID</a></li>
                            <li className="mb-2"><a href="#weather" className="text-light text-decoration-none">Weather</a></li>
                            <li className="mb-2"><a href="#crops" className="text-light text-decoration-none">Crop Guide</a></li>
                            <li><a href="#contact" className="text-light text-decoration-none">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div className="col-lg-3 col-md-6">
                        <h3 className="h5 text-success mb-3">Resources</h3>
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href="#blog" className="text-light text-decoration-none">Blog</a></li>
                            <li className="mb-2"><a href="#faq" className="text-light text-decoration-none">FAQ</a></li>
                            <li className="mb-2"><a href="#support" className="text-light text-decoration-none">Support</a></li>
                            <li className="mb-2"><a href="#api" className="text-light text-decoration-none">API Docs</a></li>
                            <li><a href="#download" className="text-light text-decoration-none">Download App</a></li>
                        </ul>
                    </div>

                    {/* Stay Connected: Social Media & Newsletter */}
                    <div className="col-lg-3 col-md-12">
                        {/* About/SmartFarm AI */}
                        <h3 className="h5 text-success mb-3">SmartFarm AI</h3>
                        <p>Developed by ICAR-NSRI and IIT-Indore</p>

                        <h3 className="h5 text-success mb-3 mt-5">Stay Connected</h3>
                        <div className="d-flex gap-3 mb-3">
                            <a href="#" className="text-light"><i className="bi bi-facebook fs-4"></i></a>
                            <a href="#" className="text-light"><i className="bi bi-twitter-x fs-4"></i></a>
                            <a href="#" className="text-light"><i className="bi bi-linkedin fs-4"></i></a>
                            <a href="#" className="text-light"><i className="bi bi-instagram fs-4"></i></a>
                        </div>
                        <p className="small">Subscribe to our newsletter for updates and farming tips.</p>
                        <div className="input-group mb-3">
                            <input type="email" className="form-control" placeholder="Your email" />
                            <button className="btn btn-success">Subscribe</button>
                        </div>
                    </div>
                </div>

                <hr className="my-4" />

                <div className="row">
                    <div className="col-md-6 text-center text-md-start">
                        <p className="mb-0">&copy; {currentYear} SmartFarm AI. All rights reserved. Application developed under AgriHub: Innovation Hub for Agriculture (AI/ML & Deep Learning Center of Excellence) scheme</p>
                    </div>
                    <div className="col-md-6 text-center text-md-end">
                        <a href="#privacy" className="text-light text-decoration-none me-3">Privacy Policy</a>
                        <a href="#terms" className="text-light text-decoration-none me-3">Terms of Service</a>
                        <a href="#sitemap" className="text-light text-decoration-none">Sitemap</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}; 
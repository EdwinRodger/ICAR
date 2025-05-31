import React from 'react';

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-dark text-light py-5 mt-5">
            <div className="container">
                <div className="row g-4">
                    <div className="col-lg-3 col-md-6">
                        <h3 className="h5 text-success mb-3">SmartFarm AI</h3>
                        <p>Powered by ICAR-IISR</p>
                        <p>Khandwa Road, Indore - 452001</p>
                        <p>Madhya Pradesh, India</p>
                        <div className="mt-3">
                            <p className="mb-2"><i className="bi bi-telephone-fill me-2"></i>+91-731-2479306</p>
                            <p><i className="bi bi-envelope-fill me-2"></i>support@smartfarm.ai</p>
                        </div>
                    </div>

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

                    <div className="col-lg-3 col-md-6">
                        <h3 className="h5 text-success mb-3">Resources</h3>
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href="#disease-guide" className="text-light text-decoration-none">Disease Guide</a></li>
                            <li className="mb-2"><a href="#pest-control" className="text-light text-decoration-none">Pest Control</a></li>
                            <li className="mb-2"><a href="#soil-analysis" className="text-light text-decoration-none">Soil Analysis</a></li>
                            <li className="mb-2"><a href="#crop-calendar" className="text-light text-decoration-none">Crop Calendar</a></li>
                            <li className="mb-2"><a href="#market-prices" className="text-light text-decoration-none">Market Prices</a></li>
                            <li><a href="#farming-tips" className="text-light text-decoration-none">Farming Tips</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <h3 className="h5 text-success mb-3">Connect With Us</h3>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <a href="https://icar.org.in" target="_blank" rel="noopener noreferrer" className="text-light text-decoration-none">
                                    ICAR Main Website
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="https://krishi.icar.gov.in" target="_blank" rel="noopener noreferrer" className="text-light text-decoration-none">
                                    Krishi Portal
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="https://farmer.gov.in" target="_blank" rel="noopener noreferrer" className="text-light text-decoration-none">
                                    Farmer Portal
                                </a>
                            </li>
                            <li className="mb-2"><a href="#download-app" className="text-light text-decoration-none">Download App</a></li>
                            <li className="mb-2"><a href="#newsletter" className="text-light text-decoration-none">Newsletter</a></li>
                            <li><a href="#support" className="text-light text-decoration-none">Support</a></li>
                        </ul>
                    </div>
                </div>

                <hr className="my-4" />

                <div className="row">
                    <div className="col-md-6 text-center text-md-start">
                        <p className="mb-0">&copy; {currentYear} SmartFarm AI. All rights reserved.</p>
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
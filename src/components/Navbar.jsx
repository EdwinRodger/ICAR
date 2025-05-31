import React from 'react';
import logo from '/icar-logo.png';

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-success-subtle">
            <div className="container">
                <a className="navbar-brand d-flex align-items-center" href="#home">
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

                <div className="collapse navbar-collapse" id="navbarNav">
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
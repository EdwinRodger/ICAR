import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Footer } from './components/Footer';

export const App = () => {
    return (
        <div className="App">
            <Navbar />
            <Hero />
            <Footer />
        </div>
    );
};

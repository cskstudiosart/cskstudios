import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Title from '../Title';
import ContactSection from '../ContactSection';

function Home() {
    Title('Home');
    return (
        <>
            <HeroSection />
            <ContactSection />
            <Cards />
        </>
    );
};

export default Home;
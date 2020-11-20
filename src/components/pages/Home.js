import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Title from '../Title';
import ContactSection from '../ContactSection';
import SocialSection from '../SocialSection';

function Home() {
    Title('Home');
    return (
        <>
            <HeroSection />
            <ContactSection />
            <SocialSection />
        </>
    );
};

export default Home;
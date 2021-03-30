import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Title from '../Title';
import ContactSection from '../ContactSection';
import SocialSection from '../SocialSection';
import BioSection from '../BioSection';
import GaleryCards from '../GaleryCards';

function Home() {
    Title('Home');
    return (
        <>
            <HeroSection />
            <GaleryCards />
            <BioSection />
            <ContactSection />
            <SocialSection />
        </>
    );
};

export default Home;
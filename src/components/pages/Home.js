import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Title from '../Title';

function Home() {
    Title('Home');
    return (
        <>
            <HeroSection />
            <Cards />
        </>
    );
};

export default Home;
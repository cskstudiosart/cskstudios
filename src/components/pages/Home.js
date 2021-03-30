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
            <section><HeroSection /></section>
            <section><GaleryCards /></section>
            <section><BioSection /></section>
            <section><ContactSection /></section>
            <section><SocialSection /></section>
        </>
    );
};

export default Home;
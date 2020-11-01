import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import Title from '../Title';

function About() {
    Title('About');
    return (
        <>
            <h1 className='about'>ABOUT</h1>
            <Footer />
        </>
    );
};

export default About;
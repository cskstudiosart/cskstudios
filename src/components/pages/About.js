import React from 'react';
import '../../App.css';
import Title from '../Title';
import AboutBody from '../About';

function About() {
    Title('About');
    return (
        <>
            <section>
            <AboutBody />
            </section>
        </>
    );
};

export default About;
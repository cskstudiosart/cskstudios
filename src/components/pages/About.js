import React from 'react';
import '../../App.css';
import Title from '../Title';

function About() {
    Title('About');
    return (
        <>
            <section>
            <h1 className='about'>ABOUT</h1>
            </section>
        </>
    );
};

export default About;
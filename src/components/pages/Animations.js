import React from 'react';
import '../../App.css';
import Title from '../Title';
import AnimationsCards from '../Animations';

function Animations() {
    Title('Animation');
    return (
        <>
            <section>
            <AnimationsCards />
            </section>
        </>
    );
};

export default Animations;
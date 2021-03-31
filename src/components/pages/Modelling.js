import React from 'react';
import '../../App.css';
import ModellingCards from '../ModellingCards';
import Title from '../Title';

function Modelling() {
    Title('Modelling');
    return (
        <>
            <section>
            <ModellingCards />
            </section>
        </>
    );
};

export default Modelling;
import React from 'react';
import '../../App.css';
import GaleryCards from '../GaleryCards';
import Title from '../Title';

function Galery() {
    Title('Galery');
    return (
        <>
            <section>
            <GaleryCards />
            </section>
        </>
    );
};

export default Galery;
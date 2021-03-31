import React from 'react';
import '../../App.css';
import Title from '../Title';
import DigitalArtCards from '../DigitalArtCards'

function DigitalArt() {
    Title('Digital Art');
    return (
        <>
            <section>
            <DigitalArtCards />
            </section>
        </>
    );
};

export default DigitalArt;
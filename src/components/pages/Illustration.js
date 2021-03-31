import React from 'react';
import '../../App.css';
import Title from '../Title';
import IllustrationCards from '../IllustrationCards';

function Illustration() {
    Title('Illustration');
    return (
        <>
            <section>
            <IllustrationCards />
            </section>
        </>
    );
};

export default Illustration;
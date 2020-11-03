import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import GaleryCards from '../GaleryCards';
import Title from '../Title';

function Galery() {
    Title('Galery');
    return (
        <>
            <GaleryCards />
            <Footer />
        </>
    );
};

export default Galery;
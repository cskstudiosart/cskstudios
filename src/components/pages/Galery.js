import React from 'react';
import '../../App.css';
import GaleryCards from '../GaleryCards';
import Title from '../Title';

function Galery() {
    Title('Galery');
    return (
        <>
            <GaleryCards />
        </>
    );
};

export default Galery;
import React from 'react';
import '../../App.css';
import Title from '../Title';
import HandDrawingCards from '../HandDrawingCards';

function HandDrawing() {
    Title('Hand Drawing');
    return (
        <>
            <HandDrawingCards />
        </>
    );
};

export default HandDrawing;
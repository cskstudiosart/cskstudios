import React from 'react';
import '../../App.css';
import Title from '../Title';
import HandDrawingCards from '../HandDrawingCards';
import ImageViewer from '../ImageViewer';

function HandDrawing() {
    Title('Hand Drawing');
    return (
        <>
            <HandDrawingCards />

            {/*ImageViewer(
                'Asd',
                'asd',
                'Test'
            )*/}

            {/*<ImageViewer text='Asd' src='asd' label='Test' />*/}
        </>
    );
};

export default HandDrawing;
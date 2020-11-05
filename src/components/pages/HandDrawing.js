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

            {/*<ImageViewer
                citext='Asd'
                cisrc='asd'
                cilabel='Test'
            />*/}
        </>
    );
};

export default HandDrawing;
import React from 'react';
import '../../App.css';
import Title from '../Title';

function Timelapse() {
    Title('Timelapse');
    return (
        <>
            <div className='cards'>
                <div className='cards__container'>
                    <div className='cards__wrapper'>
                        <h2>No timelapse have been made yet.</h2>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Timelapse;
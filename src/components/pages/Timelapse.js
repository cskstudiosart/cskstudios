import React from 'react';
import '../../App.css';
import Title from '../Title';

function Timelapse() {
    Title('Timelapse');
    return (
        <>
            <section>
            <div className='cards'>
                <div className='cards__container'>
                    <div className='cards__wrapper'>
                        <h2>Még nem készült egyetlen projekt sem a kategóriában.</h2>
                    </div>
                </div>
            </div>
            </section>
        </>
    );
};

export default Timelapse;
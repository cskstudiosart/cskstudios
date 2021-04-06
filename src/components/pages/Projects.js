import React from 'react';
import '../../App.css';
import Title from '../Title';

function Projects() {
    Title('Projects');
    return (
        <>
            <section>
            <div className='cards'>
                <div className='cards__container'>
                    <div className='cards__wrapper'>
                        <h2>Az oldal még szerkesztés alatt áll.</h2>
                    </div>
                </div>
            </div>
            </section>
        </>
    );
};

export default Projects;
import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import Title from '../Title';

function Contact() {
    Title('Contact');
    return (
        <>
            <h1 className='contact'>CONTACT</h1>
            <Footer />
        </>
    );
};

export default Contact;
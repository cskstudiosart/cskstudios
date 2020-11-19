import React from 'react';
import '../../App.css';
import Title from '../Title';
import ContactCards from '../ContactCards';

function Contact() {
    Title('Contact');
    return (
        <>
            <ContactCards />
        </>
    );
};

export default Contact;
import React from 'react';
import '../App.css';
import './ContactSection.css';

function ContactSection() {
    return (
        <>
            <div className='contact_section' id="contactsection" style={{backgroundImage: 'url(images/contact_section_banner_bg.png)'}}>
                <div className='contact_section__container'>
                    <div className='contact_section__wrapper'>
                        <div className='contact_section__img' style={{backgroundImage: 'url(images/contact_section_banner.png)'}}></div>
                        <div className='contact_section__data'>
                            <div className='contact_section__mail'>
                                <h2>Írjon bátran e-mail-ben</h2>
                                <h2><b  className='contact_section__data_bold'>cs.k.studios.art@gmail.com</b></h2>
                            </div>
                            <div className='contact_section__phone'>
                                <h2>Vagy akár kereshet telefonon is</h2>
                                <h2><b  className='contact_section__data_bold'>+36/70-550-26-43</b></h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactSection;
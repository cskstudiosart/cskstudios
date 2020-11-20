import React, {useState} from 'react';
import './ImageViewer.css';

// mail and phone cards
function ContactItem(propse) {
    return (
        <>
            <li className='c_cards__item'>
                <div className='c_cards__item__link' to={propse.path} style={{cursor: 'auto'}}>
                    <figure className='c_cards__item__pic-wrap-direct' data-category={propse.label}>
                        <div className='c_cards__item__image' style={{backgroundImage: 'url(images/contact/banner-'+propse.path+'.jpg)'}} />
                    </figure>
                    <div className='c_cards__item__info'>
                        <h5 className='c_cards__item__text'>{propse.text}<br /><b>{propse.text_data}</b></h5>
                    </div>
                </div>
            </li>
        </>
    )
}

// Social media cards
export function SocialMediaItem(propse) {
    return (
        <>
            <li className='c_cards__item'>
                <a href={propse.href} target='_blank' className='c_cards__item__link' to={propse.path}>
                    <figure className='c_cards__item__pic-wrap' data-category={propse.label}>
                        <div className='c_cards__item__image' style={{backgroundImage: 'url(images/contact/banner-'+propse.path+'.jpg)'}} />
                    </figure>
                </a>
            </li>
        </>
    )
}

export default ContactItem;

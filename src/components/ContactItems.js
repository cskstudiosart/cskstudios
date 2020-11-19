import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './ImageViewer.css';

// mail and phone cards
function ContactItem(propse) {
    return (
        <>
            <li className='cards__item'>
                <div className='cards__item__link' to={propse.path} style={{cursor: 'auto'}}>
                    <figure className='cards__item__pic-wrap-direct' data-category={propse.label}>
                        <div className='cards__item__image' style={{backgroundImage: 'url(images/contact/banner-'+propse.path+'.jpg)'}} />
                    </figure>
                    <div className='cards__item__info'>
                        <h5 className='cards__item__text'>{propse.text}<br /><b>{propse.text_data}</b></h5>
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
            <li className='cards__item'>
                <a href={propse.href} target='_blank' className='cards__item__link' to={propse.path}>
                    <figure className='cards__item__pic-wrap' data-category={propse.label}>
                        <div className='cards__item__image' style={{backgroundImage: 'url(images/contact/banner-'+propse.path+'.jpg)'}} />
                    </figure>
                </a>
            </li>
        </>
    )
}

export default ContactItem;

import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './ImageViewer.css';

function GaleryCardItem(propse) {
    return (
        <>
            <li className='gcards__item'>
                <Link className='gcards__item__link' to={propse.path}>
                    <figure className='gcards__item__pic-wrap' data-category={propse.label}>
                        <div className='gcards__item__image' style={{backgroundImage: 'url('+propse.src+')'}} />
                    </figure>
                    <div className='gcards__item__info'>
                        <h5 className='gcards__item__text'>{propse.text}</h5>
                    </div>
                </Link>
            </li>
        </>
    )
}

export default GaleryCardItem;

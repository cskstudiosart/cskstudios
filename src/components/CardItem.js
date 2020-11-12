import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './ImageViewer.css';

function CardItem(propse) {
    return (
        <>
            <li className='cards__item'>
                <Link className='cards__item__link' to={propse.path}>
                    <figure className='cards__item__pic-wrap' data-category={propse.label}>
                        <div className='cards__item__image' style={{backgroundImage: 'url('+propse.src+')'}} />
                    </figure>
                    <div className='cards__item__info'>
                        <h5 className='cards__item__text'>{propse.text}</h5>
                    </div>
                </Link>
            </li>
        </>
    )
}

export default CardItem;

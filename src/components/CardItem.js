import React from 'react';
import { Link } from 'react-router-dom';
import ImageViewer from './ImageViewer';

function CardItem(props) {
    return (
        <>
            <li className='cards__item'>
                <Link className='cards__item__link' to={props.path}>
                    <figure className='cards__item__pic-wrap' data-category={props.label}>
                        <div className='cards__item__image' style={{backgroundImage: 'url('+props.src+')'}} />
                    </figure>
                    <div className='cards__item__info'>
                        <h5 className='cards__item__text'>{props.text}</h5>
                    </div>
                </Link>
            </li>
        </>
    )
}

// Galériában kategórián belül kilistázott kép elem
// A lényeg, h nem Link van kattintásra, mint egy sima csepménél (CardItem), hanem fügvény
function ShowImage(currimg) {
    return (
        <>
            <ImageViewer
                text={currimg.citext}
                src={currimg.cisrc}
                label={currimg.cilabel}
            />
        </>
    )
}

function CardImage(props) {
    return (
        <>
            <li className='cards__item'>
                {/*<div className='cards__item__link' to={props.path} onClick={ShowImage('1')}>*/}
                <div className='cards__item__link' onClick={ShowImage('1')}>
                    <figure className='cards__item__pic-wrap' data-category={props.label}>
                        <div className='cards__item__image' style={{backgroundImage: 'url('+props.src+')'}} />
                    </figure>
                    <div className='cards__item__info'>
                        <h5 className='cards__item__text'>{props.text}</h5>
                    </div>
                </div>
            </li>
        </>
    )
}

export default CardImage;

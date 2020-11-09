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

export function CardImage(props) {
    const [ibutton, isetButton] = useState(false);

    // háttérre kattintva bezárja a megnyitott képet
    const closeImg = (e) => {
        if(e.target.classList.contains('backdrop-container')){
            isetButton(false);
        }
    }

    // megnyitott kép block
    const ImageViewerBlock = () => {
        if(ibutton == true) {
            return (
                <div className='backdrop-container' onClick={closeImg}>
                    <div className='backdrop-wrap'>
                        <div className='backdrop-item'>
                            <figure className='backdrop-item-pic-wrap' data-category={props.date}>
                                <img className='backdrop-image' alt={props.name} src={props.src} />
                            </figure>
                            <div className='backdrop-item-info'>
                                <h5 className='backdrop-item-text'>{props.name}</h5>
                            </div>
                        </div>
                        <div className='backdrop-close-icon' onClick={() => {isetButton(false)}}>
                            x
                        </div>
                    </div>
                </div>
            )
        } else {
            return(ibutton)
        }
    }

    // képek csempéi
    return (
        <>
            <li className='cards__item'>
                <div className='cards__item__link' onClick={() => {isetButton(true)}}>
                    <figure className='cards__item__pic-wrap' data-category={props.date}>
                        <div className='cards__item__image' style={{backgroundImage: 'url('+props.src+')'}} />
                    </figure>
                    <div className='cards__item__info'>
                        <h5 className='cards__item__text'>{props.name}</h5>
                    </div>
                </div>
                {ibutton && <ImageViewerBlock boole={ibutton} name={props.name} src={props.src} date={props.date} />}
            </li>
        </>
    )
}

export default CardItem;

import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { ImageViewer } from './ImageViewer';
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

// Galériában kategórián belül kilistázott kép elem
// A lényeg, h nem Link van kattintásra, mint egy sima csepménél (CardItem), hanem fügvény
/*function ShowImage(currimg) {
    return (
        <ImageViewer
            name={currimg.name}
            src={currimg.src}
            date={currimg.date}
        />
        /*ImageViewer(
            currimg.id,
            currimg.name,
            currimg.src,
            currimg.date,
            currimg.path
        )*/
        /*+console.log(currimg.src)
    )
}

const [click, setClick] = useState(false);
const [button, setButton] = useState(true);

const handleClick = () => setClick(!click);
const closeMobileMenu = () => setClick(false);

const showButton = () => {
    if(window.innerWidth <= 960) {
        setButton(false);
    } else {
        setButton(true);
    }
};*/

function CardImage(props) {
    const [ibutton, isetButton] = useState(false);

    return (
        <>
            <li className='cards__item' onClick={() => {!ibutton ? isetButton(true) : isetButton(false)}}>
                {/*<div className='cards__item__link' to={props.path} onClick={ShowImage('1')}>*/}
                <div className='cards__item__link' >
                    {/*ShowImage(props)*/}
                    <figure className='cards__item__pic-wrap' data-category={props.date}>
                        <div className='cards__item__image' style={{backgroundImage: 'url('+props.src+')'}} />
                    </figure>
                    <div className='cards__item__info'>
                        <h5 className='cards__item__text'>{props.name}</h5>
                    </div>
                </div>
                {ibutton && <ImageViewer boole={ibutton} name={props.name} src={props.src} date={props.date} />}
            </li>
        </>
    )
}

export default CardImage;

import React, {useState} from 'react';
import './Cards.css';
import './ImageViewer.css';


function AnimationsCards() {
    const animations = [
        /*
        
        START Nem publikus videók
        
        {
            vid: a, // id
            vname: 'Tűzoltás', // név
            vdate: '2021.04.08.', //dátum
            vurl: 'https://www.youtube.com/embed/r3jE2G1qujo',
        },
        {
            vid: b, // id
            vname: 'Tudatos Külpiaci Ismeretek - Szervezeti Ábra', // név
            vdate: '2021.04.08.', //dátum
            vurl: 'https://www.youtube.com/embed/NkvXDvjaOEo',
        },
        {
            vid: c, // id
            vname: 'Tudatos Külpiaci Ismeretek - Marketing Mix', // név
            vdate: '2021.04.08.', //dátum
            vurl: 'https://www.youtube.com/embed/CoFHGLLtFO0',
        },
        {
            vid: d, // id
            vname: 'Tudatos Külpiaci Ismeretek', // név
            vdate: '2021.04.08.', //dátum
            vurl: 'https://www.youtube.com/embed/jgKd1r5R4Qo',
        },
        {
            vid: e, // id
            vname: 'Veszélyes gépekre vonatkozó előírások', // név
            vdate: '2021.04.08.', //dátum
            vurl: 'https://www.youtube.com/embed/h0NUdZYRWgI',
        },
        {
            vid: f, // id
            vname: 'Közlekedés a raktárban', // név
            vdate: '2021.04.08.', //dátum
            vurl: 'https://www.youtube.com/embed/0T8hoQKnRRM',
        },
        {
            vid: g, // id
            vname: 'Munkaszervezési, gazdálkodási, foglalkoztatási és munkaügyi ismeretek Alkalmazás', // név
            vdate: '2021.04.08.', //dátum
            vurl: 'https://www.youtube.com/embed/j6EvR-hnVYc',
        },
        
        END Nem publikus videók
        
        */
        {
            vid: 0, // id
            vname: 'Futurope promotion', // név
            vdate: '2021.04.08.', //dátum
            vurl: 'https://www.youtube.com/embed/LxmTFbIgIgA',
        },
        {
            vid: 1, // id
            vname: 'Prosocent Promotion', // név
            vdate: '2021.04.08.', //dátum
            vurl: 'https://www.youtube.com/embed/G1H73lklzd4',
        },
        {
            vid: 2,
            vname: 'DARTKE Office - After Effects',
            vdate: '2021.04.08.',
            vurl: 'https://www.youtube.com/embed/k6S8PSgeJM4',
        },
        {
            vid: 3, // id
            vname: 'DARTKE Office - Blender', // név
            vdate: '2021.04.08.', //dátum
            vurl: 'https://www.youtube.com/embed/Utq8rZmqAIY',
        },
        {
            vid: 4, // id
            vname: 'Dekopír fűrész CAD modellje', // név
            vdate: '2021.04.08.', //dátum
            vurl: 'https://www.youtube.com/embed/ANnbbFpWcco',
        }
    ]


    const CardVideo = (props) => {
        const [ibutton, isetButton] = useState(false);
        const [currid, setCurrid] = useState(props.id);
    
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
                                <figure className='v_backdrop-item-pic-wrap'>
                                    <iframe 
                                        className='backdrop-image' 
                                        width="900" height="504" 
                                        src={animations[currid].vurl+"?autoplay=1"} 
                                        title="YouTube video player" 
                                        frameborder="0" 
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                        allowfullscreen="allowfullscreen">
                                    </iframe>
                                </figure>
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
                    <div className='cards__item__link' onClick={() => {isetButton(true);setCurrid(props.id)}}>
                        <figure className='cards__item__pic-wrap' data-category={props.date}>
                            <div className='cards__item__image' style={{backgroundImage: 'url(images/animations/img-animcover-'+props.id+'.jpg)'}} />
                        </figure>
                        <div className='cards__item__info'>
                            <h5 className='cards__item__text'>{props.name}</h5>
                        </div>
                    </div>
                    {/*ibutton && <ImageViewerBlock name={props.name} src={props.src} date={props.date} />*/}
                    {ibutton && ImageViewerBlock()}
                </li>
            </>
        )
    }



    return (
        <div className='cards'>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        {
                            animations.sort((a, b) => a.vid > b.vid ? 1:-1).map((img) => // .sort(itt állítjuk be a sorolást, pl id szerint).map(itt hozzuk létre a felsorolást)
                                <CardVideo
                                id={img.vid}
                                name={img.vname}
                                date={img.vdate}
                                />
                            )
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AnimationsCards;
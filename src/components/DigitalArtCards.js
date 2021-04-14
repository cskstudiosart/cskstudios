import React, {useState} from 'react';
import './Cards.css';
import './ImageViewer.css';


function DigitalArtCards() {
    const digitalart = [
        {
            cid: 0, // id
            cname: 'Portré: Baranyi Luca', // név
            cdate: '2020.04.06.', //dátum
            ctext: '', // esetleges pár mondatos leírás, ha van a képhez (nagyítás után jeleink csak meg)
        },
        {
            cid: 1,
            cname: 'Portré: Baranyi Vendel Valentin',
            cdate: '2020.10.04.',
            ctext: '',
        },
        {
            cid: 2,
            cname: 'Portré: Iványi Réka',
            cdate: '2019.07.29.',
            ctext: 'Portré Iványi Rékáról szemüvegben',
        },
        {
            cid: 3,
            cname: 'Portré: Iványi Réka',
            cdate: '2019.07.29.',
            ctext: 'Portré Iványi Rékáról szemüveg nélkül',
        },
        {
            cid: 4,
            cname: 'Portré egy lóról',
            cdate: '2019.10.16.',
            ctext: '',
        },
        {
            cid: 5,
            cname: 'Sebzett szív',
            cdate: '2019.07.29.',
            ctext: '',
        },
        {
            cid: 6,
            cname: 'Bökés',
            cdate: '2019.07.29.',
            ctext: '',
        },
        {
            cid: 7,
            cname: 'Csákány',
            cdate: '2019.07.29.',
            ctext: '',
        },
        {
            cid: 8,
            cname: 'Nő',
            cdate: '2019.07.29.',
            ctext: '',
        },
        {
            cid: 9,
            cname: 'Imádkozó kezek',
            cdate: '2019.07.29.',
            ctext: '',
        },
        {
            cid: 10,
            cname: 'Holdvirág',
            cdate: '2020.03.22.',
            ctext: '',
        },
        {
            cid: 11,
            cname: 'Színház',
            cdate: '2019.09.09.',
            ctext: '',
        },
        {
            cid: 12,
            cname: 'Freddie Mercury',
            cdate: '2019.07.29.',
            ctext: '',
        },
        {
            cid: 13,
            cname: 'Éjszakai táj',
            cdate: '2019.10.10.',
            ctext: '',
        }
    ]


    const CardImage = (props) => {
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
                                <figure className='backdrop-item-pic-wrap' data-category={digitalart[currid].cdate}>
                                    <img className='backdrop-image' alt={digitalart[currid].cname} src={'images/digitalart/img-digitalart-'+digitalart[currid].cid+'.jpg'} />
                                    <div className='backdrop-nav-container'>
                                        {
                                        // navigáció 
                                        currid > 0 &&
                                            <div className='backdrop-nav-left' onClick={() => setCurrid(currid-1)}>
                                                <div className='backdrop-nav-left-icon'></div>
                                            </div>
                                        }
                                        {currid < (digitalart.length-1) &&
                                            <div className='backdrop-nav-right' onClick={() => setCurrid(currid+1)}>
                                                <div className='backdrop-nav-right-icon'></div>
                                            </div>
                                        // navifógéció vége
                                        }
                                    </div>
                                </figure>
                                <div className='backdrop-item-info'>
                                    <h5 className='backdrop-item-text'>{digitalart[currid].cname}</h5>
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
                    <div className='cards__item__link' onClick={() => {isetButton(true);setCurrid(props.id)}}>
                        <figure className='cards__item__pic-wrap' data-category={props.date}>
                            <div className='cards__item__image' style={{backgroundImage: 'url(images/digitalart/img-digitalart-'+props.id+'.jpg)'}} />
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
                            digitalart.sort((a, b) => a.cid > b.cid ? 1:-1).map((img) => // .sort(itt állítjuk be a sorolást, pl id szerint).map(itt hozzuk létre a felsorolást)
                                <CardImage
                                id={img.cid}
                                name={img.cname}
                                date={img.cdate}
                                />
                            )
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default DigitalArtCards;
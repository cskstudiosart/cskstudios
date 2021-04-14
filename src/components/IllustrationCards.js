import React, {useState} from 'react';
import './Cards.css';
import './ImageViewer.css';


function IllustrationCards() {
    const handdrawings = [
        {
            cid: 0, // id
            cname: 'Véráram', // név
            cdate: '2019.09.09.', //dátum
            ctext: '', // esetleges pár mondatos leírás, ha van a képhez (nagyítás után jeleink csak meg)
        },
        {
            cid: 1,
            cname: 'Druid Banner',
            cdate: '2019.04.22.',
            ctext: '',
        },
        {
            cid: 2,
            cname: 'Druid Head',
            cdate: '2019.04.22.',
            ctext: '',
        },
        {
            cid: 3,
            cname: 'Sátány szabin',
            cdate: '2020.03.15.',
            ctext: '',
        },
        {
            cid: 4,
            cname: 'Csillag robbanás',
            cdate: '2019.07.29.',
            ctext: '',
        },
        {
            cid: 5,
            cname: 'Csont szerkezete',
            cdate: '2019.09.09.',
            ctext: '',
        },
        {
            cid: 6,
            cname: 'Csontok halmaza',
            cdate: '2019.09.09.',
            ctext: '',
        },
        {
            cid: 7,
            cname: 'Kígyó',
            cdate: '2019.07.15.',
            ctext: '',
        },
        {
            cid: 8,
            cname: 'Úszó ember',
            cdate: '2019.11.22.',
            ctext: '',
        },
        {
            cid: 9,
            cname: 'Szódás flakon',
            cdate: '2019.10.10.',
            ctext: '',
        },
        {
            cid: 10,
            cname: 'Hippogryph',
            cdate: '2019.10.10.',
            ctext: '',
        },
        {
            cid: 11,
            cname: 'Pteromyini',
            cdate: '2019.10.10.',
            ctext: '',
        },
        {
            cid: 12,
            cname: 'Repülő denevér',
            cdate: '2019.10.10.',
            ctext: '',
        },
        {
            cid: 13,
            cname: 'Hidroplan',
            cdate: '2019.10.10.',
            ctext: '',
        },
        {
            cid: 14,
            cname: 'Bagoly - Sport logo',
            cdate: '2019.10.10.',
            ctext: '',
        },
        {
            cid: 15,
            cname: 'Dartke - Disney logo',
            cdate: '2019.10.10.',
            ctext: '',
        },
        {
            cid: 16,
            cname: 'Dartke - Disney logo',
            cdate: '2019.10.10.',
            ctext: '',
        },
        {
            cid: 17,
            cname: 'Cafe&Balls - Logó változatok',
            cdate: '2019.07.09.',
            ctext: '',
        },
        {
            cid: 18,
            cname: 'Cafe&Balls - Logó egy csészén',
            cdate: '2019.07.09.',
            ctext: '',
        },
        {
            cid: 19,
            cname: 'Cafe&Balls - Logó egy üvegpoháron',
            cdate: '2019.07.09.',
            ctext: '',
        },
        {
            cid: 20,
            cname: 'One4All - Logó',
            cdate: '2019.10.17.',
            ctext: '',
        },
        {
            cid: 21,
            cname: 'Halott ember a hullaházban',
            cdate: '2019.09.24.',
            ctext: '',
        },
        {
            cid: 22,
            cname: 'Szív',
            cdate: '2019.09.17.',
            ctext: '',
        },
        {
            cid: 23,
            cname: 'Üvöltő ember',
            cdate: '2019.09.18.',
            ctext: '',
        },
        {
            cid: 24,
            cname: 'Izom görcs',
            cdate: '2019.09.18.',
            ctext: '',
        },
        {
            cid: 25,
            cname: 'Moai',
            cdate: '2020.10.19.',
            ctext: '',
        },
        {
            cid: 26,
            cname: 'Az agy és a szív vitája',
            cdate: '2020.10.19.',
            ctext: '',
        },
        {
            cid: 27,
            cname: 'Elutasítás',
            cdate: '2020.10.19.',
            ctext: '',
        },
        {
            cid: 28,
            cname: 'Kézenfogva',
            cdate: '2020.10.19.',
            ctext: '',
        },
        {
            cid: 29,
            cname: 'Munkavédelmi sisak',
            cdate: '2019.12.11.',
            ctext: '',
        },
        {
            cid: 30,
            cname: 'Törött Munkavédelmi sisak',
            cdate: '2019.12.11.',
            ctext: '',
        },
        {
            cid: 31,
            cname: 'Kínai elektromos autó',
            cdate: '2020.07.24.',
            ctext: '',
        },
        {
            cid: 32,
            cname: 'Arnold edzés közben',
            cdate: '2020.07.24.',
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
                                <figure className='backdrop-item-pic-wrap' data-category={handdrawings[currid].cdate}>
                                    <img className='backdrop-image' alt={handdrawings[currid].cname} src={'images/illustration/img-illustration-'+handdrawings[currid].cid+'.jpg'} />
                                    <div className='backdrop-nav-container'>
                                        {
                                        // navigáció 
                                        currid > 0 &&
                                            <div className='backdrop-nav-left' onClick={() => setCurrid(currid-1)}>
                                                <div className='backdrop-nav-left-icon'></div>
                                            </div>
                                        }
                                        {currid < (handdrawings.length-1) &&
                                            <div className='backdrop-nav-right' onClick={() => setCurrid(currid+1)}>
                                                <div className='backdrop-nav-right-icon'></div>
                                            </div>
                                        // navifógéció vége
                                        }
                                    </div>
                                </figure>
                                <div className='backdrop-item-info'>
                                    <h5 className='backdrop-item-text'>{handdrawings[currid].cname}</h5>
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
                            <div className='cards__item__image' style={{backgroundImage: 'url(images/illustration/img-illustration-'+props.id+'.jpg)'}} />
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
                            handdrawings.sort((a, b) => a.cid > b.cid ? 1:-1).map((img) => // .sort(itt állítjuk be a sorolást, pl id szerint).map(itt hozzuk létre a felsorolást)
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

export default IllustrationCards;
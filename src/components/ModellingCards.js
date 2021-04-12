import React, {useState} from 'react';
import './Cards.css';
import './ImageViewer.css';


function ModellingCards() {
    const modells = [
        {
            cid: 0, // id
            cname: 'Office - 1', // név
            cdate: '2019.12.11.', //dátum
            ctext: '', // esetleges pár mondatos leírás, ha van a képhez (nagyítás után jeleink csak meg)
        },
        {
            cid: 1,
            cname: 'Office - 2',
            cdate: '2019.12.11.',
            ctext: '',
        },
        {
            cid: 2,
            cname: 'Office - 3',
            cdate: '2019.12.11.',
            ctext: '',
        },
        {
            cid: 3,
            cname: 'Office - 4',
            cdate: '2019.12.11.',
            ctext: '',
        },
        {
            cid: 4,
            cname: 'Office - 5',
            cdate: '2019.12.11.',
            ctext: '',
        },
        {
            cid: 5,
            cname: 'Office - 6',
            cdate: '2019.12.11.',
            ctext: '',
        },
        {
            cid: 6,
            cname: 'Office - 7',
            cdate: '2019.12.11.',
            ctext: '',
        },
        {
            cid: 7,
            cname: 'Office - 8',
            cdate: '2020.01.07.',
            ctext: '',
        },
        {
            cid: 8,
            cname: 'Office - 9',
            cdate: '2020.01.07.',
            ctext: '',
        },
        {
            cid: 9,
            cname: 'Office - 10',
            cdate: '2020.01.07.',
            ctext: '',
        },
        {
            cid: 10,
            cname: 'Office - 11',
            cdate: '2020.01.07.',
            ctext: '',
        },
        {
            cid: 11,
            cname: 'Office - 12',
            cdate: '2020.01.07.',
            ctext: '',
        },
        {
            cid: 12,
            cname: 'Office - 13',
            cdate: '2020.01.07.',
            ctext: '',
        },
        {
            cid: 13,
            cname: 'Office - 14',
            cdate: '2020.01.07.',
            ctext: '',
        },
        {
            cid: 14,
            cname: 'Tea & Donut',
            cdate: '2020.01.29.',
            ctext: '',
        },
        {
            cid: 15,
            cname: 'Tea with Sugar',
            cdate: '2020.01.09.',
            ctext: '',
        },
        {
            cid: 16,
            cname: 'Tea',
            cdate: '2020.01.06.',
            ctext: '',
        },
        {
            cid: 17,
            cname: 'Donut',
            cdate: '2019.11.25.',
            ctext: '',
        },
        {
            cid: 18,
            cname: 'Train in Winter - 1',
            cdate: '2020.02.18.',
            ctext: '',
        },
        {
            cid: 19,
            cname: 'Train in Winter - 2',
            cdate: '2020.02.04.',
            ctext: '',
        },
        {
            cid: 20,
            cname: 'Living Room - 1',
            cdate: '2020.04.08.',
            ctext: '',
        },
        {
            cid: 21,
            cname: 'Living Room - 2',
            cdate: '2020.04.08.',
            ctext: '',
        },
        {
            cid: 22,
            cname: 'Satu',
            cdate: '2015.05.05.',
            ctext: '',
        }
        ,
        {
            cid: 23,
            cname: 'BMX',
            cdate: '2015.09.13.',
            ctext: '',
        }
        ,
        {
            cid: 24,
            cname: 'BMX - Kerék',
            cdate: '2015.09.13.',
            ctext: '',
        }
        ,
        {
            cid: 25,
            cname: 'BMX - Hajtás',
            cdate: '2015.09.13.',
            ctext: '',
        }
        ,
        {
            cid: 26,
            cname: 'BMX',
            cdate: '2015.19.13.',
            ctext: '',
        }
        ,
        {
            cid: 27,
            cname: 'Csavart polc oldalról',
            cdate: '2015.01.25.',
            ctext: '',
        }
        ,
        {
            cid: 28,
            cname: 'Csavart polc szemből',
            cdate: '2015.01.25.',
            ctext: '',
        }
        ,
        {
            cid: 29,
            cname: 'Íróasztal',
            cdate: '2015.01.25.',
            ctext: '',
        }
        ,
        {
            cid: 30,
            cname: 'Íróasztal nyitott ajtóval',
            cdate: '2015.01.25.',
            ctext: '',
        }
        ,
        {
            cid: 31,
            cname: 'Zsanér',
            cdate: '2015.03.22.',
            ctext: '',
        }
        ,
        {
            cid: 32,
            cname: 'Zsanér',
            cdate: '2015.03.22',
            ctext: '',
        }
        ,
        {
            cid: 33,
            cname: 'Mérnöki asztal - Szintező szerkezet',
            cdate: '2015.01.25.',
            ctext: '',
        }
        ,
        {
            cid: 34,
            cname: 'Mérnöki asztal - Fiók',
            cdate: '2015.01.25.',
            ctext: '',
        }
        ,
        {
            cid: 35,
            cname: 'Mérnöki asztal',
            cdate: '2015.01.25.',
            ctext: '',
        }
        ,
        {
            cid: 36,
            cname: 'Mérnöki asztal',
            cdate: '2015.01.25.',
            ctext: '',
        }
        ,
        {
            cid: 37,
            cname: 'Mérnöki asztal',
            cdate: '2015.01.25.',
            ctext: '',
        }
        ,
        {
            cid: 38,
            cname: 'Napszemüveg',
            cdate: '2015.11.29.',
            ctext: '',
        }
        ,
        {
            cid: 39,
            cname: 'Napszemüveg',
            cdate: '2015.11.29.',
            ctext: '',
        }
        ,
        {
            cid: 40,
            cname: 'Napszemüveg',
            cdate: '2015.11.29.',
            ctext: '',
        }
        ,
        {
            cid: 41,
            cname: '3D Puzzle - Jeep',
            cdate: '2014.10.11.',
            ctext: '',
        }
        ,
        {
            cid: 42,
            cname: '3D Puzzle - Jeep',
            cdate: '2014.10.11.',
            ctext: '',
        }
        ,
        {
            cid: 43,
            cname: '3D Puzzle - Jeep',
            cdate: '2014.10.11.',
            ctext: '',
        }
        ,
        {
            cid: 44,
            cname: '3D Puzzle - Jeep',
            cdate: '2014.10.11.',
            ctext: '',
        }
        ,
        {
            cid: 45,
            cname: '3D Puzzle - Jeep',
            cdate: '2014.10.11.',
            ctext: '',
        }
        ,
        {
            cid: 46,
            cname: '3D Puzzle - Jeep',
            cdate: '2014.10.11.',
            ctext: '',
        }
        ,
        {
            cid: 47,
            cname: 'Szerszám befogó',
            cdate: '2015.10.12.',
            ctext: '',
        }
        ,
        {
            cid: 48,
            cname: 'ROSA palack',
            cdate: '2015.12.08.',
            ctext: '',
        }
        ,
        {
            cid: 49,
            cname: 'Étkészlet',
            cdate: '2016.01.18.',
            ctext: '',
        }
        ,
        {
            cid: 50,
            cname: 'Golyóstoll',
            cdate: '2016.01.18.',
            ctext: '',
        }
        ,
        {
            cid: 51,
            cname: 'Dekopír fűrész',
            cdate: '2016.06.02.',
            ctext: '',
        }
        ,
        {
            cid: 52,
            cname: 'Dekopír fűrész',
            cdate: '2016.06.02.',
            ctext: '',
        }
        ,
        {
            cid: 53,
            cname: 'Dekopír fűrész - Hajtás',
            cdate: '2016.06.02.',
            ctext: '',
        }
        ,
        {
            cid: 54,
            cname: 'Dekopír fűrész - Lengőhimba',
            cdate: '2016.06.02.',
            ctext: '',
        }
        ,
        {
            cid: 55,
            cname: 'Dekopír fűrész - Robbantott',
            cdate: '2016.06.02.',
            ctext: '',
        }
        ,
        {
            cid: 56,
            cname: 'Dekopír fűrész - Lengőhimba',
            cdate: '2016.06.02.',
            ctext: '',
        }
        ,
        {
            cid: 57,
            cname: 'Dekopír fűrész - Belülnézet',
            cdate: '2016.06.02.',
            ctext: '',
        }
        ,
        {
            cid: 58,
            cname: 'Ajtózár',
            cdate: '2015.03.30.',
            ctext: '',
        }
        ,
        {
            cid: 59,
            cname: 'Ajtózár - Robbantott',
            cdate: '2015.03.30.',
            ctext: '',
        }
        ,
        {
            cid: 60,
            cname: 'Ajtózár - Belülnézet',
            cdate: '2015.03.30.',
            ctext: '',
        }
        ,
        {
            cid: 61,
            cname: 'Rebel Blockade Runner - LEGO Star Wars',
            cdate: '2014.09.16.',
            ctext: '',
        }
        ,
        {
            cid: 62,
            cname: 'Rebel Blockade Runner - LEGO Star Wars',
            cdate: '2014.09.16.',
            ctext: '',
        }
        ,
        {
            cid: 63,
            cname: 'Rebel Blockade Runner - LEGO Star Wars',
            cdate: '2014.09.16.',
            ctext: '',
        }
        ,
        {
            cid: 64,
            cname: 'Rebel Blockade Runner - LEGO Star Wars',
            cdate: '2014.09.16.',
            ctext: '',
        }
        ,
        {
            cid: 65,
            cname: 'Rebel Blockade Runner - LEGO Star Wars',
            cdate: '2014.09.16.',
            ctext: '',
        }
        ,
        {
            cid: 66,
            cname: 'Rebel Blockade Runner - LEGO Star Wars',
            cdate: '2014.09.16.',
            ctext: '',
        }
        ,
        {
            cid: 67,
            cname: 'Rebel Blockade Runner - LEGO Star Wars',
            cdate: '2014.09.16.',
            ctext: '',
        }
        ,
        {
            cid: 68,
            cname: 'Rebel Blockade Runner - LEGO Star Wars',
            cdate: '2014.09.16.',
            ctext: '',
        }
        ,
        {
            cid: 69,
            cname: 'Rebel Blockade Runner - LEGO Star Wars',
            cdate: '2014.09.16.',
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
                                <figure className='backdrop-item-pic-wrap' data-category={modells[currid].cdate}>
                                    <img className='backdrop-image' alt={modells[currid].cname} src={'images/modelling/img-modelling-'+modells[currid].cid+'.jpg'} />
                                    <div className='backdrop-nav-container'>
                                        {
                                        // navigáció 
                                        currid > 0 &&
                                            <div className='backdrop-nav-left' onClick={() => setCurrid(currid-1)}>
                                                <div className='backdrop-nav-left-icon'></div>
                                            </div>
                                        }
                                        {currid < (modells.length-1) &&
                                            <div className='backdrop-nav-right' onClick={() => setCurrid(currid+1)}>
                                                <div className='backdrop-nav-right-icon'></div>
                                            </div>
                                        // navifógéció vége
                                        }
                                    </div>
                                </figure>
                                <div className='backdrop-item-info'>
                                    <h5 className='backdrop-item-text'>{modells[currid].cname}</h5>
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
                            <div className='cards__item__image' style={{backgroundImage: 'url(images/modelling/img-modelling-'+props.id+'.jpg)'}} />
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
                            modells.sort((a, b) => a.cid > b.cid ? 1:-1).map((img) => // .sort(itt állítjuk be a sorolást, pl id szerint).map(itt hozzuk létre a felsorolást)
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

export default ModellingCards;
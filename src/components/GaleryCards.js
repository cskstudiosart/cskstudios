import React from 'react';
import GaleryCardItem from './GaleryCardItem';
import './GaleryCards.css';

function GaleryCards() {
    let categories = [
        {
            cid: '0', // id
            ctext: 'Kézzel készült, igazi papírra', // rövid leírás
            clabel: 'Kézi rajzok', //név
            cpath: 'handdrawing' // hivatkozási cím
        },
        {
            cid: '1',
            ctext: 'Digitalizáló táblával készítve',
            clabel: 'Digital Art',
            cpath: 'digitalart'
        },
        {
            cid: '2',
            ctext: 'Digitális illusztrációk, logók',
            clabel: 'Illusztrációk',
            cpath: 'illustration'
        },
        {
            cid: '3',
            ctext: '3D modellezés Blender és Solid Edge segítségével',
            clabel: 'Modellezés',
            cpath: 'modelling'
        },
        {
            cid: '4',
            ctext: '2D és 3D animációk, kisfilmek',
            clabel: 'Animációk',
            cpath: 'animation'
        },
        {
            cid: '5',
            ctext: 'Timelapse munka közben',
            clabel: 'Timelapse',
            cpath: 'timelapse'
        }
    ]
    return (
        <div className='gcards'>
            <div className='gcards__container'>
                <div className='gcards__wrapper'>
                    <ul className='gcards__items'>
                        {
                            categories.sort((a, b) => a.cid > b.cid ? 1:-1).map((category) => // .sort(itt állítjuk be a sorolást, pl id szerint).map(itt hozzuk létre a felsorolást)
                                <GaleryCardItem
                                src={'images/galery-cover-'+category.cid+'.jpg'}
                                text={category.ctext}
                                label={category.clabel}
                                path={'/'+category.cpath}
                                />
                            )
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default GaleryCards;
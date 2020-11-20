import React from 'react';
import GaleryCardItem from './GaleryCardItem';
import './GaleryCards.css';

function GaleryCards() {
    let categories = [
        {
            cid: '0', // id
            ctext: 'Handmade on real paper', // rövid leírás
            clabel: 'Hand drawing', //név
            cpath: 'handdrawing' // hivatkozási cím
        },
        {
            cid: '1',
            ctext: 'Made with a drawing tablet',
            clabel: 'Digital art',
            cpath: 'digitalart'
        },
        {
            cid: '2',
            ctext: 'Digital illustrations, logos',
            clabel: 'Illustration',
            cpath: 'illustration'
        },
        {
            cid: '3',
            ctext: '3D modelling, sculpting, texturing with Blender / Solid Edge, KeyShot',
            clabel: 'Modelling',
            cpath: 'modelling'
        },
        {
            cid: '4',
            ctext: '2D and 3D animations, short films',
            clabel: 'Animation',
            cpath: 'animation'
        },
        {
            cid: '5',
            ctext: 'Timelapse of my drawing, modelling',
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
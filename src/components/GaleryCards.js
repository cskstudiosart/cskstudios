import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function GaleryCards() {
    let categories = [
        {
            cid: '0', // id
            ctext: 'Handmade on real paper.', // rövid leírás
            clabel: 'Hand drawing', //név
            cpath: 'handdrawing' // hivatkozási cím
        },
        {
            cid: '1',
            ctext: 'Made with a drawing tablet.',
            clabel: 'Digital art',
            cpath: 'digitalart'
        },
        {
            cid: '2',
            ctext: 'Digital illustrations, logos.',
            clabel: 'Illustration',
            cpath: 'illustration'
        },
        {
            cid: '3',
            ctext: '3D modelling, sculpting, texturing with Blender / Solid Edge, KeyShot.',
            clabel: 'Modelling',
            cpath: 'modelling'
        },
        {
            cid: '4',
            ctext: '2D and 3D animations, short films.',
            clabel: 'Animation',
            cpath: 'animation'
        },
        {
            cid: '5',
            ctext: 'Timelapse of my drawing, modelling.',
            clabel: 'Timelapse',
            cpath: 'timelapse'
        }
    ]
    return (
        <div className='cards'>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        {
                            categories.sort((a, b) => a.cid > b.cid ? 1:-1).map((category) => // .sort(itt állítjuk be a sorolást, pl id szerint).map(itt hozzuk létre a felsorolást)
                                <CardItem
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
        /*<div className='cards'>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                        src='images/galery-cover-0.jpg'
                        text='Handmade on real paper.'
                        label='Hand drawing'
                        path='/handdrawing'
                        />
                        <CardItem
                        src='images/galery-cover-1.png'
                        text='Made with a drawing tablet.'
                        label='Digital art'
                        path='/digitalart'
                        />
                        <CardItem
                        src='images/galery-cover-2.png'
                        text='Digital illustrations, logos.'
                        label='Illustration'
                        path='/illustration'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                        src='images/galery-cover-3.png'
                        text='3D modelling, sculpting, texturing with Blender / Solid Edge, KeyShot.'
                        label='Modelling'
                        path='/modelling'
                        />
                        <CardItem
                        src='images/galery-cover-4.png'
                        text='2D and 3D animations, short films.'
                        label='Animation'
                        path='/animation'
                        />
                        <CardItem
                        src='images/galery-cover-5.jpg'
                        text='Timelapse of my drawing, modelling.'
                        label='Timelapse'
                        path='/timelapse'
                        />
                    </ul>
                </div>
            </div>
        </div>*/
    )
}

export default GaleryCards;
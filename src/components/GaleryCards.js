import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function GaleryCards() {
    return (
        <div className='cards'>
            <h1>Check out the result of my work.</h1>
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
                        text='2D and 2D animations, short films.'
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
        </div>
    )
}

export default GaleryCards;
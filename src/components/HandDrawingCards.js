import React from 'react';
import CardImage from './CardItem';
import './Cards.css';

function HandDrawingCards() {
    let handdrawings = [
        {
            cid: '1', // id
            cname: 'Half Face', // rövid leírás
            cdate: '2020.10.13.', //név
            ctext: '', // esetleges pár mondatos leírás, ha van a képhez (nagyítás után jeleink csak meg)
            cpath: 'img1' // hivatkozási cím
        },
        {
            cid: '2',
            cname: 'Test Name',
            cdate: '2020.11.05.',
            ctext: '',
            cpath: 'img2'
        },
        {
            cid: '3',
            cname: 'Test Name',
            cdate: '2020.11.05.',
            ctext: '',
            cpath: 'img2'
        }
    ]
    return (
        <div className='cards'>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        {
                            handdrawings.sort((a, b) => a.cdate > b.cdate ? 1:-1).map((img) => // .sort(itt állítjuk be a sorolást, pl id szerint).map(itt hozzuk létre a felsorolást)
                                <CardImage
                                src={'images/handdrawing/img-hnddrwng-'+img.cid+'.jpg'}
                                text={img.cname}
                                label={img.cdate}
                                path={'/'+img.cpath}
                                />
                            )
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default HandDrawingCards;
import React, {useState} from 'react';
import './ImageViewer.css';
/*import { icloseImage } from './CardItem';*/

export const ImageViewer = ({id, boole, name, src, date, path}) => {
    const [asd, setAsd] = useState(boole);

    const closeImg = () => setAsd(false);

    const ImageViewerBlock = () => {
        if(asd == true) {
            return (
                <div className='backdrop-container' onClick={() => setAsd(false)}>
                    <div className='backdrop-wrap'>
                        <div className='backdrop-item'>
                            <figure className='backdrop-item-pic-wrap' data-category={date}>
                                <img className='backdrop-image' alt={name} src={src} />
                            </figure>
                            <div className='backdrop-item-info'>
                                <h5 className='backdrop-item-text'>{name}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return(asd)
        }
    }

    return (
        <ImageViewerBlock />
    )
};
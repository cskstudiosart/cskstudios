import React from 'react';
import './ImageViewer.css';

function ImageViewer(props) {
    return (
        <>
            <div className='backdrop-container'>
                <div className='backdrop-wrap'>
                    <div className='backdrop-item'>
                        <figure className='backdrop-item-pic-wrap' data-category={props.label}>
                            <img className='backdrop-image' alt='Travel Image' src={props.src} />
                        </figure>
                        <div className='backdrop-item-info'>
                            <h5 className='backdrop-item-text'>{props.text}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ImageViewer;
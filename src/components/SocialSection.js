import React from 'react';
import './SocialSection.css';

function SMItem(propse) {
    return (
        <>
            <li className='scards__item'>
                <a href={propse.href} target='_blank' className='scards__item__link' to={propse.path}>
                    <figure className='scards__item__pic-wrap' data-category={propse.label}>
                        <div className='scards__item__image' style={{backgroundImage: 'url(images/contact/banner-'+propse.path+'.jpg)'}} />
                    </figure>
                </a>
            </li>
        </>
    )
}

function SocialSection() {
    return (
        <>
            <div className='scards'>
                <div className='scards__container'>
                    <div className='scards__wrapper'>
                        <h2>Or follow me on social media</h2>
                        <ul className='scards__items'>
                            <SMItem
                            label='Facebook'
                            path='facebook'
                            href='https://facebook.com/csakany97'
                            />
                            <SMItem
                            label='Instagram'
                            path='instagram'
                            href='https://instagram.com/csakany97'
                            />
                            <SMItem
                            label='Discord'
                            path='discord'
                            href='https://discord.gg/qkkMRdvNCd'
                            />
                            <SMItem
                            label='YouTube'
                            path='youtube'
                            href='https://www.youtube.com/channel/UCv9jtH_mvPAJvELDrGCPMKQ/featured'
                            />
                            <SMItem
                            label='Twitch'
                            path='twitch'
                            href='https://twitch.tv/varditv97'
                            />
                        </ul>
                        <h2></h2>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SocialSection;
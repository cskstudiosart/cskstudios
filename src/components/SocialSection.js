import React from 'react';
import './SocialSection.css';

function SMItem(propse) {
    return (
        <>
            <li className='s_cards__item'>
                <a href={propse.href} target='_blank' className='s_cards__item__link' to={propse.path}>
                    <figure className='s_cards__item__pic-wrap' data-category={propse.label}>
                        <div className='s_cards__item__image' style={{backgroundImage: 'url(images/contact/banner-'+propse.path+'.jpg)'}} />
                    </figure>
                </a>
            </li>
        </>
    )
}

function SocialSection() {
    return (
        <>
            <div className='s_cards'>
                <div className='s_cards__container'>
                    <div className='s_cards__wrapper'>
                        <h2>Vagy kövessen be</h2>
                        <ul className='s_cards__items'>
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
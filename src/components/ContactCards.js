import React from 'react';
import ContactItem, {SocialMediaItem} from './ContactItems';
import './ContactCards.css';

function ContactCards() {
    return (
        <div className='cards'>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <h2>Contact us directly</h2>
                    <ul className='cards__items'>
                        <ContactItem
                        text='Write a message by e-mail:'
                        text_data='cs.k.studios.art@gmail.com'
                        label='E-mail'
                        path='mail'
                        />
                        <ContactItem
                        text='Call by phone:'
                        text_data='+36/70-550-26-43'
                        label='Phone'
                        path='phone'
                        />
                    </ul>
                </div>
            </div>

            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <h2>Or follow me on social media</h2>
                    <ul className='cards__items'>
                        <SocialMediaItem
                        label='Facebook'
                        path='facebook'
                        href='https://facebook.com/csakany97'
                        />
                        <SocialMediaItem
                        label='Instagram'
                        path='instagram'
                        href='https://instagram.com/csakany97'
                        />
                        <SocialMediaItem
                        label='Discord'
                        path='discord'
                        href='https://discord.gg/qkkMRdvNCd'
                        />
                        <SocialMediaItem
                        label='YouTube'
                        path='youtube'
                        href='https://www.youtube.com/channel/UCv9jtH_mvPAJvELDrGCPMKQ/featured'
                        />
                        <SocialMediaItem
                        label='Twitch'
                        path='twitch'
                        href='https://twitch.tv/varditv97'
                        />
                    </ul>
                    <h2></h2>
                </div>
            </div>
        </div>
    )
}

export default ContactCards

import React from 'react';
import ContactItem, {SocialMediaItem} from './ContactItems';
import './ContactCards.css';

function ContactCards() {
    return (
        <div className='c_cards'>
            <div className='c_cards__container'>
                <div className='c_cards__wrapper'>
                    <h2>Vegye fel a kapcsolatot személyesen</h2>
                    <ul className='c_cards__items'>
                        <ContactItem
                        text='Írjon üzenetet e-mail-ben:'
                        text_data='cs.k.studios.art@gmail.com'
                        label='E-mail'
                        path='mail'
                        />
                        <ContactItem
                        text='Hívjon személyesen telefonon:'
                        text_data='+36/70-550-26-43'
                        label='Phone'
                        path='phone'
                        />
                    </ul>
                </div>
            </div>

            <div className='c_cards__container'>
                <div className='c_cards__wrapper'>
                    <h2>Vagy kövessen be a közösségi platformokon</h2>
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

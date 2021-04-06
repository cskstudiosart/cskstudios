import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import './Footer.css'

function Footer() {
    return (
        <div className='footer-container'>
            {/*
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Join the Adventure newsletter to recieve our best vacation deals
                </p>
                <p className='footer-subscription-text'>
                    You can unsubscribe at any time.
                </p>
                <div className='input-areas'>
                    <form>
                        <input type='email' name='email' placeholder='Your e-mail' className='footer-input' />
                        <Button buttonStyle='btn--outline'>
                            Subscribe
                        </Button>
                    </form>
                </div>
            </section>
            */}
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>Továbbiak</h2>
                        <Link to='/sign-up'>Kezdőlap</Link>
                        <Link to='/'>Rólam</Link>
                        <Link to='/'>Galéria</Link>
                        <Link to='/'>Projektek</Link>
                        <Link to='/'>Kapcsolat</Link>
                    </div>
                    <div class='footer-link-items'>
                        <h2>Galéria</h2>
                        <Link to='/'>Kézi rajzok</Link>
                        <Link to='/'>Digital Art</Link>
                        <Link to='/'>Illusztrációk</Link>
                        <Link to='/'>Modellezés</Link>
                        <Link to='/'>Animációk</Link>
                        <Link to='/'>Timelapse</Link>
                    </div>
                    <div class='footer-link-items'>
                        <h2>Elérhetőség</h2>
                        <h3>E-mail:</h3>
                        <h3>cs.k.studios.art@gmail.com</h3>
                        <h3>Telefon:</h3>
                        <h3>+36/705502643</h3>
                    </div>
                </div>
            </div>
            <div className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                            <img src='images/logo-matt-white.png' className='logo-white' />
                            Studios
                        </Link>
                    </div>
                    <small className='website-rights'>Cs.K. Studios © 2021</small>
                    <div className='social-icons'>
                        <a href='https://facebook.com/csakany97' target='_blank' aria-label='Facebook' className='social-icon-link facebook'>
                            <i className='fab fa-facebook-f' />
                        </a>
                        <a href='https://instagram.com/csakany97' target='_blank' aria-label='Instagram' className='social-icon-link instagram'>
                            <i className='fab fa-instagram' />
                        </a>
                        <a href='https://discord.gg/qkkMRdvNCd' target='_blank' aria-label='Discord' className='social-icon-link discord'>
                            <i className='fab fa-discord' />
                        </a>
                        <a href='https://www.youtube.com/channel/UCv9jtH_mvPAJvELDrGCPMKQ/featured' target='_blank' aria-label='Youtube' className='social-icon-link youtube'>
                            <i className='fab fa-youtube' />
                        </a>
                        <a href='https://twitch.tv/varditv97' target='_blank' aria-label='Twitch' className='social-icon-link twitch'>
                            <i className='fab fa-twitch' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer

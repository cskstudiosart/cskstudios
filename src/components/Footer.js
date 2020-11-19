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
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                    <div class='footer-link-items'>
                        <h2>Contact Us</h2>
                        <Link to='/'>Contact</Link>
                        <Link to='/'>Support</Link>
                        <Link to='/'>Destinations</Link>
                        <Link to='/'>Sponsorships</Link>
                    </div>
                    </div>
                    <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>Videos</h2>
                        <Link to='/'>Submit Video</Link>
                        <Link to='/'>Ambassadors</Link>
                        <Link to='/'>Agency</Link>
                        <Link to='/'>Influencer</Link>
                    </div>
                    <div class='footer-link-items'>
                        <h2>Social Media</h2>
                        <Link to='/'>Instagram</Link>
                        <Link to='/'>Facebook</Link>
                        <Link to='/'>Youtube</Link>
                        <Link to='/'>Twitter</Link>
                    </div>
                </div>
            </div>*/}
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                            <img src='images/logo-matt-white.png' className='logo-white' />
                            Studios
                        </Link>
                    </div>
                    <small className='website-rights'>Cs.K. Studios © 2020</small>
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
            </section>
        </div>
    )
}

export default Footer

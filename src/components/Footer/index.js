import React from 'react';
import './style.modules.css';
import { Button } from '../Button/index';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Subscribe to receive more news about Breaking Bad
        </p>
        <p className='footer-subscription-text'>
          
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
   <div className='footer-link-wrapper'>

          <div className='footer-link-items'>
            <h2>Developer medias</h2>
           
            <a href='https://www.linkedin.com/in/henrique-tardoqui-1aa78179/'>LinkedIn</a>
            <a href='https://github.com/Tardoqui'>GitHub</a>
            <a href='https://www.facebook.com/henrique.tardoqui'>Facebook</a>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              Breaking Bad
              
            </Link>
          </div>
          <small className='website-rights'>Breaking Bad © 2022</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link>
            <Link
              className='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
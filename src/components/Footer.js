import React from 'react'
import {Button} from '../components/Button';
import '../css/Footer.css';

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">Reach Me At...</p>
        <p className="footer-subscription-text">
          faheem.warsalee@gmail.com | https://github.com/FaheemWarsalee |
          https://www.linkedin.com/in/faheem-warsalee-92a013203/
        </p>

        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="footer-input"
            />
            <Button buttonStyle="btn--outline">Contact Me</Button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Footer

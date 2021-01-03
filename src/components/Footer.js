import React from 'react'
import '../css/Footer.css';

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Reach me at...</h2>
            <a
              href="mailto:faheem.warsalee@gmail.com"
              targe="_blank"
              rel="noopener noreferrer"
            >
              Email
            </a>
            <a
              href="https://github.com/FaheemWarsalee"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/faheem-warsalee-92a013203/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <p className="copyright-sign"> © Faheem 2021</p>
    </div>
  );
}

export default Footer

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faLinkedin, faSkype } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            {/**eslint-disable-next-line */}
            <a href="#" className="logo">
              <img 
                src="./assets/images/icons/takaramichi_logo.png" 
                className="logo-icon" 
                alt="Takaramichi logo" 
              />
            </a>
            <p className="footer-text">
              <b><a href="#">Executive Director: Manuzoto Hamono</a></b>
              <b><a href="#">Why is "Takaramichi" called "Takaramichi"?</a></b>
              <b><a href="#">What is "Eight-leaf Takaramichi"?</a></b>
            </p>
          </div>

          <ul className="footer-list">
            <li><p className="footer-list-title">Company</p></li>
            <li><a href="#" className="footer-link">About us</a></li>
            <li><a href="#" className="footer-link">Booking conditions</a></li>
            <li><a href="#" className="footer-link">Our blog</a></li>
            <li><a href="#" className="footer-link">Contacts</a></li>
          </ul>

          <ul className="footer-list">
            <li><p className="footer-list-title">Support</p></li>
            <li><a href="#" className="footer-link">Help center</a></li>
            <li><a href="#" className="footer-link">Ask a question</a></li>
            <li><a href="#" className="footer-link">Privacy policy</a></li>
            <li><a href="#" className="footer-link">Terms & conditions</a></li>
          </ul>

          <ul className="footer-list">
            <li><p className="footer-list-title">Neighborhoods in Nagano</p></li>
            <li><a href="#" className="footer-link">Matsumoto</a></li>
            <li><a href="#" className="footer-link">Okaya</a></li>
            <li><a href="#" className="footer-link">Omachi</a></li>
            <li><a href="#" className="footer-link">Chino</a></li>
            <li><a href="#" className="footer-link">Suwa</a></li>
            <li><a href="#" className="footer-link">Azumino</a></li>
            <li><a href="#" className="footer-link">Minowa</a></li>
            <li><a href="#" className="footer-link">Shiojiri</a></li>
          </ul>
        </div>

        <div className="footer-bottom">
          <ul className="social-list">
            <li><a href="#" className="social-link"><FontAwesomeIcon icon={faFacebook} /></a></li>
            <li><a href="#" className="social-link"><FontAwesomeIcon icon={faInstagram} /></a></li>
            <li><a href="#" className="social-link"><FontAwesomeIcon icon={faTwitter} /></a></li>
            <li><a href="#" className="social-link"><FontAwesomeIcon icon={faLinkedin} /></a></li>
            <li><a href="#" className="social-link"><FontAwesomeIcon icon={faSkype} /></a></li>
            <li><a href="#" className="social-link"><FontAwesomeIcon icon={faEnvelope} /></a></li>
          </ul>

          <p className="copyright">
            &copy; 2024 <a href="#">Takaramichi Co, Ltd.</a>. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

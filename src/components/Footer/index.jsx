import React from 'react'
import logoWhite from 'images/logo-white.svg'
import phone from 'images/icon-phone.svg'
import email from 'images/icon-email.svg'
import './style.scss'

function Footer() {
  return (
    <footer className="Footer">
      <img src={logoWhite} alt="fylo logo" className="logo" />
      <div className="footer-main-nav">
        <div className="phone-email-sect">
          <div className="phone">
            <img src={phone} alt="phone" className="phone-icon" />
            <span> Phone: +1-543-123-4567</span>
          </div>
          <div className="email">
            <img src={email} alt="email" className="email-icon" />
            <span>example@fylo.com</span>
          </div>
        </div>

        <div className="about-us-sect">
          <div className="link">About Us</div>
          <div className="link">Jobs</div>
          <div className="link">Press</div>
          <div className="link">Blog</div>
        </div>

        <div className="contact-us-sect">
          <div className="link">Contact Us</div>
          <div className="link">Terms</div>
          <div className="link">Privacy</div>
        </div>

        <div className="socials">
          <div className="icon-wrapper">
            <i className="fa-brands fa-facebook-f"></i>
          </div>
          <div className="icon-wrapper">
            <i className="fa-brands fa-twitter"></i>
          </div>
          <div className="icon-wrapper">
            <i className="fa-brands fa-instagram"></i>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

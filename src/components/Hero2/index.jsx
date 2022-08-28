import React from 'react'
import illustration2 from 'images/illustration-2.svg'
import arrow from 'images/icon-arrow.svg'
import './style.scss'
import Testimonial from 'components/Testimonial'

function Hero2() {
  return (
    <section className="Hero2">
      <img src={illustration2} alt="illustration 2" className="illustration-2" />

      <div className="info">
        <h1>Stay productive, wherever you are</h1>
        <p className="description">
          Never let location be an issue when accessing your files. Fylo has you covered for all of
          your file storage needs.
        </p>

        <p className="description">
          Securely share files and folders with friends, family and colleagues for live
          collaboration. No email attachments required!
        </p>

        <a href="#fylo" className="fylo-link">
          <span>See how Fylo works</span>
          <img src={arrow} alt="arrow" className="arrow-icon" />
        </a>

        <Testimonial />
      </div>
    </section>
  )
}

export default Hero2

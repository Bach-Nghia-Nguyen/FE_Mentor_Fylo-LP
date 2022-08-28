import React from 'react'
import avatar from 'images/avatar-testimonial.jpg'
import quotes from 'images/icon-quotes.svg'
import './style.scss'

function Testimonial() {
  return (
    <div className="Testimonial">
      <img src={quotes} alt="quotes" className="quotes-mark" />
      <p className="feedback">
        Fylo has improved our team productivity by an order of magnitude. Since making the switch
        our team has become a well-oiled collaboration machine.
      </p>
      <div className="person">
        <img src={avatar} alt="avatar" className="avatar" />
        <div className="info2">
          <div className="name">Kyle Burton</div>
          <div className="job-title">Founder & CEO, Huddle</div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial

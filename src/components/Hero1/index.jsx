import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import illustration1 from 'images/illustration-1.svg'
import './style.scss'

function Hero1() {
  const [formData, setFormData] = useState({
    email: '',
  })
  const [error, setError] = useState('')

  const handleChange = (e) => {
    if (e.target.name === 'email' && e.target.value) {
      setError('')
    }
    setFormData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { email } = formData
    if (!email) {
      setError('Email is required')
    }

    if (email) {
      toast.success('Email is sent successfully', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }
  }

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        rtl={false}
        theme="colored"
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <section className="Hero1">
        <img src={illustration1} alt="illustration 1" className="illustration-1" />

        <div className="info">
          <h1>All your files in one secure location, accessible anywhere.</h1>
          <p>
            Fylo stores your most important files in one secure location. Access theme wherever you
            need, share and collaborate with friends, family, and co-workers.
          </p>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-control">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter you email..."
                className={`textfield ${error && 'error'}`}
                value={formData.email}
                onChange={handleChange}
              />
              {error && <div className="error">{error}</div>}
            </div>
            <button type="submit" className="submit-btn">
              Get Started
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Hero1

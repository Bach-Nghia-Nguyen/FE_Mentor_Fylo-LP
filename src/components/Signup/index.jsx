import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import './style.scss'

function Signup() {
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
      <section className="Signup">
        <div className="left">
          <h2>Get early access today</h2>
          <p>
            It only takes a minute to sign up and our free starter tier is extremely generous. If
            you have any questions, our support team would be happy to help you.
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-control">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email@example.com"
              className={`textfield ${error && 'error'}`}
              value={formData.email}
              onChange={handleChange}
            />
            {error && <div className="error">{error}</div>}
          </div>
          <button type="submit" className="submit-btn">
            Get Started For Free
          </button>
        </form>
      </section>
    </>
  )
}

export default Signup

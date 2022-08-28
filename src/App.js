import Footer from 'components/Footer'
import Header from 'components/Header'
import Hero1 from 'components/Hero1'
import Hero2 from 'components/Hero2'
import Signup from 'components/Signup'
import React from 'react'
import 'react-toastify/dist/ReactToastify.css'
import './App.scss'

function App() {
  return (
    <div className="AppContainer">
      <Header />
      <Hero1 />
      <Hero2 />
      <Signup />
      <Footer />
    </div>
  )
}

export default App

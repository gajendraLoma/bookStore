import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ContactUs from '../components/contactUs'
function Contact() {
  return (
    <div>
      <Navbar />
  <div className='min-h-screen'>   
     <ContactUs />
  </div>
      <Footer />
    </div>
  )
}

export default Contact

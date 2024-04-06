import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className="contact-page-wrapper">
       <h1 className="primaryy-heading">Have Question In Mind</h1>
       <h1 className="primary-heading">Let us Reach You</h1>
       <div className="contact-form-container">
        <input type="text" placeholder="yourmail@gmail.com" />
        <button className="secondary-button">Submit</button>
       </div>
    </div>
  )
}

export default Contact;
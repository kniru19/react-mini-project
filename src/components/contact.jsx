import React from 'react'
import '../css/contact.css'
import image from '..assets/images/contact-img.png'

function Contact() {
  return (
    <div>
      <section className="contact_section">
  <div className="container">
    <div className="heading_container">
      <h2>Let's Get In Touch!</h2>
    </div>
  </div>
  <div className="container contact_bg layout_padding2-top">
    <div className="row">                        
      <div className="col-md-6">
        <div className="contact_form ">
          <form action="">
            <input type="text" placeholder="Name " />
            <input type="email" placeholder="Email" />
            <input
              type="text"
              placeholder="Message"
              className="message_input"
            />
            <button>Send</button>
          </form>
        </div>
      </div>
      <div className="col-md-6">
        <div className="img-box">
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Contact

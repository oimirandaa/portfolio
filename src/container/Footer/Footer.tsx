import React, {useState} from "react";

import "./Footer.scss"
import {AppWrap, MotionWrap} from '../../wrapper'
import {images} from '../../constants'

interface ContactObj{
  name: string,
  email: string,
  message: string,
}

const Footer = () => {

  const [formData, setFormData] = useState<ContactObj>({name: '', email:'', message:''})
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const {name, email, message} = formData

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target

    setFormData({...formData, [name]: value})
  }

  const handleSubmit = async () => {
    setLoading(true)

    const contactObj: ContactObj = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    }

    const response = await fetch('http://localhost:8080/api/createContact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(contactObj)
    });

    if (response.ok) {
      const jsonResponse = await response.json();
      console.log('POST request successful:', jsonResponse);
      setLoading(false);
      setIsFormSubmitted(true);
    } else {
      throw new Error('POST request failed');
    }
  }
  return (
    <>
      <h2 className="head-text">Take a coffe & Chat With Me</h2>
      
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:contacto@oscarmiranda.dev" className="p-text">contacto@oscarmiranda.dev</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel: +52 7271002940" className="p-text">+52 7271002940</a>
        </div>
      </div>

      {!isFormSubmitted ?
      <div className="app__footer-form app__flex">
        <div className="app__flex">
          <input type="text" className="p-text" placeholder="Your Name" name="name" value={name} onChange={handleChangeInput}/>
        </div>

        <div className="app__flex">
          <input type="text" className="p-text" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput}/>
        </div>
        <div>
          <textarea
            className="p-text"
            placeholder="Your Message"
            value={message}
            name="message"
            // onChange={handleChangeInput}
          />
        </div>
        <button type="button" className="p-text" onClick={handleSubmit}>{loading ? 'Sending' : 'Send Message'}</button>
      </div>
        :
        <h3 className="head-text">Thank you for getting in touch</h3>
      }
    </>
  )
};

export default AppWrap(
  MotionWrap(Footer,'app__footer'),
  'contact',
  'app__whitebg');
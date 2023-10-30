import React, { useRef } from 'react';
import './contact.css';
import InstagramIcon from '../../assets/instagram.png';
import FacebookIcon from '../../assets/facebook-icon.png';
import TwiterIcon from '../../assets/twitter.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_khgocfk', 'template_fggfjbu', form.current, 'fFL9yVKxJzlRBT7fr9d3l')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

  return (
    <section id='contactPage'>
      <div id='contact'>
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">Please fill out this form to discuss any work opportunities</span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder='Your Name' className="name" name='your_name' />
          <input type="email" placeholder='Your Email' className="email" name='your_email' />
          <textarea name="message" cols="30" rows="5" placeholder='Your Message' className='msg'></textarea>
          <button className="submitBtn" type='submit' value='Send'>Submit</button>
          <div className="links">
            <a href="http://www.instagram.com/sxthwikshetty"><img src={InstagramIcon} alt="Instagram" className='link' /></a>
            <a href="http://"><img src={FacebookIcon} alt="Facebook" className='link' /></a>
            <a href="http://"><img src={TwiterIcon} alt="Twitter" className='link' /></a>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;

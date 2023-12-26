import React from 'react'
import './contact.css';
import FacebookIcon from '../../assets/facebook-icon.png';
import TwitterIcon from '../../assets/twitter.png';
import InstagramIcon from '../../assets/instagram.png';

const Contact = () => {
  return (
    <section id="contactPage">

    <h2 className="contactTitle">Contact Me</h2>
    <div id="contactMe">

       <span className="contactDescription">Feel free to reach out to me!</span>

       <form className="contactForm">

        <input type="text" className="name" placeholder='Your Name' />
        <input type="email" className="email" placeholder='Your Email'/>
        <textarea className='msg' name="message" rows="5" placeholder='Your Message'></textarea>
        <button type='submit' value='Send' className="submitBtn">Submit</button>
        
        <div className="links">
            <img src={FacebookIcon} alt="FaceBook" className="link" />
            <img src={TwitterIcon} alt="Twitter" className="link" />
            <img src={InstagramIcon} alt="Instagram" className="link" />
        </div>
       </form>
    </div>


    </section>
  )
}

export default Contact;


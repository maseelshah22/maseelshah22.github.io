import React,{useRef} from 'react'
import './contact.css';
import FacebookIcon from '../../assets/facebook-icon.png';
import TwitterIcon from '../../assets/twitter.png';
import InstagramIcon from '../../assets/instagram.png';
import emailjs from '@emailjs/browser';


const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_j7c9pl2', 'template_5ecj8eq', form.current, '42iNnkEXp5lH-PehZ')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email Sent Successfully!");
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id="contactPage">

    <h2 className="contactTitle">Contact Me</h2>
    <div id="contactMe">

       <span className="contactDescription">Feel free to reach out to me!</span>

       <form className="contactForm" ref={form} onSubmit={sendEmail}>

        <input type="text" className="name" placeholder='Your Name' name='from_name' maxLength="100"/>
        <input type="email" className="email" placeholder='Your Email' name='reply_to' />
        <textarea className='msg' name="message" rows="5" placeholder='Your Message' maxLength="1000"></textarea>
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


import React,{useRef} from 'react'
import './contact.css';
import LinkedInIcon from '../../assets/linkedin_icon.png';
import GitHubIcon from '../../assets/github_icon.png';
import MailIcon from '../../assets/mail_icon.png';
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

    {/* <div id="contactMe"> */}
    <h2 className="contactTitle">Contact Me</h2>

       <span className="contactDescription">Feel free to reach out to me!</span>

       <form className="contactForm" ref={form} onSubmit={sendEmail}>

        <input type="text" className="name" placeholder='Your Name' name='from_name' maxLength="100" minLength="3" required/>
        <input type="email" className="email" placeholder='Your Email' name='reply_to' minLength="3"  required/>
        <textarea className='msg' name="message" rows="5" placeholder='Your Message' minLength="5" maxLength="1000" required></textarea>
        <button type='submit' value='Send' className="submitBtn" >Submit</button>
        
        <div className="links">
            
        <a href="https://github.com/maseelshah22" target="_blank" rel="noopener noreferrer" >
          <img src={GitHubIcon} alt="GitHub" className="link" />
            </a>
            <a href="https://www.linkedin.com/in/maseel-shah-051385217/" target="_blank" rel="noopener noreferrer">
            <img src={LinkedInIcon} alt="LinkedIn" className="link" />
            </a>
            <a href="mailto:maseelshah1@gmail.com" >
            <img src={MailIcon} alt="MailIcon" className="link" target="_blank" rel="noopener noreferrer"/>
            </a>
        </div>
       </form>
    {/* </div> */}


    </section>
  )
}

export default Contact;


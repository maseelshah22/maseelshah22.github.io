import React from "react";
import "./intro.css";
import LinkedInIcon from '../../assets/linkedin_icon.png';
import GitHubIcon from '../../assets/github_icon.png';
import MailIcon from '../../assets/mail_icon.png';
import headshot from '../../assets/headshot.jpeg';

const Intro = () => {
  return (
    <section id="intro">
      <div className="introWrapper">
        <div className="introContent">
          <span className="hello">Hello, </span>
          <span className="introText">
            I'm <span className="introName">Maseel Shah</span>
            <br />
          </span>
          <p className="introPara">
            I am currently a CS student at the University of Virginia and I am passionate about 
            building software that solves complex, real-world problems. 
          </p>
          <p className="margin-gap">
            In my free time, I enjoy playing sports, going to the gym, and spending time with 
            my family and friends.
          </p>
          <p className="margin-gap">
            If you are interested in working together or want to know more about me, feel free to reach out!
          </p>
          <div className="links_intro">
            <a href="https://github.com/maseelshah22" target="_blank" rel="noopener noreferrer">
              <img src={GitHubIcon} alt="GitHub" className="linkintro" />
            </a>
            <a href="https://www.linkedin.com/in/maseel-shah-051385217/" target="_blank" rel="noopener noreferrer">
              <img src={LinkedInIcon} alt="LinkedIn" className="linkintro" />
            </a>
            <a href="mailto:maseelshah1@gmail.com">
              <img src={MailIcon} alt="MailIcon" className="linkintro" target="_blank" rel="noopener noreferrer" />
            </a>
          </div>
        </div>
        <img src={headshot} alt="Profile" className="headshot" />

      </div>
      <div className="lineWrapper">
        <hr className="solid" />
      </div>
  

    </section>
  );
};

export default Intro;

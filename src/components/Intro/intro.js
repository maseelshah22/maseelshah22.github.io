//creating a react component with the command : rafce
import React from "react";
import "./intro.css";
import bg from "../../assets/image.png";
import btnImg from "../../assets/hireme.png";
import { Link } from "react-scroll";
import maseel from "../../assets/maseelphoto.png";

const Intro = () => {
  return (
    <section id="intro">
      
      <div className="introContent">
        <span className="hello">Hello, </span>
        <span className="introText">
          I'm <span className="introName">Maseel Shah</span>
          <br /> Software Engineer
        </span>
        <p className="introPara">
          I am a CS student at the University of Virginia
        </p>
        <Link>
          <button className="btn">
            <img src={btnImg} alt="Hire" className='btnImg' />
            Hire Me
          </button>
        </Link>
        
      </div>
      
      <img src={maseel} alt="Profile" className="bg" />

      <hr className="solid" /> {/*for some reason doesn't work with dotted or even with css */ }



       
    </section>
  );
};

export default Intro;

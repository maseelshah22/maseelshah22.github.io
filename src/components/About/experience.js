import React from "react";
import "./experience.css";
import uvalogo from "../../assets/uvalogo.png";
import linkedin2 from "../../assets/linkedin2.png";
import sports from "../../assets/sports.png";

const Experience = () => {
  return (
    
    <section id="experience">
      <div className="divider">
        
      {/* <hr class="solid"/> */}

      </div>
      <span className="expTitle">About Me</span>
      <span className="expDesc">
       As a third year CS Student, I am looking forward to entering the corporate world
       as a software engineer. I am excited to continuing learning from my peers and mentors,
       while also being able to continue participating in my interests.
      </span>
      <div className="expBars">
        
        <div className="expBar">
          <a href="https://engineering.virginia.edu/departments/computer-science" target="_blank" rel="noopener noreferrer" >
          <img src={uvalogo} alt="uvalogo" className="expBarImg" /> </a>
          
          <div className="expBarText">
            <h2>Education</h2>
            <p>I am currently pursuing a B.S in Computer Science at the University of Virginia</p>
          </div>
        </div>
        <div className="expBar">
        <a href="https://www.linkedin.com/in/maseel-shah-051385217/" target="_blank" rel="noopener noreferrer" >
          <img src={linkedin2} alt="linkedin2" className="expBarImg" /> 
          </a>
          <div className="expBarText">
            <h2>Experience</h2>
            <p>I have gained professional experience through my summer interships at companies such as SAIC, as well as my role
              as a Teaching Assistant in a foundtional Data Structures and Algorithms course at the University of Virginia.
              I also take on projects in my free time to further develop my skills.
            </p>
          </div>
        </div>
        <div className="expBar">
          <img src={sports} alt="sports" className="expBarImgSport" />
          <div className="expBarText">
            <h2>Interests</h2>
            <p>I enjoy playing sports including football, basketball, and spikeball. 
              I have also recently started golfing and playing pickleball. I'm always open to 
               receiving new book and movie recommendations too. </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

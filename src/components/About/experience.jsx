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
       I am a CS student who enjoys solving complex problems and building innovative solutions. I am excited to continuing learning from my peers and mentors,
       while also being able to continue participating in my interests.
      </span>
      <div className="expBars">
        
      <a href="https://engineering.virginia.edu/departments/computer-science" target="_blank" rel="noopener noreferrer" >
        <div className="expBar">
          <a href="https://engineering.virginia.edu/departments/computer-science" target="_blank" rel="noopener noreferrer" >
          <img src={uvalogo} alt="uvalogo" className="expBarImg" /> </a>
          
          <div className="expBarText">
            <h2>Education</h2>
            <p>I am currently pursuing a B.S in Computer Science at the University of Virginia.
              <br></br>  I have 
              also served as a lead TA for a foundational Data Structures and Algorithms course  (CS 2100) as well as a
              TA for a Databases class (CS 4750).
            </p>
          </div>
        </div>
        </a>

        <a href="https://www.linkedin.com/in/maseel-shah-051385217/" target="_blank" rel="noopener noreferrer" >
        <div className="expBar">
          
        <a href="https://www.linkedin.com/in/maseel-shah-051385217/" target="_blank" rel="noopener noreferrer" >
          <img src={linkedin2} alt="linkedin2" className="expBarImg" /> 
          </a>
          <div className="expBarText">
            <h2>Experience</h2>
            <p> I have gained professional work experience through internships at companies such as SAIC, Capital One, and Appian.
              I have also gained experience through my TA positions at UVA and by 
              building projects in my free time to further develop my skills.
            </p>
          </div>
        </div>
        </a>
        <div className="expBar">
          <img src={sports} alt="sports" className="expBarImgSport" />
          <div className="expBarText">
            <h2>Interests</h2>
            <p>I enjoy playing sports including football, basketball, and spikeball.
              I have also recently started golfing and playing pickleball. I'm always open to 
               receiving new book and movie recommendations.  </p>
          </div>
        </div>
      </div>
      <hr className="solid" />
    </section>
  );
};

export default Experience;

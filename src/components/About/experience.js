import React from "react";
import "./experience.css";
import UIDesign from "../../assets/ui-design.png";
import WebDesign from "../../assets/website-design.png";
import AppDesign from "../../assets/app-design.png";

const Experience = () => {
  return (
    <section id="experience">
      <span className="expTitle">About Me</span>
      <span className="expDesc">
        I am a skilled
        lajflajf;ajfl;ajlja;jfa;fja;jfda;jfa;jfd;ajfajf;aj;ajfa;jf;aj;ja hahahah
        ok fill in .
      </span>
      <div className="expBars">
        <div className="expBar">
          <img src={UIDesign} alt="UIDesign" className="expBarImg" />
          <div className="expBarText">
            <h2>Education</h2>
            <p>I am currently pursuing a B.S in Computer Science at the University of Virginia</p>
          </div>
        </div>
        <div className="expBar">
          <img src={WebDesign} alt="WebDesign" className="expBarImg" />
          <div className="expBarText">
            <h2>Experience</h2>
            <p>I have gained professional experience through my summer interships at companies such as SAIC, as well as my role
              as a Teaching Assistant in a foundtional Data Structures and Algorithms course at the University of Virginia.
            </p>
          </div>
        </div>
        <div className="expBar">
          <img src={AppDesign} alt="AppDesign" className="expBarImg" />
          <div className="expBarText">
            <h2>Interests and Community</h2>
            <p>This is a demo text</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

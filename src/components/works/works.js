import React from "react";
import "./works.css";
import Portfolio1 from "../../assets/portfolio-1.png";
import Portfolio2 from "../../assets/portfolio-2.png";
import Portfolio3 from "../../assets/portfolio-3.png";


const Works = () => {
  return ( 

    <section id="works">
        <h2 className="worksTitle">My Portfolio</h2>
        <span className="worksDesc">I enjoy brainstorming and devloping creative solutions to complex and common tasks. 
        <br />Below are a few  projects that I have worked on recently. Feel free to view the rest on my GitHub!</span>
        <div className="worksImgs">
       
            <img src={Portfolio1} alt="" className="worksImg" />
            <img src= {Portfolio2} alt="" className="worksImg" />
            <img src={Portfolio3}  alt="" className="worksImg" />
            
        </div>
        <button className="workBtn">See More</button>
    </section>   
     )
};

export default Works;

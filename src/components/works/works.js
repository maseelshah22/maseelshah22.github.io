import React from "react";
import "./works.css";

import Unimap_img from "../../assets/unimap5.png";
import footballproject_img from "../../assets/footballproject_img.png";


const Works = () => {
  return ( 

    <section id="works">
        <h2 className="worksTitle">My Portfolio</h2>
        <span className="worksDesc">I enjoy brainstorming and devloping creative solutions to complex and common tasks. 
        <br />Below are a few  projects that I have worked on recently. Feel free to view the rest on my GitHub!</span>
        <div className="worksImgs">
       
            <a href="https://github.com/maseelshah22/UniMap" target="_blank" rel="noopener noreferrer" >
                <img src={Unimap_img} alt="" className="worksImg"   /> </a>
           
            

            <a href="https://github.com/maseelshah22/FantasyFootballProject" target="_blank" rel="noopener noreferrer" >
            <img src= {footballproject_img} alt="" className="worksImg" />
            </a>
            
        </div>
        <a href="https://github.com/maseelshah22" target="_blank" rel="noopener noreferrer" >
        <button className="workBtn">See More</button></a>
    </section>   
     )
};

export default Works;

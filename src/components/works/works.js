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
            <div className="worksImgContainer">
            <a href="https://github.com/maseelshah22/UniMap" target="_blank" rel="noopener noreferrer" >
                <img src={Unimap_img} alt="" className="worksImg"   / > 
                </a>
                <a href="https://github.com/maseelshah22/UniMap" target="_blank" rel="noopener noreferrer" >
                <div class="text-block">
    <h4 className="textTitle">UniMap</h4>
    <p>Django based web application to help UVA students determine how busy locations across campus are in 
      real-time using a voting system, with each vote remaining active for 3 hours. </p>
  </div>
  </a>
            </div>
           
            <div className="worksImgContainer">
            <a href="https://github.com/maseelshah22/FantasyFootballProject" target="_blank" rel="noopener noreferrer" >
              
            <img src= {footballproject_img} alt="" className="worksImg" />
            <div class="text-block2">
    <h4 className="textTitle">Fantasy Football Project</h4>
    <p>Program to scrape NFL data from internet and export to an Excel file for data analysis. 
      Can help users make informed decisions for fantasy football. </p>
            </div>
            </a>
            </div>
            
        </div>

        <div className="seeMoreButton" >
        <a href="https://github.com/maseelshah22" target="_blank" rel="noopener noreferrer" >
        <button className="workBtn">See More</button></a>
        </div>    
        <div className="solid" />

    </section>   
     )
};

export default Works;

import React from "react";
import "./works.css";
import { projects } from "./projects.js";

// import Unimap_img from "../../assets/unimap5.png";
// import footballproject_img from "../../assets/footballproject_img.png";

const Works = () => {
	return (
		<section id="works">
			<h2 className="worksTitle">My Portfolio</h2>
			<span className="worksDesc">
				I enjoy brainstorming and developing creative solutions to complex and
				common tasks.
				<br />
				Here are some projects I have worked on recently.
        Feel free to read more details and view the rest of my projects on my <a  className="gitHubGold" href="https://github.com/maseelshah22">GitHub</a>!
			</span>

      <br></br>

			<div className="worksImgs">

      {projects.map((project) => (
				<div className="worksImgContainer">
					<a
						href={project.link}
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							src={`${process.env.PUBLIC_URL}`+project.image}
							alt=""
							className="worksImg"
						/>
					</a>
					<a
						href={project.link}
						target="_blank"
						rel="noopener noreferrer"
					>
						<div class="text-block">
							<h4 className="textTitle">{project.title}</h4>
							<p className="projDesc">
								{project.description}
							</p>
						</div>
					</a>
				</div>
 ))}
				{/* <div className="worksImgContainer">
					<a
						href="https://github.com/maseelshah22/FantasyFootballProject"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							src={footballproject_img}
							alt=""
							className="worksImg"
						/>
						<div class="text-block2">
							<h4 className="textTitle">Fantasy Football Project</h4>
							<p>
								Program to scrape NFL data from internet and export to an Excel
								file for data analysis. Can help users make informed decisions
								for fantasy football.
							</p>
						</div>
					</a>
				</div> */}
			</div>

			<div className="seeMoreButton">
				<a
					href="https://github.com/maseelshah22"
					target="_blank"
					rel="noopener noreferrer"
				>
					<button className="workBtn">See More on GitHub</button>
				</a>
				<hr className="solid" />
			</div>
			{/* <div className="solid" /> */}
		</section>
	);
};

export default Works;

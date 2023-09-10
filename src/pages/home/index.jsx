import React from "react";
import "./style.css";
import githubicon from "../../assets/githubicon.png";
import linkedinicon from "../../assets/linkedinicon.png";
import instagramicon from "../../assets/instagramicon.png";
import twittericon from "../../assets/twittericon.png";

const Home = () => {
  return (
    <section id="home" className="home_main">
      <div className="home_text">
        <h1>
          I'm Bhagyashree V G
          <br />
          Full Stack Developer
        </h1>
      </div>

      <div className="homeList">
        <a href="https://github.com/vgbhagya" target="_blank" rel="noopener noreferrer">
          <img id="github" src={githubicon} alt="GitHub" />
        </a>
        <a
          href="https://www.linkedin.com/in/bhagyasri-v-g-30a259245/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img id="linkedin" src={linkedinicon} alt="LinkedIn" />
        </a>
        <a
          href="https://instagram.com/his_lucky_charm_____?utm_source=qr&igshid=MzNlNGNkZWQ4Mg=="
          target="_blank"
          rel="noopener noreferrer"
        >
          <img id="insta" src={instagramicon} alt="Instagram" />
        </a>
        <a
          href="https://twitter.com/BHAGYASRIV37818"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img id="twitter" src={twittericon} alt="Twitter" />
        </a>
      </div>
    </section>
  );
};

export default Home;

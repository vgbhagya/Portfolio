import { Animate } from "react-simple-animate";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import "./style.scss";

function Home() {

  return (
    <section className="home" id="home">
      <div className="home__text-wrapper">
        <h1>
          I'm Bhagyashree V G
          <br />
          Full Stack Developer
        </h1>
        <Animate
          play
          duration={1.5}
          delay={1}
          start={{
            transform: "translateY(600px)",
          }}
          end={{ transform: "translateX(0px)" }}
        >
           <div className="home-List">
            <div className="home-List___socials-wrapper"></div>
            <a
              href="https://github.com/vgbhagya"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub
                id="github"
                alt="GitHub"
                size={30}
                color="var(--yellow-theme-main-color)"
              />{" "}
              {/* Use the imported icon components */}
            </a>
            <a
              href="https://www.linkedin.com/in/bhagyasri-v-g-30a259245/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                id="linkedin"
                alt="LinkedIn"
                size={30}
                color="var(--yellow-theme-main-color)"
              />
            </a>
            <a
              href="https://instagram.com/his_lucky_charm_____?utm_source=qr&igshid=MzNlNGNkZWQ4Mg=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram
                id="insta"
                alt="Instagram"
                size={30}
                color="var(--yellow-theme-main-color)"
              />
            </a>
            <a
              href="https://twitter.com/BHAGYASRIV37818"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter
                id="twitter"
                alt="Twitter"
                size={30}
                color="var(--yellow-theme-main-color)"
              />
            </a>
          </div>
        </Animate>
      </div>
    </section>
  );
}

export default Home;

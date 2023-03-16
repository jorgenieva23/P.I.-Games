import style from "./About.module.css";
import mail from "../../Image/gmail.png";
import git from "../../Image/github.png";
import linke from "../../Image/linkedin.png";

const About = () => {
  return (
    <div className={style.container}>
      <header  className={style.header}>
        <div>
          {/* <img src="" alt="" /> */}
          <h1 className={style.headerh1}>jorge nieva</h1>
          <h3 className={style.headerh3}>Student Full Stack Developer</h3>

          <a
            title="Codepen"
            className={style.linkicon}
            // target="_blank"
            href="mailto:jorge_4755@hotmail.com"
          >
            <i class="fab fa-codepen">
              {" "}
              <img className={style.img}src={mail} alt="" width="25px" />
            </i>
          </a>
          <a
            title="GitHub"
            className={style.linkicon}
            // target="_blank"
            href="https://github.com/jorgenieva23"
          >
            <i class="fab fa-github-square">
              {" "}
              <img src={git} alt="" width="25px" />
            </i>
          </a>
          <a
            title="Linkedin"
            className={style.linkicon}
            // target="_blank"
            href="https://www.linkedin.com/in/jorge-nieva-96b211254"
          >
            {" "}
            <img src={linke} alt="" width="20px" />
            <i class="fab fa-twitter-square"></i>
          </a>
        </div>
      </header>
      
    </div>
  );
};

export default About;

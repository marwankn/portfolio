import React from "react";
import "./About.scss";
import photo from "../../assets/images/marwan-bg-removed-adjusted.webp";
import rings from "../../assets/images/pattern-rings.svg";
import circle from "../../assets/images/pattern-circle.svg";

import { ReactSVG } from "react-svg";

function About({ colorMode }) {
  return (
    <>
      <ReactSVG
        src={rings}
        className={
          colorMode === "dark" ? "about__rings" : "about__rings--light"
        }
      />
      <ReactSVG
        src={circle}
        className={
          colorMode === "dark" ? "about__circle" : "about__circle--light"
        }
      />

      <section className="about">
        <div className="about__text">
          <h1>
            Nice to meet you! I'm <span>Marwan Nofal</span>.
          </h1>
          <p>
            Based in Canada, I’m a Full Stack developer passionate about
            building accessible web apps that users love.
          </p>
          <a href="mailto:marwankn@gmail.com.com" className="about__button">
            Contact Me
          </a>
        </div>
        <img
          src={photo}
          alt=""
          className={
            colorMode === "dark" ? "about__photo--dark" : "about__photo"
          }
        />
      </section>
    </>
  );
}

export default About;

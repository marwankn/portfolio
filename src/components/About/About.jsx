import React, { useEffect, useRef } from "react";
import "./About.scss";
import photo from "/public/assets/images/marwan-bg-removed-adjusted.webp";
import rings from "/public/assets/images/pattern-rings.svg";
import circle from "/public/assets/images/pattern-circle.svg";

import { ReactSVG } from "react-svg";

function About({ colorMode }) {
  return (
    <>
      <section className="about">
        <div className="about__text">
          <h1>
            Nice to meet you! I'm <span>Marwan Nofal</span>.
          </h1>
          <p>I’m a Full Stack developer based in Toronto, Canada 🍁</p>
          <a href="mailto:marwankn@gmail.com" className="about__button">
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
      </section>
    </>
  );
}

export default About;

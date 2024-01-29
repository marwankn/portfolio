import React from "react";
import "./About.scss";
import photo from "../../assets/images/marwan-bg-removed-adjusted.webp";
import rings from "../../assets/images/pattern-rings.svg";
import { ReactSVG } from "react-svg";

function About({ colorMode }) {
  return (
    <>
      <ReactSVG src={rings} className="about__rings" />
      <section className="about">
        <div className="about__text">
          <h2>Nice to meet you! I'm Marwan Nofal</h2>
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

import React from "react";
import "./About.scss";
import photo from "../../assets/images/marwan-bg-removed-adjusted.png";

function About({ colorMode, setColorMode }) {
  return (
    <>
      <section className="about">
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

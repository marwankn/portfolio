import React from "react";
import experienceList from "../../assets/data/data.json";
import rings from "/assets/images/pattern-rings.svg";
import { ReactSVG } from "react-svg";
import "./Experience.scss";

function Experience({ colorMode }) {
  return (
    <>
      <ReactSVG
        src={rings}
        className={
          colorMode === "dark"
            ? "experience__rings"
            : "experience__rings--light"
        }
      />
      <section className="experience">
        <div className="experience__icon-list">
          {experienceList["experience"].map((item, i) => {
            return (
              <div
                key={i}
                className={
                  colorMode === "dark"
                    ? "experience__icon-container--dark"
                    : "experience__icon-container--light"
                }
              >
                <ReactSVG
                  src={item.logo}
                  alt={item.name}
                  className={
                    colorMode === "dark"
                      ? `experience__icon ${item.name
                          .split(".")
                          .join("")
                          .toLowerCase()}`
                      : "experience__icon"
                  }
                />
                <p
                  className={
                    colorMode === "dark"
                      ? "experience__icon-name"
                      : "experience__icon-name--light"
                  }
                >
                  {item.name}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Experience;

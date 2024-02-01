import React from "react";
import experienceList from "../../assets/data/data.json";
import rings from "../../assets/images/pattern-rings.svg";
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
              <>
                <ReactSVG
                  key={i}
                  src={"/public/experience/" + item.logo}
                  alt={item.name}
                  className={
                    colorMode === "dark"
                      ? "experience__icon--dark"
                      : "experience__icon--light"
                  }
                />
                {/* <h3>{item.name}</h3> */}
              </>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Experience;

import React from "react";
import experienceList from "../../assets/data/data.json";
import rings from "../../assets/images/pattern-rings.svg";
import { ReactSVG } from "react-svg";
import "./Experience.scss";

function Experience({ colorMode }) {
  const iconPath = "/src/assets/images/icons/experience/";

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
            console.log(img + item.logo);
            return (
              <>
                <ReactSVG
                  key={i}
                  src={iconPath + item.logo}
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

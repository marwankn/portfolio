import React from "react";
import "./Header.scss";
import socialList from "../../assets/data/social.json";
import DarkMode from "../../assets/images/dark-mode.svg?react";
import LightMode from "../../assets/images/light-mode.svg?react";
import { ReactSVG } from "react-svg";

function Header({ colorMode, setColorMode }) {
  return (
    <>
      <header className="header">
        <h1 className="header__title">Marwan Nofal</h1>
        <div className="header__social-links">
          {socialList.map((item, i) => {
            return (
              <a href={item.link} key={i} target="_blank">
                <ReactSVG
                  src={item.icon}
                  alt={item.name}
                  className={
                    colorMode === "dark"
                      ? "header__social-item--dark"
                      : "header__social-item--light"
                  }
                />
              </a>
            );
          })}
          {colorMode === "dark" ? (
            <LightMode
              className="header__mode"
              onClick={() => setColorMode("light")}
            />
          ) : (
            <DarkMode
              className="header__mode"
              onClick={() => setColorMode("dark")}
            />
          )}
        </div>
      </header>
    </>
  );
}

export default Header;

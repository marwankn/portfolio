import React from "react";
import "./Header.scss";
import socialList from "../../assets/data/data.json";
import DarkMode from "/public/assets/images/dark-mode.svg?react";
import LightMode from "/public/assets/images/light-mode.svg?react";
import { ReactSVG } from "react-svg";

function Header({ colorMode, setColorMode }) {
  return (
    <>
      <header className="header">
        <h3 className="header__title">Marwan Nofal</h3>
        <div className="header__social-links">
          {socialList["social"].map((item, i) => (
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
          ))}
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

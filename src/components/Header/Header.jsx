import React, { useEffect, useState } from "react";
import "./Header.scss";
import socialList from "../../assets/data/data.json";
import DarkMode from "../../assets/images/dark-mode.svg?react";
import LightMode from "../../assets/images/light-mode.svg?react";
import { ReactSVG } from "react-svg";

function Header({ colorMode, setColorMode }) {
  const [socialIcons, setSocialIcons] = useState([]);

  useEffect(() => {
    const importSocialIcons = async () => {
      const icons = await Promise.all(
        socialList["social"].map(async (item) => {
          const { default: SocialIcon } = await import(
            `../../assets/images/icons/social/${item.icon}`
          );
          return { ...item, SocialIcon };
        })
      );
      setSocialIcons(icons);
    };

    importSocialIcons();
  }, []);

  return (
    <>
      <header className="header">
        <h3 className="header__title">Marwan Nofal</h3>
        <div className="header__social-links">
          {socialIcons.map((item, i) => (
            <a href={item.link} key={i} target="_blank">
              <ReactSVG
                src={item.SocialIcon}
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

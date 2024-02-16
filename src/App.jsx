import React, { useEffect, useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import ReactGA from "react-ga";
import { getUserLocation, writeUserLocation } from "./utils/userLocation.jsx";
ReactGA.initialize("G-XDXD5YD854");

function App() {
  const [colorMode, setColorMode] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches === true
      ? "dark"
      : "light"
  );

  useEffect(() => {
    if (colorMode === "dark") {
      document.body.classList = "";
      document.body.classList.add("body--dark");
    } else {
      document.body.classList = "";
      document.body.classList.add("body--light");
    }
  }, [colorMode]);
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  useEffect(() => {
    try {
      const response = async () => {
        const getUserLocationData = await getUserLocation();
        console.log(getUserLocationData);
        const writeUserLocationData = await writeUserLocation(
          getUserLocationData.data
        );
      };
      response();
    } catch (error) {
      console.error(error);
    }
  }, []);
  return (
    <>
      <Header colorMode={colorMode} setColorMode={setColorMode} />
      <About colorMode={colorMode} />
      <Experience colorMode={colorMode} />
      <Projects colorMode={colorMode} />
    </>
  );
}

export default App;

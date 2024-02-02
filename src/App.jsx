import React, { useEffect, useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";

function App() {
  const [colorMode, setColorMode] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches === true
      ? "dark"
      : "light"
  );
  const [isLoading, setIsLoading] = React.useState(true);

  const handleLoading = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    window.addEventListener("load", handleLoading);
    return () => window.removeEventListener("load", handleLoading);
  }, []);

  useEffect(() => {
    if (colorMode === "dark") {
      document.body.classList = "";
      document.body.classList.add("body--dark");
    } else {
      document.body.classList = "";
      document.body.classList.add("body--light");
    }
  }, [colorMode]);

  return !isLoading ? (
    <>
      <Header colorMode={colorMode} setColorMode={setColorMode} />
      <About colorMode={colorMode} />
      <Experience colorMode={colorMode} />
      <Projects colorMode={colorMode} />
    </>
  ) : (
    <div>Loading...</div>
  );
}

export default App;

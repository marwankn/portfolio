import React, { useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import About from "./components/About/About";

function App() {
  const [colorMode, setColorMode] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches === true
      ? "dark"
      : "light"
  );

  return (
    <>
      <Header colorMode={colorMode} setColorMode={setColorMode} />
      <About colorMode={colorMode} />
    </>
  );
}

export default App;

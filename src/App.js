import "./App.css";

import React from "react";

import { Github, Linkedin } from "react-bootstrap-icons";

function App(props) {
  return (
    <div class="text-gray-100 left-align text-5xl">
      <h1 class="bolder-text">Callum Gordon</h1>
      <h2 class="thinner-text pb-2 text-gray-400">Software Developer</h2>
      <div class="flex">
        <a
          class="mr-4 icon"
          href="https://github.com/calciumg"
          target="_blank"
          rel="noreferrer"
        >
          <Github color="rgba(243,244,246)" size={40} />
        </a>
        <a
          class="mr-4 icon"
          href="https://www.linkedin.com/in/callum-gordon-3b258a143/"
          target="_blank"
          rel="noreferrer"
        >
          <Linkedin color="rgba(243,244,246)" size={40} />
        </a>
        <a
          class="text-sm border-2 p-2 hvr-sweep-to-right"
          download
          href="Callum Gordon - CV.pdf"
        >
          Download resume
        </a>
      </div>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import MorseGenerator from "./components/MorseGenerator";

function App() {
  const [userInput, setUserInput] = useState("");
  function changeHandel(e) {
    setUserInput(e.target.value);
  }

  return (
    <div className="general">
      <h2>Morse Generator</h2>
      <div className="container">
        <div className="input-container">
          <h3>Enter your text here</h3>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Enter your Text"
            value={userInput}
            onChange={changeHandel}
          ></textarea>
        </div>
        <div className="morse-container">
          <h3> Your Morse code:</h3>
          <div className="results">
            <MorseGenerator userInput={userInput} />
          </div>
        </div>
      </div>
      <p>This Morse app accepts only </p>
      <ul>
        <li>Character</li>
        <li>Numbers</li>
        <li>Special Symboles</li>
      </ul>
    </div>
  );
}

export default App;

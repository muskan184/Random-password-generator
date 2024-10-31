import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { LC, NC, SC, UC } from "./passchar";

function App() {
  let [uppercase, setUppercase] = useState(false);
  let [lowercase, setLowercase] = useState(false);
  let [number, setnumber] = useState(false);
  let [symbols, setsymbols] = useState(false);
  let [passwordlen, setpasswordlen] = useState(10);
  let [fpass, setfpass] = useState(" ");

  let createpasswod = () => {
    let finalpass = "";
    let charset = "";
    if (uppercase || lowercase || number || symbols) {
      if (uppercase) charset += UC;
      if (lowercase) charset += LC;
      if (number) charset += NC;
      if (symbols) charset += SC;
      for (let i = 0; i < passwordlen; i++) {
        finalpass += charset.charAt(Math.floor(Math.random() * charset.length));
      }
      setfpass(finalpass);
    } else {
      alert("please select any one checkbox");
    }
  };
  let copypass = () => {
    navigator.clipboard.writeText(fpass);
  };
  return (
    <div className="passwordBox">
      <h2> Password Generator</h2>
      <div className="passwordBoxin">
        <input type="text" value={fpass} readOnly />{" "}
        <button onClick={copypass}>copy</button>
      </div>
      <div className="passlength">
        <label>password length</label>
        <input
          type="number"
          max={20}
          min={10}
          value={passwordlen}
          onChange={(event) => {
            setpasswordlen(event.target.value);
          }}
        />
      </div>
      <div className="passlength">
        <label>Include uppercase letter</label>
        <input
          type="checkbox"
          checked={uppercase}
          onChange={() => setUppercase(!uppercase)}
        />
      </div>

      <div className="passlength">
        <label>Include lowercase letter</label>
        <input
          type="checkbox"
          checked={lowercase}
          onChange={() => setLowercase(!lowercase)}
        />
      </div>

      <div className="passlength">
        <label>Include number</label>
        <input
          type="checkbox"
          checked={number}
          onChange={() => setnumber(!number)}
        />
      </div>

      <div className="passlength">
        <label>Include symbols</label>
        <input
          type="checkbox"
          checked={symbols}
          onChange={() => setsymbols(!symbols)}
        />
      </div>
      <div>
        <button className="btn" onClick={createpasswod}>
          Generator password
        </button>
      </div>
    </div>
  );
}

export default App;

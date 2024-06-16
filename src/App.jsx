import React, { useState } from "react";
import on from "./assets/on.jpg";
import off from "./assets/offf.jpg";

export default function App() {
  const [toggle, settoggle] = useState(false);

  const toggleButton = () => {
    settoggle(!toggle);
  };

  return (
    <div align="center">
      <img src={toggle ? on : off} alt="" />

      <div>
        <button onClick={toggleButton}>{toggle ? "off" : "on"}</button>
      </div>
    </div>
  );
}

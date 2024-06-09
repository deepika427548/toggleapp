import React, { useState } from "react";
import on from "./assets/on.jpg";
import off from "./assets/off.jpg";

export default function App() {
  const [toggle, settoggle] = useState(false);

  const toggleButton = () => {
    settoggle(!toggle);
  };

  return (
    <div align="center">
      <img src={toggle ? off : on} alt="" />
      <button onClick={toggleButton}>{toggle ? "on" : "off"}</button>
    </div>
  );
}

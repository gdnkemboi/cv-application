import React, { useState } from "react";
import { GeneralInfo } from "./GeneralInfo";
import { Education } from "./Education";
import { Experience } from "./Experience";
import { Preview } from "./Preview";
import "./App.css";

function App() {
  const [generalInformation, setGeneralInformation] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    address: "",
  });

  const handleChange = (key, value) => {
    setGeneralInformation({
      ...generalInformation,
      [key]: value,
    });
  };

  return (
    <div className="container">
      <div className="cvEdit">
        <GeneralInfo onChange={handleChange} />
        <Education />
        <Experience />
      </div>

      <div className="preview">
        <Preview {...generalInformation} />
      </div>
    </div>
  );
}

export { App };

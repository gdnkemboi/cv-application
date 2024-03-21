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

  let [nextId, setNextId] = useState(0);

  const eduXpList = [
    {
      id: nextId++,
      university: "University of Technology",
      degree: "Bachelor of Science",
      startDate: "2016-09-01",
      endDate: "2020-06-01",
      location: "London, UK",
    },
    {
      id: nextId++,
      university: "Maseno University",
      degree: "Bachelor of Arts",
      startDate: "2012-09-01",
      endDate: "2016-06-01",
      location: "Maseno, Kenya",
    },
  ];

  const [educationXp, setEducationXp] = useState(eduXpList);

  return (
    <div className="container">
      <div className="cvEdit">
        <GeneralInfo onChange={handleChange} />
        <Education
          nextId={nextId}
          setNextId={setNextId}
          educationXp={educationXp}
          setEducationXp={setEducationXp}
        />
        <Experience />
      </div>

      <div className="preview">
        <Preview
          generalInformation={generalInformation}
          educationInformation={educationXp}
        />
      </div>
    </div>
  );
}

export { App };

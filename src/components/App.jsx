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

  const XpList = [
    {
      id: nextId++,
      company: "Meta",
      position: "Software Engineer",
      startDate: "2020-09-01",
      endDate: "2022-06-01",
      location: "London, UK",
      description: "Worked on the Meta platform.",
    },
    {
      id: nextId++,
      company: "Google",
      position: "Software Engineer",
      startDate: "2019-09-01",
      endDate: "2020-06-01",
      location: "London, UK",
      description: "Worked on the Google platform.",
    },
  ];

  const [experienceList, setExperienceList] = useState(XpList);

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
        <Experience
          nextId={nextId}
          setNextId={setNextId}
          experienceList={experienceList}
          setExperienceList={setExperienceList}
        />
      </div>

      <div className="preview">
        <Preview
          generalInformation={generalInformation}
          educationInformation={educationXp}
          experienceInformation={experienceList}
        />
      </div>
    </div>
  );
}

export { App };

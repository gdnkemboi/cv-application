import React, { useState } from "react";

function Input({ type, id, value, onChange }) {
  return <input type={type} id={id} value={value} onChange={onChange} />;
}

function Button({ text, onClick, style }) {
  return (
    <button onClick={onClick} style={style}>
      {text}
    </button>
  );
}

function EducationInput({
  display,
  hideEduInput,
  university,
  setUniversity,
  degree,
  setDegree,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  location,
  setLocation,
  addEducation,
  selectedEducation,
  editEducation,
  deleteEducation,
}) {
  return (
    <div className="educationInput" style={{ display: display }}>
      <div>
        <label htmlFor="university">University</label>
        <br />
        <Input
          type="text"
          id="university"
          value={university}
          onChange={(e) => setUniversity(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="degree">Degree</label>
        <br />
        <Input
          type="text"
          id="degree"
          value={degree}
          onChange={(e) => setDegree(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="startDate">Start Date</label>
        <br />
        <Input
          type="date"
          id="startDate"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="endDate">End Date</label>
        <br />
        <Input
          type="date"
          id="endDate"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="location">Location</label>
        <br />
        <Input
          type="text"
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>

      <Button
        text="Delete"
        onClick={() => {
          selectedEducation && deleteEducation();
          hideEduInput();
        }}
      />

      <Button
        text="Cancel"
        onClick={() => {
          hideEduInput();
          setUniversity("");
          setDegree("");
          setStartDate("");
          setEndDate("");
          setLocation("");
        }}
      />

      <Button
        text="Save"
        onClick={() => {
          selectedEducation ? editEducation() : addEducation();
          hideEduInput();
        }}
      />
    </div>
  );
}

function Education() {
  let [nextId, setNextId] = useState(0);
  const [university, setUniversity] = useState("");
  const [degree, setDegree] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [location, setLocation] = useState("");

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
  const [isVisible, setVisibility] = useState(false);
  const [selectedEducation, setSelectedEducation] = useState(null);

  function displayEduInput() {
    setVisibility(!isVisible);
  }

  function hideEduInput() {
    setVisibility(false);
    setSelectedEducation(null);
    setUniversity("");
    setDegree("");
    setStartDate("");
    setEndDate("");
    setLocation("");
  }

  function addEducation() {
    setEducationXp([
      ...educationXp,
      { id: nextId++, university, degree, startDate, endDate, location },
    ]);
    setNextId(nextId + 1);
    setUniversity("");
    setDegree("");
    setStartDate("");
    setEndDate("");
    setLocation("");
  }

  function handleEduClick(edu) {
    setSelectedEducation(edu);
    setUniversity(edu.university);
    setDegree(edu.degree);
    setStartDate(edu.startDate);
    setEndDate(edu.endDate);
    setLocation(edu.location);

    displayEduInput();
  }

  function editEducation() {
    setEducationXp(
      educationXp.map((edu) => {
        if (edu.id === selectedEducation.id) {
          return { ...edu, university, degree, startDate, endDate, location };
        }
        return edu;
      })
    );
  }

  function deleteEducation() {
    setEducationXp(
      educationXp.filter((edu) => edu.id !== selectedEducation.id)
    );
  }

  return (
    <div className="education">
      <h3>Education</h3>{" "}
      <EducationInput
        display={isVisible ? "block" : "none"}
        isVisible={isVisible}
        hideEduInput={hideEduInput}
        university={university}
        setUniversity={setUniversity}
        degree={degree}
        setDegree={setDegree}
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
        location={location}
        setLocation={setLocation}
        educationXp={educationXp}
        addEducation={addEducation}
        selectedEducation={selectedEducation}
        editEducation={editEducation}
        deleteEducation={deleteEducation}
      />
      <ul style={{ listStyle: "none", display: isVisible ? "none" : "block" }}>
        {educationXp.map((edu) => (
          <li
            key={edu.id}
            onClick={() => handleEduClick(edu)}
            style={{ cursor: "pointer" }}
          >
            {edu.university}
          </li>
        ))}
      </ul>
      <Button
        text="+ Education"
        onClick={displayEduInput}
        style={{ display: isVisible ? "none" : "block" }}
      />
    </div>
  );
}

export { Education };

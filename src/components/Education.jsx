import React, { useState } from "react";

function Input({ type, id, value, placeholder, onChange }) {
  return <input type={type} id={id} value={value} placeholder={placeholder} onChange={onChange} />;
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
  addEducation,
  selectedEducation,
  editEducation,
  deleteEducation,
  educationInfo,
  setEducationInfo,
  onChange,
}) {
  return (
    <div className="educationInput" style={{ display: display }}>
      <div>
        <label htmlFor="university">University</label>
        <br />
        <Input
          type="text"
          id="university"
          value={educationInfo.university}
          placeholder="Enter school/university"
          onChange={(e) => onChange("university", e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="degree">Degree</label>
        <br />
        <Input
          type="text"
          id="degree"
          value={educationInfo.degree}
          placeholder="Enter Degree/Field of study"
          onChange={(e) => onChange("degree", e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="startDate">Start Date</label>
        <br />
        <Input
          type="text"
          id="startDate"
          value={educationInfo.startDate}
          placeholder="Enter Start Date"
          onChange={(e) => onChange("startDate", e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="endDate">End Date</label>
        <br />
        <Input
          type="text"
          id="endDate"
          value={educationInfo.endDate}
          placeholder="Enter End Date"
          onChange={(e) => onChange("endDate", e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="location">Location</label>
        <br />
        <Input
          type="text"
          id="location"
          value={educationInfo.location}
          placeholder="Enter Location"
          onChange={(e) => onChange("location", e.target.value)}
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
          setEducationInfo({
            id: "",
            university: "",
            degree: "",
            startDate: "",
            endDate: "",
            location: "",
          });
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

function Education({ nextId, setNextId, educationXp, setEducationXp }) {
  const [educationInfo, setEducationInfo] = useState({
    id: "",
    university: "",
    degree: "",
    startDate: "",
    endDate: "",
    location: "",
  });

  const [isVisible, setVisibility] = useState(false);
  const [selectedEducation, setSelectedEducation] = useState(null);

  function displayEduInput() {
    setVisibility(!isVisible);
  }

  function hideEduInput() {
    setVisibility(false);
    setSelectedEducation(null);
    setEducationInfo({
      id: "",
      university: "",
      degree: "",
      startDate: "",
      endDate: "",
      location: "",
    });
  }

  const handleEduChange = (key, value) => {
    setEducationInfo({
      ...educationInfo,
      [key]: value,
    });
  };

  function addEducation() {
    setEducationInfo({ ...educationInfo, id: nextId });
    setEducationXp([...educationXp, educationInfo]);
    setNextId((nextId) => nextId + 1);
    setEducationInfo({
      id: "",
      university: "",
      degree: "",
      startDate: "",
      endDate: "",
      location: "",
    });
  }

  function handleEduClick(edu) {
    setSelectedEducation(edu);
    setEducationInfo(edu);

    displayEduInput();
  }

  function editEducation() {
    setEducationXp(
      educationXp.map((edu) => {
        if (edu.id === selectedEducation.id) {
          return { ...edu, ...educationInfo };
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
        educationXp={educationXp}
        addEducation={addEducation}
        selectedEducation={selectedEducation}
        editEducation={editEducation}
        deleteEducation={deleteEducation}
        educationInfo={educationInfo}
        setEducationInfo={setEducationInfo}
        onChange={handleEduChange}
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

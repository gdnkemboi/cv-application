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

function ExperienceInput({
  display,
  hideXpInput,
  addExperience,
  selectedExperience,
  editExperience,
  deleteExperience,
  experienceInfo,
  setExperienceInfo,
  onChange,
}) {
  return (
    <div className="experienceInput" style={{ display: display }}>
      <div>
        <label htmlFor="company">Company</label>
        <br />
        <Input
          type="text"
          id="company"
          value={experienceInfo.company}
          placeholder="Enter Company"
          onChange={(e) => onChange("company", e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="position">Position</label>
        <br />
        <Input
          type="text"
          id="position"
          value={experienceInfo.position}
          placeholder="Enter Position"
          onChange={(e) => onChange("position", e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="startDate">Start Date</label>
        <br />
        <Input
          type="text"
          id="startDate"
          value={experienceInfo.startDate}
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
          value={experienceInfo.endDate}
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
          value={experienceInfo.location}
          placeholder="Enter Location"
          onChange={(e) => onChange("location", e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <br />
        <Input
          type="text"
          id="description"
          value={experienceInfo.description}
          placeholder="Enter Description"
          onChange={(e) => onChange("description", e.target.value)}
        />
      </div>

      <Button
        text="Delete"
        onClick={() => {
          selectedExperience && deleteExperience();
          hideXpInput();
        }}
      />

      <Button
        text="Cancel"
        onClick={() => {
          hideXpInput();
          setExperienceInfo({
            id: "",
            company: "",
            position: "",
            startDate: "",
            endDate: "",
            location: "",
            description: "",
          });
        }}
      />

      <Button
        text="Save"
        onClick={() => {
          selectedExperience ? editExperience() : addExperience();
          hideXpInput();
        }}
      />
    </div>
  );
}

function Experience({ nextId, setNextId, experienceList, setExperienceList }) {
  const [experienceInfo, setExperienceInfo] = useState({
    id: "",
    company: "",
    position: "",
    startDate: "",
    endDate: "",
    location: "",
    description: "",
  });

  const [isVisible, setVisibility] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState(null);

  function displayXpInput() {
    setVisibility(!isVisible);
  }

  function hideXpInput() {
    setVisibility(false);
    setSelectedExperience(null);
    setExperienceInfo({
      id: "",
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      location: "",
      description: "",
    });
  }

  const handleXpChange = (key, value) => {
    setExperienceInfo({
      ...experienceInfo,
      [key]: value,
    });
  };

  function addExperience() {
    setExperienceInfo({ ...experienceInfo, id: nextId });
    setExperienceList([...experienceList, experienceInfo]);
    setNextId((nextId) => nextId + 1);
    setExperienceInfo({
      id: "",
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      location: "",
      description: "",
    });
  }

  function handleXpClick(xp) {
    setSelectedExperience(xp);
    setExperienceInfo(xp);

    displayXpInput();
  }

  function editExperience() {
    setExperienceList(
      experienceList.map((xp) => {
        if (xp.id === selectedExperience.id) {
          return {
            ...xp,
            ...experienceInfo,
          };
        }
        return xp;
      })
    );
  }

  function deleteExperience() {
    setExperienceList(
      experienceList.filter((xp) => xp.id !== selectedExperience.id)
    );
  }

  return (
    <div className="education">
      <h3>Experience</h3>
      <ExperienceInput
        display={isVisible ? "block" : "none"}
        hideXpInput={hideXpInput}
        addExperience={addExperience}
        selectedExperience={selectedExperience}
        editExperience={editExperience}
        deleteExperience={deleteExperience}
        experienceInfo={experienceInfo}
        setExperienceInfo={setExperienceInfo}
        onChange={handleXpChange}
      />
      <ul style={{ listStyle: "none", display: isVisible ? "none" : "block" }}>
        {experienceList.map((xp) => (
          <li
            key={xp.id}
            onClick={() => handleXpClick(xp)}
            style={{ cursor: "pointer" }}
          >
            {xp.company}
          </li>
        ))}
      </ul>
      <Button
        text="+ Experience"
        onClick={displayXpInput}
        style={{ display: isVisible ? "none" : "block" }}
      />
    </div>
  );
}

export { Experience };

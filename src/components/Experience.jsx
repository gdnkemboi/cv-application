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

function ExperienceInput({
  display,
  hideXpInput,
  company,
  setCompany,
  position,
  setPosition,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  location,
  setLocation,
  description,
  setDescription,
  addExperience,
  selectedExperience,
  editExperience,
  deleteExperience,
}) {
  return (
    <div className="experienceInput" style={{ display: display }}>
      <div>
        <label htmlFor="company">Company</label>
        <br />
        <Input
          type="text"
          id="company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="position">Position</label>
        <br />
        <Input
          type="text"
          id="position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
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
      <div>
        <label htmlFor="description">Description</label>
        <br />
        <Input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
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
          setCompany("");
          setPosition("");
          setStartDate("");
          setEndDate("");
          setLocation("");
          setDescription("");
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

function Experience() {
  let [nextId, setNextId] = useState(0);
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

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
  const [isVisible, setVisibility] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState(null);

  function displayXpInput() {
    setVisibility(!isVisible);
  }

  function hideXpInput() {
    setVisibility(false);
    setSelectedExperience(null);
    setCompany("");
    setPosition("");
    setStartDate("");
    setEndDate("");
    setLocation("");
    setDescription("");
  }

  function addExperience() {
    setExperienceList([
      ...experienceList,
      {
        id: nextId++,
        company,
        position,
        startDate,
        endDate,
        location,
        description,
      },
    ]);
    setNextId(nextId + 1);
    setCompany("");
    setPosition("");
    setStartDate("");
    setEndDate("");
    setLocation("");
    setDescription("");
  }

  function handleXpClick(xp) {
    setSelectedExperience(xp);
    setCompany(xp.company);
    setPosition(xp.position);
    setStartDate(xp.startDate);
    setEndDate(xp.endDate);
    setLocation(xp.location);
    setDescription(xp.description);

    displayXpInput();
  }

  function editExperience() {
    setExperienceList(
      experienceList.map((xp) => {
        if (xp.id === selectedExperience.id) {
          return {
            ...xp,
            company,
            position,
            startDate,
            endDate,
            location,
            description,
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
        company={company}
        setCompany={setCompany}
        position={position}
        setPosition={setPosition}
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
        location={location}
        setLocation={setLocation}
        description={description}
        setDescription={setDescription}
        addExperience={addExperience}
        selectedExperience={selectedExperience}
        editExperience={editExperience}
        deleteExperience={deleteExperience}
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

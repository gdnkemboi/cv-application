function Preview({
  generalInformation,
  educationInformation,
  experienceInformation,
}) {
  return (
    <div className="preview">
      <h3>Preview</h3>
      <div className="generalInfoPreview">
        <p>Full Name: {generalInformation.fullName}</p>
        <p>Email: {generalInformation.email}</p>
        <p>Phone Number: {generalInformation.phoneNumber}</p>
        <p>Address: {generalInformation.address}</p>
      </div>
      <div className="educationPreview">
        <h3>Education</h3>
        {educationInformation.map((edu) => (
          <div key={edu.id}>
            <p>University: {edu.university}</p>
            <p>Degree: {edu.degree}</p>
            <p>Start Date: {edu.startDate}</p>
            <p>End Date: {edu.endDate}</p>
            <p>Location: {edu.location}</p>
          </div>
        ))}
      </div>
      <div>
        <h3>Experience</h3>
        {experienceInformation.map((xp) => (
          <div key={xp.id}>
            <p>University: {xp.company}</p>
            <p>Degree: {xp.position}</p>
            <p>Start Date: {xp.startDate}</p>
            <p>End Date: {xp.endDate}</p>
            <p>Location: {xp.location}</p>
            <p>Description: {xp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export { Preview };

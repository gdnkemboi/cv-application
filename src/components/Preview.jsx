function Preview({ generalInformation, educationInformation }) {
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
        <h4>Education</h4>
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
    </div>
  );
}

export { Preview };

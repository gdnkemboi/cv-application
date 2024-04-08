import email from "/src/assets/icons/email.svg";
import phone from "/src/assets/icons/phone.svg";
import location from "/src/assets/icons/location.svg";

function Preview({
  generalInformation,
  educationInformation,
  experienceInformation,
}) {
  return (
    <div className="preview">
      <div className="generalInfoPreview">
        <div className="fullName">{generalInformation.fullName}</div>
        <div>
          <div className="email">
            <img src={email} />
            <span>{generalInformation.email}</span>
          </div>
          <div className="phone">
            <img src={phone} />
            <span>{generalInformation.phoneNumber}</span>
          </div>
          <div className="address">
            <img src={location} />
            <span>{generalInformation.address}</span>
          </div>
        </div>
      </div>
      <div className="educationPreview">
        <h3>Education</h3>
        <div className="educationInformation">
          {educationInformation.map((edu) => (
            <div key={edu.id} className="eduInfo">
              <div>
                <div>
                  {edu.startDate} - {edu.endDate}
                </div>
                <div>{edu.location}</div>
              </div>
              <div>
                <div className="university">{edu.university}</div>
                <div>{edu.degree}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="experiencePreview">
        <h3>Professional Experience</h3>
        <div className="experienceInformation">
          {experienceInformation.map((xp) => (
            <div key={xp.id} className="xpInfo">
              <div>
                <div>
                  {xp.startDate} - {xp.endDate}
                </div>
                <div>{xp.location}</div>
              </div>
              <div>
                <div className="company">{xp.company}</div>
                <div>{xp.position}</div>
                <div>{xp.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export { Preview };

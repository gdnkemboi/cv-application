import React, { useState } from "react";

function Input({ type, id }) {
  const [value, setValue] = useState("");

  return (
    <input
      type={type}
      id={id}
      value={value}
      onChange={(event) => setValue(event.target.value)}
    />
  );
}

function GeneralInfo() {
  return (
    <div className="generalInfo">
      <h1>General Information</h1>
      <div>
        <label htmlFor="fullname">Full Name</label>
        <br />
        <Input type="text" id="fullname" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <br />
        <Input type="email" id="email" />
      </div>
      <div>
        <label htmlFor="phoneNumber">Phone Number</label>
        <br />
        <Input type="date" id="phoneNumber" />
      </div>
      <div>
        <label htmlFor="address">Address</label>
        <br />
        <Input type="text" id="address" />
      </div>
    </div>
  );
}

export { GeneralInfo };

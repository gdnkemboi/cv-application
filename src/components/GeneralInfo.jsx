import React, { useState } from "react";

function Input({ type, id, value, onChange }) {
  return <input type={type} id={id} value={value} onChange={onChange} />;
}

function GeneralInfo({ onChange }) {
  return (
    <div className="generalInfo">
      <h3>General Information</h3>
      <div>
        <label htmlFor="fullName">Full Name</label>
        <br />
        <Input
          type="text"
          id="fullName"
          onChange={(e) => onChange("fullName", e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <br />
        <Input
          type="email"
          id="email"
          onChange={(e) => onChange("email", e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="phoneNumber">Phone Number</label>
        <br />
        <Input
          type="tel"
          id="phoneNumber"
          onChange={(e) => onChange("phoneNumber", e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="address">Address</label>
        <br />
        <Input
          type="text"
          id="address"
          onChange={(e) => onChange("address", e.target.value)}
        />
      </div>
    </div>
  );
}

export { GeneralInfo };

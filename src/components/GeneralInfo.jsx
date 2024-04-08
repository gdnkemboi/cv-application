import React, { useState } from "react";

function Input({ type, id, value, placeholder, onChange }) {
  return <input type={type} id={id} value={value} placeholder={placeholder} onChange={onChange} />;
}

function GeneralInfo({ generalInformation, onChange }) {
  return (
    <div className="generalInfo">
      <h3>General Information</h3>
      <div>
        <label htmlFor="fullName">Full Name</label>
        <br />
        <Input
          type="text"
          id="fullName"
          value={generalInformation.fullName}
          placeholder="First and last name"
          onChange={(e) => onChange("fullName", e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <br />
        <Input
          type="email"
          id="email"
          value={generalInformation.email}
          placeholder="Enter Email"
          onChange={(e) => onChange("email", e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="phoneNumber">Phone Number</label>
        <br />
        <Input
          type="tel"
          id="phoneNumber"
          value={generalInformation.phoneNumber}
          placeholder="Enter phone number"
          onChange={(e) => onChange("phoneNumber", e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="address">Address</label>
        <br />
        <Input
          type="text"
          id="address"
          value={generalInformation.address}
          placeholder="City, Country"
          onChange={(e) => onChange("address", e.target.value)}
        />
      </div>
    </div>
  );
}

export { GeneralInfo };

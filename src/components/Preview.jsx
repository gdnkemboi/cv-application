function Preview({ fullName, email, phoneNumber, address }) {
  return (
    <div className="preview">
      <h3>Preview</h3>

      <p>Full Name: {fullName}</p>
      <p>Email: {email}</p>
      <p>Phone Number: {phoneNumber}</p>
      <p>Address: {address}</p>
    </div>
  );
}

export { Preview };

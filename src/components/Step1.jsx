import React from 'react';
import {useState} from 'react';
import ReactDom from 'react-dom/client';
import './style.css';

function Step1() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !isValidEmail(email) || phone.length !== 10) {
      alert("Please fill in all fields correctly.");
      return;
    }

    console.log("Form Submitted", {
      firstName,
      lastName,
      email,
      phone,
    });
  };

  return (
    <div className="form-container">
      <h2>Personal Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name:</label>
          <input 
            type="text" 
            value={firstName} 
            onChange={(e) => setFirstName(e.target.value)} 
            required
          />
        </div>

        <div className="form-group">
          <label>Last Name:</label>
          <input 
            type="text" 
            value={lastName} 
            onChange={(e) => setLastName(e.target.value)} 
            required
          />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required
            placeholder="example@email.com"
          />
        </div>

        <div className="form-group">
          <label>Phone Number:</label>
          <input 
            type="tel" 
            value={phone} 
            onChange={(e) => {
              const onlyNums = e.target.value.replace(/\D/g, "");
              setPhone(onlyNums);
            }} 
            maxLength={10}
            placeholder="10-digit number"
            required
          />
        </div>

        <button type="Submit" className="submit-btn">Next</button>
      </form>
    </div>
  );
}

export default Step1;

import React from 'react';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import ReactDom from 'react-dom/client';
import './style.css';

// The first step of the form,it has 4 fields
// firstName,lastName,email and phone
function Step1() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate(); // <-- this allows programmatic navigation

// Basic regex to check if the entered email is valid
  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  
// Prevents the default form submission behavior 
  const handleSubmit = (e) => {
    e.preventDefault();


// Form validation:
// First name and last name should not be empty
// The email should pass the regex tex
// And the phone number should be exactly 10 digits
    if (!firstName || !lastName || !isValidEmail(email) || phone.length !== 10) {
      alert("Please fill in all fields correctly.");
      return;
    }
// Retrieves existing data from localStorage and saves the new data and merging with any data to local storage
    const existing = JSON.parse(localStorage.getItem('formData') || '{}');
    const currentData = {
      firstName,
      lastName,
      email,
      phone
    };
    localStorage.setItem('formData', JSON.stringify({ ...existing, ...currentData }));

    // Navigates the user to step 2
    navigate("/step2");

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

import React from 'react';
import {useState} from 'react';
import ReactDom from 'react-dom/client';
import { useNavigate } from 'react-router-dom';


// The third step of the form,it has 4 fields
// occupation,company,years of experience and education level
function Step3() {
  const [occupation, setOccupation] = useState("");
  const [company, setCompany] = useState("");
  const [yearsOfExperience, setYearsOfExperience] = useState("");
  const [educationLevel, setEducationLevel] = useState("");
  const navigate = useNavigate(); // <-- this allows programmatic navigation
  const [error, setError] = useState(""); // Error state
  
  

  const handleSubmit = (e) => {
    e.preventDefault();

      if (!occupation || !company || !yearsOfExperience || !educationLevel) {
      setError("Please fill in all fields before continuing");
      return;
    }
    setError("");

   const existing = JSON.parse(localStorage.getItem('formData') || '{}');
    const currentData = {
      occupation,
      company,
      yearsOfExperience,
      educationLevel
    };
    localStorage.setItem('formData', JSON.stringify({ ...existing, ...currentData }));  

// Validates input to make sure the value is not 0
  if (parseInt(yearsOfExperience) < 0) {
    alert("Years of experience cannot be negative.");
    return;
  }
  

  
    navigate("/step4");
   };

  return (
    <div className='form-container'>
      <h2>Professional Information</h2>
      {error && <p >{error}</p>} 
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label>Occupation:
            <input 
              type="text" 
              value={occupation} 
              onChange={(e) => setOccupation(e.target.value)} 
            />
          </label>
        </div>
        <div className='form-group'>
          <label>Company:
            <input 
              type="text" 
              value={company} 
              onChange={(e) => setCompany(e.target.value)} 
            />
          </label>
        </div>
        <div className='form-group'>
          <label>Years of Experience:
            <input 
              type="number" 
              min="0"
              value={yearsOfExperience} 
              onChange={(e) => setYearsOfExperience(e.target.value)} 
            />
          </label>
        </div>
        <div className='form-group'>
          <label>Education Level:
            <input 
              type="text" 
              value={educationLevel} 
              onChange={(e) => setEducationLevel(e.target.value)} 
            />
          </label>
        </div>
          <button type="Submit" className="submit-btn">Next</button>

      </form>
    </div>
  );
}

export default Step3;
import React from 'react';
import {useState} from 'react';
import ReactDom from 'react-dom/client';

function Step3() {
  const [occupation, setOccupation] = useState("");
  const [company, setCompany] = useState("");
  const [yearsOfExperience, setYearsOfExperience] = useState("");
  const [educationLevel, setEducationLevel] = useState("");

  return (
    <div className='form-container'>
      <h2>Professional Information</h2>
      <form>
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
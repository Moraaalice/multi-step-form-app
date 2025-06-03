import React from 'react';
import {useState} from 'react';
import ReactDom from 'react-dom/client';

function Step4() {
  const [disability, setDisability] = useState("");
  const [allergies, setAllergies] = useState("");
  const [insurance, setInsurance] = useState("");
  const [healthCondition, setHealthCondition] = useState("");

  return (
    <div className='form-container'>
      <h2>Health Information</h2>
      <form>
        <div className='form-group'>
          <label> Disability Status:
            <input 
              type="text" 
              value={disability} 
              onChange={(e) => setDisability(e.target.value)} 
            />
          </label>
        </div>
        <div className='form-group'>
          <label>Any type of allergies:
            <input 
              type="text" 
              value={allergies} 
              onChange={(e) => setAllergies(e.target.value)} 
            />
          </label>
        </div>
        <div className='form-group'>
          <label>Insurance Provider:
            <input 
              type="text" 
              value={insurance} 
              onChange={(e) => setInsurance(e.target.value)} 
            />
          </label>
        </div>
        <div className='form-group'>
          <label>Current Health Condition:
            <input 
              type="text" 
              value={healthCondition} 
              onChange={(e) => setHealthCondition(e.target.value)} 
            />
          </label>
        </div>
          <button type="Submit" className="submit-btn">Next</button>

      </form>
    </div>
  );
}

export default Step4;
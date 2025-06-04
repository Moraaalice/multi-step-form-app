import React from 'react';
import {useState} from 'react';
import ReactDom from 'react-dom/client';
import { useNavigate } from 'react-router-dom';


function Step2() {
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [stateProvince, setStateProvince] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const navigate = useNavigate(); // <-- this allows programmatic navigation

  const handleSubmit = (e) => {
    e.preventDefault();

    
    navigate("/step3");
   };

  return (
    <div className='form-container'>
      <h2>Address Information</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label>Street Address:
            <input 
              type="text" 
              value={streetAddress} 
              onChange={(e) => setStreetAddress(e.target.value)} 
            />
          </label>
        </div>
        <div className='form-group'>
          <label>City:
            <input 
              type="text" 
              value={city} 
              onChange={(e) => setCity(e.target.value)} 
            />
          </label>
        </div>
        <div className='form-group'>
          <label>State/Province:
            <input 
              type="text" 
              value={stateProvince} 
              onChange={(e) => setStateProvince(e.target.value)} 
            />
          </label>
        </div>
        <div className='form-group'>
          <label>Postal Code:
            <input 
              type="text" 
              value={postalCode} 
              onChange={(e) => setPostalCode(e.target.value)} 
            />
          </label>
        </div>
        <button type="Submit" className="submit-btn">Next</button>

      </form>
    </div>
  );
}

export default Step2;
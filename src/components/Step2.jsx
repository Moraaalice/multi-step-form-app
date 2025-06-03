import React from 'react';
import {useState} from 'react';
import ReactDom from 'react-dom/client';

function Step2() {
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [stateProvince, setStateProvince] = useState("");
  const [postalCode, setPostalCode] = useState("");

  return (
    <div className='form-container'>
      <h2>Address Information</h2>
      <form>
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
              type="email" 
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
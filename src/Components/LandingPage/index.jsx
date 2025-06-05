import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css'; 

// This is the landing page before navigating to the forms
function LandingPage() {
  const navigate = useNavigate();

  const goToStep1 = () => {
    navigate('/step1');
  };

  return (
    <div className="landing-container">
      <div className="landing-box">
        <h1>Welcome to the Multi-Step Form</h1>
        <p>Please click below to get started with your application.</p>
        <button className="start-btn" onClick={goToStep1}>Start</button>
      </div>
    </div>
  );
}

export default LandingPage;

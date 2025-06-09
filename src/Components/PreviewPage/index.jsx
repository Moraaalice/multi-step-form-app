import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

// This code displays a preview of form data stored in localStorage, allowing users to review before submission. 
// When submitted, it sends the data to a backend API and navigates to a submissions page on success.

// Preview component to display form data before submission
function Preview() {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("formData") || "{}");
    setFormData(data);
  }, []);

  const handleBack = () => {
    navigate("/step4");
  };

  const handleSubmit = async () => {
  try {
    // Send POST request to backend API
    const response = await fetch("https://backend-form-production.up.railway.app/api/submit/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
         "Cache-Control": "no-cache",
         "Pragma": "no-cache",
      },
      body: JSON.stringify(formData),
    });
  //Parse response JSON
    const result = await response.json();
    if (response.ok) {
      alert(result.message || "Form submitted successfully!");
      localStorage.removeItem("formData");
      navigate("/"); // or a success page
    } else {
      alert("Failed to submit: " + result.error);
    }
    navigate("/submissions");
  } catch (error) {
    // Network or other errors
    console.error("Submission error:", error);
    alert("An error occurred. Please try again.");
  }
};


//The return statement renders a preview UI showing all stored form data in a clean, labeled format, 
//with "Back" and "Submit" buttons. It displays each form field (with formatted keys) and its value, or a "No data" message if empty.

  return (
    <div className="preview-container">
      <h2 className="preview-title">Preview Your Information</h2>
      <div className="preview-content">
        {Object.keys(formData).length === 0 && <p>No data to display.</p>}
        {Object.entries(formData).map(([key, value]) => (
          <div key={key} className="preview-item">
            <span className="preview-label">
              {key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}:
            </span>
            <span className="preview-value">{value}</span>
          </div>
        ))}
      </div>

      <div className="preview-buttons">
        <button onClick={handleBack} className="preview-btn back-btn">Back</button>
        <button type="button" onClick={handleSubmit} className="preview-btn submit-btn">Submit</button>
      </div>
    </div>
  );
}
export default Preview;

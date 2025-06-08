import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

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
    const response = await fetch("http://127.0.0.1:8000/api/submit/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

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
    console.error("Submission error:", error);
    alert("An error occurred. Please try again.");
  }
};


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

import React, { useEffect, useState } from "react";
import './style.css';

// This component fetches and displays form submissions from a backend API, allowing users to view and edit each submission. 
// It manages loading/error states and provides a toggle between view and edit modes for each submission record, with full CRUD functionality for updating data.
function Submissions() {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editIndex, setEditIndex] = useState(null);
  const [editData, setEditData] = useState({});

    // Fetch submissions data 
  useEffect(() => {
    fetch("https://backend-form-production.up.railway.app/api/submit/")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setSubmissions(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Render different states

  if (loading) return <p>Loading submissions...</p>;
  if (error) return <p>Error: {error}</p>;
  if (submissions.length === 0) return <p>No submissions found.</p>;

    // Edit handlers
  const startEdit = (index) => {
    setEditIndex(index);
    setEditData({ ...submissions[index] }); 
  };

  const cancelEdit = () => {
    setEditIndex(null);
    setEditData({});
  };
  // Handle input changes during editing

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

    // Save edited data to backend
  const saveEdit = () => {
    fetch(`https://backend-form-production.up.railway.app/submit/${editData.id}/update/`, {
    method: "PUT",
      body: JSON.stringify(editData),
      headers: {
    "Content-Type": "application/json",
  },
    })
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to update: ${res.status}`);
        return res.json();
      })
      .then((updatedSubmission) => {
        // Update local state with the updated submission
        const updatedSubmissions = [...submissions];
        updatedSubmissions[editIndex] = updatedSubmission;
        setSubmissions(updatedSubmissions);

        setEditIndex(null);
        setEditData({});
      })
      .catch((err) => {
        alert(`Update failed: ${err.message}`);
      });
  };

  return (
    <div className="submissions-container">
      <h2>Submissions</h2>
      <ul>
        {submissions.map((submission, index) => (
          <li key={submission.id} className="submission-item">
            {editIndex === index ? (
              <>
                <label>
                  ID: <input type="text" name="id" value={editData.id} disabled />
                </label>
                <br />
                <label>
                  First Name:{" "}
                  <input
                    type="text"
                    name="firstName"
                    value={editData.firstName || ""}
                    onChange={handleChange}
                  />
                </label>
                <br />
                <label>
                  Last Name:{" "}
                  <input
                    type="text"
                    name="lastName"
                    value={editData.lastName || ""}
                    onChange={handleChange}
                  />
                </label>
                <br />
                <label>
                  Email:{" "}
                  <input
                    type="email"
                    name="email"
                    value={editData.email || ""}
                    onChange={handleChange}
                  />
                </label>
                <br />
                <label>
                  Phone Number:{" "}
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={editData.phoneNumber || ""}
                    onChange={handleChange}
                  />
                </label>
                <br />
                <label>
                  Street Address:{" "}
                  <input
                    type="text"
                    name="streetAddress"
                    value={editData.streetAddress  || ""}
                    onChange={handleChange}
                  />
                </label>
                <br />
                <label>
                  City:{" "}
                  <input
                    type="text"
                    name="city"
                    value={editData.city || ""}
                    onChange={handleChange}
                  />
                </label>
                <br />
                <label>
                  State/Province:{" "}
                  <input
                    type="text"
                    name="stateProvince"
                    value={editData.stateProvince || ""}
                    onChange={handleChange}
                  />
                </label>
                <br />
                <label>
                  Postal Code:{" "}
                  <input
                    type="text"
                    name="postalCode"
                    value={editData.postalCode || ""}
                    onChange={handleChange}
                  />
                </label>
                <br />
                <label>
                  Occupation:{" "}
                  <input
                    type="text"
                    name="occupation"
                    value={editData.occupation || ""}
                    onChange={handleChange}
                  />
                </label>
                <br />
                <label>
                  Company:{" "}
                  <input
                    type="text"
                    name="company"
                    value={editData.company || ""}
                    onChange={handleChange}
                  />
                </label>
                <br />
                <label>
                  Years Of Experience:{" "}
                  <input
                    type="text"
                    name="yearsOfExperience"
                    value={editData.yearsOfExperience || ""}
                    onChange={handleChange}
                  />
                </label>
                <br />
                <label>
                  Education Level:{" "}
                  <input
                    type="text"
                    name="educationLevel"
                    value={editData.educationLevel || ""}
                    onChange={handleChange}
                  />
                </label>
                <br />
                <label>
                  Disability:{" "}
                  <input
                    type="text"
                    name="disability"
                    value={editData.disability || ""}
                    onChange={handleChange}
                  />
                </label>
                <br />
                <label>
                  Allergies:{" "}
                  <input
                    type="text"
                    name="allergies"
                    value={editData.allergies || ""}
                    onChange={handleChange}
                  />
                </label>
                <br />
                 <label>
                  Insurance:{" "}
                  <input
                    type="text"
                    name="insurance"
                    value={editData.insurance || ""}
                    onChange={handleChange}
                  />
                </label>
                <br />
                 <label>
                  Health Condition:{" "}
                  <input
                    type="text"
                    name="healthCondition"
                    value={editData.healthCondition || ""}
                    onChange={handleChange}
                  />
                </label>
                <button onClick={saveEdit}>Save</button>{" "}
                <button onClick={cancelEdit}>Cancel</button>
              </>
            ) : (
              <>
                <strong>ID:</strong> {submission.id} <br />
                <strong>Name:</strong> {submission.name} <br />
                <strong>Email:</strong> {submission.email} <br />
                <button onClick={() => startEdit(index)}>Edit</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Submissions;

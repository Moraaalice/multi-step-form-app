import React, { useEffect, useState } from "react";

function Submissions() {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Fetching submissions...");

    fetch("https://backend-form-production.up.railway.app/api/submit/", {
      method: "POST",
      headers: {
        "Cache-Control": "no-cache",
        "Pragma": "no-cache",
        "Expires": "0",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched data:", data);
        setSubmissions(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading submissions...</p>;
  if (error) return <p>Error: {error}</p>;
  if (submissions.length === 0) return <p>No submissions found.</p>;

  return (
    <div>
      <h2>Submissions</h2>
      <ul>
        {submissions.map((submission) => (
          <li key={submission.id}>
            ID: {submission.id} - Data: {JSON.stringify(submission)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Submissions;

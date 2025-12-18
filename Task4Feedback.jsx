import React, { useState } from "react";

export default function Feedback() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: ""
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
    setFormData({ name: "", email: "", feedback: "" });
  };

  return (
    <>
      {/* CSS */}
      <style>{`
        body {
          margin: 0;
          font-family: Arial, sans-serif;
          background: linear-gradient(135deg, #89f7fe, #66a6ff);
        }

        .container {
          width: 380px;
          margin: 60px auto;
          background: white;
          padding: 25px;
          border-radius: 15px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.3);
        }

        h2 {
          text-align: center;
          color: #0066ff;
        }

        input, textarea {
          width: 100%;
          padding: 10px;
          margin: 10px 0;
          border-radius: 6px;
          border: 1px solid #ccc;
          font-size: 14px;
        }

        button {
          width: 100%;
          padding: 12px;
          background: #0066ff;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          cursor: pointer;
        }

        button:hover {
          background: #004bcc;
        }

        .output {
          margin-top: 20px;
          background: #f2f2f2;
          padding: 15px;
          border-radius: 10px;
        }

        .output p {
          margin: 6px 0;
          font-weight: bold;
        }
      `}</style>

      <div className="container">
        <h2>📝 Feedback Form</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="feedback"
            placeholder="Your Feedback"
            rows="4"
            value={formData.feedback}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Submit Feedback</button>
        </form>

        {submittedData && (
          <div className="output">
            <h3>📌 Submitted Feedback</h3>
            <p>Name: {submittedData.name}</p>
            <p>Email: {submittedData.email}</p>
            <p>Feedback: {submittedData.feedback}</p>
          </div>
        )}
      </div>
    </>
  );
}

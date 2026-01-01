import React, { useState } from "react";

function EventForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    event: "",
    file: null,
    comments: "",
    services: []
  });

  const handleChange = (e) => {
    const { name, value, type, files, checked } = e.target;

    if (type === "checkbox") {
      setFormData({
        ...formData,
        services: checked
          ? [...formData.services, value]
          : formData.services.filter(item => item !== value)
      });
    } else {
      setFormData({
        ...formData,
        [name]: type === "file" ? files[0] : value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("🎉 Event Registered Successfully!");
  };

  return (
    <div style={styles.page}>
      <form onSubmit={handleSubmit} style={styles.form}>

        <h2 style={styles.heading}>Event Registration Form</h2>

        <label style={styles.label}>Full Name</label>
        <input type="text" name="name" style={styles.input}
          placeholder="Enter your name" onChange={handleChange} />

        <label style={styles.label}>Email</label>
        <input type="email" name="email" style={styles.input}
          placeholder="Enter your email" onChange={handleChange} />

        <label style={styles.label}>Password</label>
        <input type="password" name="password" style={styles.input}
          placeholder="Create password" onChange={handleChange} />

        <label style={styles.label}>Gender</label>
        <div style={styles.radioGroup}>
          <label><input type="radio" name="gender" value="Male" onChange={handleChange} /> Male</label>
          <label><input type="radio" name="gender" value="Female" onChange={handleChange} /> Female</label>
          <label><input type="radio" name="gender" value="Other" onChange={handleChange} /> Other</label>
        </div>

        <label style={styles.label}>Select Event</label>
        <select name="event" style={styles.input} onChange={handleChange}>
          <option value="">Select Event Type</option>
          <option>Workshop</option>
          <option>Hackathon</option>
          <option>Cultural Fest</option>
          <option>Seminar</option>
        </select>

        <label style={styles.label}>Required Services (Checkbox)</label>
        <div style={styles.checkbox}>
          <label><input type="checkbox" value="Food Service" onChange={handleChange} /> Food Service</label>
          <label><input type="checkbox" value="Accommodation" onChange={handleChange} /> Accommodation</label>
          <label><input type="checkbox" value="Transport" onChange={handleChange} /> Transport</label>
        </div>

        <label style={styles.label}>Upload ID / Ticket</label>
        <input type="file" name="file" style={styles.fileInput} onChange={handleChange} />

        <label style={styles.label}>Comments</label>
        <textarea name="comments" rows="3" style={styles.textarea}
          placeholder="I'm excited to join!" onChange={handleChange}></textarea>

        <button type="submit" style={styles.submitBtn}>
          Register Now
        </button>

      </form>
    </div>
  );
}

const styles = {
  page: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },

  form: {
    width: "380px",
    background: "rgba(255,255,255,0.86)",
    padding: "25px",
    borderRadius: "15px",
    boxShadow: "0 6px 18px rgba(0,0,0,0.2)",
    fontFamily: "Arial"
  },

  heading: {
    textAlign: "center",
    marginBottom: "10px",
    color: "#d63384",
    fontWeight: "700"
  },

  label: {
    fontWeight: "600",
    fontSize: "14px",
    marginTop: "8px"
  },

  input: {
    width: "100%",
    padding: "8px",
    border: "1px solid #bbb",
    borderRadius: "8px",
    margin: "5px 0"
  },

  textarea: {
    width: "100%",
    padding: "8px",
    borderRadius: "8px",
    border: "1px solid #bbb",
    marginTop: "5px"
  },

  radioGroup: {
    display: "flex",
    gap: "15px",
    margin: "5px 0"
  },

  checkbox: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    margin: "6px 0"
  },

  fileInput: {
    margin: "7px 0"
  },

  submitBtn: {
    width: "100%",
    padding: "10px",
    marginTop: "10px",
    background: "#ff8ac6",
    color: "#fff",
    fontWeight: "bold",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer"
  }
};

export default EventForm;


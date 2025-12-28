import React, { useState } from "react";

function WorkshopRegistration() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    workshop: "",
    mode: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.workshop || !form.mode) {
      alert("Please fill all details!");
      return;
    }

    alert("🎉 Workshop Registered Successfully!");
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>

        {/* FORM */}
        <form style={styles.form} onSubmit={handleSubmit}>
          <h2 style={styles.heading}>Workshop Registration</h2>

          <label style={styles.label}>Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            style={styles.input}
            onChange={handleChange}
          />

          <label style={styles.label}>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            style={styles.input}
            onChange={handleChange}
          />

          <label style={styles.label}>Select Workshop</label>
          <select
            name="workshop"
            style={styles.input}
            onChange={handleChange}
          >
            <option value="">Choose</option>
            <option>React Basics</option>
            <option>UI/UX Design</option>
            <option>Data Analytics</option>
            <option>AI & ML</option>
          </select>

          <label style={styles.label}>Mode</label>
          <div style={styles.radio}>
            <label>
              <input type="radio" name="mode" value="Online" onChange={handleChange} /> Online
            </label>
            <label>
              <input type="radio" name="mode" value="Offline" onChange={handleChange} /> Offline
            </label>
          </div>

          <button type="submit" style={styles.button}>
            Register
          </button>
        </form>

        {/* LIVE PREVIEW */}
        <div style={styles.preview}>
          <h3 style={styles.previewHeading}>Live Preview</h3>
          <p><b>Name:</b> {form.name || "---"}</p>
          <p><b>Email:</b> {form.email || "---"}</p>
          <p><b>Workshop:</b> {form.workshop || "---"}</p>
          <p><b>Mode:</b> {form.mode || "---"}</p>
        </div>

      </div>
    </div>
  );
}

/* ===== COLORFUL STYLES ===== */
const styles = {
  page: {
    width: "100vw",
    height: "100vh",
    background: "linear-gradient(135deg, #ff9a9e, #fad0c4)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Arial"
  },

  container: {
    display: "flex",
    gap: "20px"
  },

  form: {
    width: "320px",
    background: "#fff",
    padding: "20px",
    borderRadius: "15px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.25)"
  },

  heading: {
    textAlign: "center",
    color: "#ff4d6d",
    marginBottom: "12px"
  },

  label: {
    fontWeight: "600",
    fontSize: "14px",
    marginTop: "6px"
  },

  input: {
    width: "100%",
    padding: "8px",
    margin: "5px 0",
    borderRadius: "8px",
    border: "1px solid #bbb"
  },

  radio: {
    display: "flex",
    gap: "15px",
    margin: "6px 0"
  },

  button: {
    width: "100%",
    padding: "10px",
    marginTop: "12px",
    background: "linear-gradient(45deg, #ff4d6d, #ff758f)",
    color: "white",
    border: "none",
    borderRadius: "20px",
    fontWeight: "bold",
    cursor: "pointer"
  },

  preview: {
    width: "260px",
    background: "#fff7f9",
    padding: "20px",
    borderRadius: "15px",
    boxShadow: "0 6px 15px rgba(0,0,0,0.2)"
  },

  previewHeading: {
    textAlign: "center",
    color: "#6a0572",
    marginBottom: "10px"
  }
};

export default WorkshopRegistration;

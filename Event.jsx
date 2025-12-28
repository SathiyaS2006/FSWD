import React, { useState } from "react";

function EventRegistration() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    event: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.event) {
      alert("Please fill all details!");
      return;
    }

    const confirmRegister = confirm(
      "Confirm Registration?\n\n" +
      "Name: " + form.name +
      "\nEmail: " + form.email +
      "\nEvent: " + form.event
    );

    if (confirmRegister) {
      alert("🎉 Event Registered Successfully!");
    } else {
      alert("❌ Registration Cancelled");
    }
  };

  return (
    <div style={styles.page}>
      <form style={styles.form} onSubmit={handleSubmit}>

        <h2 style={styles.heading}>Event Registration</h2>

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

        <label style={styles.label}>Select Event</label>
        <select
          name="event"
          style={styles.input}
          onChange={handleChange}
        >
          <option value="">Choose Event</option>
          <option>Workshop</option>
          <option>Seminar</option>
          <option>Hackathon</option>
          <option>Cultural Fest</option>
        </select>

        <button type="submit" style={styles.submitBtn}>
          Register
        </button>

      </form>
    </div>
  );
}

/* ===== STYLES ===== */
const styles = {
  page: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#fce4ec"
  },

  form: {
    width: "340px",
    background: "#fff",
    padding: "25px",
    borderRadius: "15px",
    boxShadow: "0 6px 18px rgba(0,0,0,0.2)",
    fontFamily: "Arial"
  },

  heading: {
    textAlign: "center",
    color: "#d63384",
    marginBottom: "15px"
  },

  label: {
    fontWeight: "600",
    fontSize: "14px",
    marginTop: "8px"
  },

  input: {
    width: "100%",
    padding: "8px",
    borderRadius: "8px",
    border: "1px solid #bbb",
    margin: "5px 0"
  },

  submitBtn: {
    width: "100%",
    padding: "10px",
    marginTop: "12px",
    background: "#ff8ac6",
    color: "white",
    fontWeight: "bold",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer"
  }
};

export default EventRegistration;

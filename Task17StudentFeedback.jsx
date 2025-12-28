import React, { useState } from "react";

function Feedback() {
  const [form, setForm] = useState({
    name: "",
    rating: "",
    comments: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.rating || !form.comments) {
      alert("⚠️ Please fill all fields!");
      return;
    }

    alert(
      "🎓 Feedback Submitted Successfully!\n\n" +
      "Name: " + form.name +
      "\nRating: " + form.rating +
      "\nComments: " + form.comments
    );
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>

        {/* FEEDBACK FORM */}
        <form style={styles.form} onSubmit={handleSubmit}>
          <h2 style={styles.heading}>Student Feedback</h2>

          <label style={styles.label}>Student Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            style={styles.input}
            onChange={handleChange}
          />

          <label style={styles.label}>Rating</label>
          <select
            name="rating"
            style={styles.input}
            onChange={handleChange}
          >
            <option value="">Select Rating</option>
            <option>⭐</option>
            <option>⭐⭐</option>
            <option>⭐⭐⭐</option>
            <option>⭐⭐⭐⭐</option>
            <option>⭐⭐⭐⭐⭐</option>
          </select>

          <label style={styles.label}>Comments</label>
          <textarea
            name="comments"
            placeholder="Write your feedback..."
            rows="3"
            style={styles.textarea}
            onChange={handleChange}
          ></textarea>

          <button type="submit" style={styles.button}>
            Submit Feedback
          </button>
        </form>

      </div>
    </div>
  );
}

/* ===== DIFFERENT COLOR THEME ===== */
const styles = {
  page: {
    width: "100vw",
    height: "100vh",
    background: "linear-gradient(135deg, #a8e063, #56ab2f)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Tahoma"
  },

  container: {
    display: "flex"
  },

  form: {
    width: "330px",
    background: "#fffdf5",
    padding: "22px",
    borderRadius: "16px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.25)"
  },

  heading: {
    textAlign: "center",
    color: "#ff7a00",
    marginBottom: "14px"
  },

  label: {
    fontWeight: "600",
    fontSize: "14px",
    marginTop: "8px",
    color: "#333"
  },

  input: {
    width: "100%",
    padding: "8px",
    margin: "6px 0",
    borderRadius: "8px",
    border: "1px solid #bbb"
  },

  textarea: {
    width: "100%",
    padding: "8px",
    margin: "6px 0",
    borderRadius: "8px",
    border: "1px solid #bbb"
  },

  button: {
    width: "100%",
    padding: "10px",
    marginTop: "14px",
    background: "linear-gradient(45deg, #ff7a00, #ffb347)",
    color: "white",
    border: "none",
    borderRadius: "22px",
    fontWeight: "bold",
    cursor: "pointer"
  }
};

export default Feedback;

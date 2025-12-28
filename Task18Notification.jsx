import React, { useState } from "react";

function Notification() {
  const [message, setMessage] = useState("");
  const [type, setType] = useState("");

  const handleNotify = (e) => {
    e.preventDefault();

    if (!message || !type) {
      alert("⚠️ Please select notification type and message!");
      return;
    }

    if (type === "Success") {
      alert("✅ SUCCESS: " + message);
    } else if (type === "Warning") {
      alert("⚠️ WARNING: " + message);
    } else if (type === "Error") {
      alert("❌ ERROR: " + message);
    }

    setMessage("");
    setType("");
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>

        {/* NOTIFICATION FORM */}
        <form style={styles.form} onSubmit={handleNotify}>
          <h2 style={styles.heading}>Dashboard Notification</h2>

          <label style={styles.label}>Notification Message</label>
          <input
            type="text"
            placeholder="Enter notification message"
            style={styles.input}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <label style={styles.label}>Notification Type</label>
          <select
            style={styles.input}
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="">Select Type</option>
            <option>Success</option>
            <option>Warning</option>
            <option>Error</option>
          </select>

          <button type="submit" style={styles.button}>
            Send Notification
          </button>
        </form>

      </div>
    </div>
  );
}

/* ===== COLORFUL STYLES ===== */
const styles = {
  page: {
    width: "100vw",
    height: "100vh",
    background: "linear-gradient(135deg, #2193b0, #6dd5ed)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Arial"
  },

  container: {
    display: "flex"
  },

  form: {
    width: "340px",
    background: "#ffffff",
    padding: "22px",
    borderRadius: "16px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.25)"
  },

  heading: {
    textAlign: "center",
    color: "#0b3c5d",
    marginBottom: "14px"
  },

  label: {
    fontWeight: "600",
    fontSize: "14px",
    marginTop: "8px"
  },

  input: {
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
    background: "linear-gradient(45deg, #00c6ff, #0072ff)",
    color: "white",
    border: "none",
    borderRadius: "22px",
    fontWeight: "bold",
    cursor: "pointer"
  }
};

export default Notification;

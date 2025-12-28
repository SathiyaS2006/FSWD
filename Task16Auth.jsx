import React, { useState } from "react";

function Auth() {
  const [form, setForm] = useState({
    username: "",
    password: ""
  });

  // Dummy credentials (for simulation)
  const correctUsername = "admin";
  const correctPassword = "1234";

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!form.username || !form.password) {
      alert("⚠️ Please fill all fields!");
      return;
    }

    // Authentication check
    if (
      form.username === correctUsername &&
      form.password === correctPassword
    ) {
      alert("✅ Login Successful! Welcome " + form.username);
    } else {
      alert("❌ Invalid Username or Password!");
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>

        {/* AUTH FORM */}
        <form style={styles.form} onSubmit={handleSubmit}>
          <h2 style={styles.heading}>User Login</h2>

          <label style={styles.label}>Username</label>
          <input
            type="text"
            name="username"
            placeholder="Enter username"
            style={styles.input}
            onChange={handleChange}
          />

          <label style={styles.label}>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            style={styles.input}
            onChange={handleChange}
          />

          <button type="submit" style={styles.button}>
            Login
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
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Arial"
  },

  container: {
    display: "flex"
  },

  form: {
    width: "300px",
    background: "#ffffff",
    padding: "22px",
    borderRadius: "15px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.25)"
  },

  heading: {
    textAlign: "center",
    color: "#4b0082",
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
    margin: "6px 0",
    borderRadius: "8px",
    border: "1px solid #bbb"
  },

  button: {
    width: "100%",
    padding: "10px",
    marginTop: "12px",
    background: "linear-gradient(45deg, #43cea2, #185a9d)",
    color: "white",
    border: "none",
    borderRadius: "20px",
    fontWeight: "bold",
    cursor: "pointer"
  }
};

export default Auth;


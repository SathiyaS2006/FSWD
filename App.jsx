import React, { useState } from "react";

function Login() {
  const [form, setForm] = useState({
    username: "",
    password: "",
    role: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.username || !form.password || !form.role) {
      alert("Please fill all details!");
      return;
    }

    if (form.role === "Admin") {
      alert("✅ Welcome Admin! Redirecting to Admin Dashboard");
    } else if (form.role === "User") {
      alert("👤 Welcome User! Redirecting to User Home Page");
    } else {
      alert("🎯 Welcome Guest! Redirecting to Guest Page");
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>

        {/* LOGIN FORM */}
        <form style={styles.form} onSubmit={handleSubmit}>
          <h2 style={styles.heading}>Login</h2>

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

          <label style={styles.label}>Select Role</label>
          <select
            name="role"
            style={styles.input}
            onChange={handleChange}
          >
            <option value="">Choose Role</option>
            <option>Admin</option>
            <option>User</option>
            <option>Guest</option>
          </select>

          <button type="submit" style={styles.button}>
            Login
          </button>
        </form>

      </div>
    </div>
  );
}

/* ===== SAME FORMAT, NO PREVIEW ===== */
const styles = {
  page: {
    width: "100vw",
    height: "100vh",
    background: "linear-gradient(135deg, #43cea2, #185a9d)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Arial"
  },

  container: {
    display: "flex"
  },

  form: {
    width: "320px",
    background: "#ffffff",
    padding: "20px",
    borderRadius: "15px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.25)"
  },

  heading: {
    textAlign: "center",
    color: "#185a9d",
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

  button: {
    width: "100%",
    padding: "10px",
    marginTop: "12px",
    background: "linear-gradient(45deg, #43cea2, #36d1dc)",
    color: "white",
    border: "none",
    borderRadius: "20px",
    fontWeight: "bold",
    cursor: "pointer"
  }
};

export default Login;

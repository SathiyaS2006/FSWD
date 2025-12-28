import React, { useState } from "react";

function UserProfile() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    age: ""
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!user.name || !user.email || !user.age) {
      alert("Please fill all fields!");
      return;
    }

    if (!user.email.includes("@")) {
      alert("Invalid email address!");
      return;
    }

    if (user.age <= 0 || isNaN(user.age)) {
      alert("Enter valid age!");
      return;
    }

    const confirmUpdate = confirm(
      "Save Profile Changes?\n\n" +
      "Name: " + user.name +
      "\nEmail: " + user.email +
      "\nAge: " + user.age
    );

    if (confirmUpdate) {
      alert("🎯 Profile Updated Successfully!");
    } else {
      alert("Update Cancelled!");
    }
  };

  return (
    <div style={styles.page}>
      <form style={styles.card} onSubmit={handleSubmit}>

        <h2 style={styles.heading}>User Profile</h2>

        <label style={styles.label}>Name</label>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          style={styles.input}
          onChange={handleChange}
        />

        <label style={styles.label}>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Your email"
          style={styles.input}
          onChange={handleChange}
        />

        <label style={styles.label}>Age</label>
        <input
          type="number"
          name="age"
          placeholder="Your age"
          style={styles.input}
          onChange={handleChange}
        />

        <button type="submit" style={styles.button}>
          Save Changes
        </button>

      </form>
    </div>
  );
}

/* ===== DIFFERENT COLOR THEME ===== */
const styles = {
  page: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #667eea, #764ba2)"
  },

  card: {
    width: "340px",
    background: "#f7f9ff",
    padding: "25px",
    borderRadius: "18px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
    fontFamily: "Verdana"
  },

  heading: {
    textAlign: "center",
    color: "#4b0082",
    marginBottom: "15px"
  },

  label: {
    fontSize: "13px",
    fontWeight: "600",
    color: "#333"
  },

  input: {
    width: "100%",
    padding: "9px",
    borderRadius: "10px",
    border: "1px solid #aaa",
    margin: "6px 0"
  },

  button: {
    width: "100%",
    padding: "11px",
    marginTop: "14px",
    background: "linear-gradient(45deg, #43cea2, #185a9d)",
    color: "#fff",
    border: "none",
    borderRadius: "20px",
    fontWeight: "bold",
    cursor: "pointer"
  }
};

export default UserProfile;

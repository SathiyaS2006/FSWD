import React, { useState } from "react";

function Login() {
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("Invalid username or password");
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>

        <h2 style={styles.title}>Login</h2>

        {error && <p style={styles.error}>{error}</p>}

        <input
          type="text"
          placeholder="Username"
          style={styles.input}
        />

        <input
          type="password"
          placeholder="Password"
          style={styles.input}
        />

        <button style={styles.button} onClick={handleSubmit}>
          Login
        </button>

      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#2f3640"
  },
  card: {
    width: "300px",
    padding: "20px",
    background: "#fff",
    borderRadius: "10px"
  },
  title: {
    textAlign: "center",
    marginBottom: "10px"
  },
  input: {
    width: "100%",
    padding: "8px",
    margin: "6px 0"
  },
  button: {
    width: "100%",
    padding: "10px",
    background: "#e84118",
    color: "#fff",
    border: "none",
    marginTop: "10px"
  },
  error: {
    color: "red",
    textAlign: "center"
  }
};

export default Login;

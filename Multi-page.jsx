import React from "react";
import { Link, Routes, Route, useLocation } from "react-router-dom";

function Students() {
  return (
    <div>
      <h3>Student List</h3>
      <ul>
        <li>Arun – CSE</li>
        <li>Priya – IT</li>
        <li>Karthik – ECE</li>
      </ul>
    </div>
  );
}

function Courses() {
  return (
    <div>
      <h3>Courses</h3>
      <ul>
        <li>React Basics</li>
        <li>Data Analytics</li>
        <li>UI/UX Design</li>
      </ul>
    </div>
  );
}

function Profile() {
  return (
    <div>
      <h3>Profile</h3>
      <p><b>Name:</b> Arun</p>
      <p><b>Department:</b> CSE</p>
    </div>
  );
}

function Dashboard() {
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path ? styles.activeLink : styles.link;

  return (
    <div style={styles.page}>
      <div style={styles.box}>

        {/* HEADER */}
        <h2 style={styles.heading}>🎓 Student Dashboard</h2>
        <p style={styles.subText}>Welcome back! Manage student data easily.</p>

        {/* INFO CARDS */}
        <div style={styles.cards}>
          <div style={styles.infoCard}>
            <h4>Students</h4>
            <p>3</p>
          </div>
          <div style={styles.infoCard}>
            <h4>Courses</h4>
            <p>3</p>
          </div>
        </div>

        {/* NAVIGATION */}
        <nav style={styles.nav}>
          <Link to="/" style={isActive("/")}>Students</Link>
          <Link to="/courses" style={isActive("/courses")}>Courses</Link>
          <Link to="/profile" style={isActive("/profile")}>Profile</Link>
        </nav>

        {/* ROUTES */}
        <div style={styles.content}>
          <Routes>
            <Route index element={<Students />} />
            <Route path="courses" element={<Courses />} />
            <Route path="profile" element={<Profile />} />
          </Routes>
        </div>

      </div>
    </div>
  );
}

/* ===== ENHANCED STYLES ===== */
const styles = {
  page: {
    width: "100vw",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #74ebd5, #acb6e5)",
    fontFamily: "Arial"
  },

  box: {
    width: "460px",
    background: "#ffffff",
    padding: "22px",
    borderRadius: "18px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.25)"
  },

  heading: {
    textAlign: "center",
    color: "#4b7bec",
    marginBottom: "4px"
  },

  subText: {
    textAlign: "center",
    fontSize: "13px",
    color: "#555",
    marginBottom: "14px"
  },

  cards: {
    display: "flex",
    justifyContent: "space-around",
    marginBottom: "15px"
  },

  infoCard: {
    width: "120px",
    background: "#f1f5ff",
    padding: "10px",
    borderRadius: "12px",
    textAlign: "center",
    boxShadow: "0 4px 10px rgba(0,0,0,0.15)"
  },

  nav: {
    display: "flex",
    justifyContent: "space-around",
    marginBottom: "12px"
  },

  link: {
    textDecoration: "none",
    fontWeight: "bold",
    color: "#555",
    padding: "6px 12px",
    borderRadius: "12px"
  },

  activeLink: {
    textDecoration: "none",
    fontWeight: "bold",
    color: "#ffffff",
    background: "#4b7bec",
    padding: "6px 12px",
    borderRadius: "12px"
  },

  content: {
    background: "#f9fbff",
    padding: "12px",
    borderRadius: "12px"
  }
};

export default Dashboard;

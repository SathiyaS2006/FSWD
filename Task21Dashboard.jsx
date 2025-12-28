import React, { useState } from "react";

function Dashboard() {
  const [page, setPage] = useState("students");

  const students = [
    { id: 1, name: "Arun", dept: "CSE" },
    { id: 2, name: "Priya", dept: "IT" },
    { id: 3, name: "Karthik", dept: "ECE" }
  ];

  const courses = [
    { id: 1, course: "React Basics" },
    { id: 2, course: "Data Analytics" },
    { id: 3, course: "UI/UX Design" }
  ];

  return (
    <div style={styles.page}>
      <div style={styles.dashboard}>

        {/* NAVIGATION */}
        <div style={styles.nav}>
          <button
            style={styles.navBtn}
            onClick={() => setPage("students")}
          >
            Students
          </button>
          <button
            style={styles.navBtn}
            onClick={() => setPage("courses")}
          >
            Courses
          </button>
        </div>

        {/* CONTENT */}
        <div style={styles.content}>
          <h2 style={styles.heading}>
            {page === "students" ? "Student List" : "Course List"}
          </h2>

          {page === "students" &&
            students.map((s) => (
              <div key={s.id} style={styles.card}>
                <p><b>Name:</b> {s.name}</p>
                <p><b>Department:</b> {s.dept}</p>
              </div>
            ))}

          {page === "courses" &&
            courses.map((c) => (
              <div key={c.id} style={styles.card}>
                <p><b>Course:</b> {c.course}</p>
              </div>
            ))}
        </div>

      </div>
    </div>
  );
}

/* ===== DASHBOARD STYLES ===== */
const styles = {
  page: {
    width: "100vw",
    minHeight: "100vh",
    background: "linear-gradient(135deg, #74ebd5, #acb6e5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Arial"
  },

  dashboard: {
    width: "90%",
    maxWidth: "700px",
    background: "#ffffff",
    borderRadius: "18px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
    overflow: "hidden"
  },

  nav: {
    display: "flex",
    justifyContent: "space-around",
    background: "#4b7bec",
    padding: "12px"
  },

  navBtn: {
    background: "#ffffff",
    border: "none",
    padding: "8px 18px",
    borderRadius: "20px",
    fontWeight: "bold",
    cursor: "pointer"
  },

  content: {
    padding: "20px"
  },

  heading: {
    textAlign: "center",
    color: "#4b7bec",
    marginBottom: "15px"
  },

  card: {
    background: "#f1f5ff",
    padding: "12px",
    borderRadius: "12px",
    marginBottom: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.15)"
  }
};

export default Dashboard;

import React, { useState } from "react";

export default function Attendance() {
  const [students, setStudents] = useState([
    { id: 1, name: "Sathiya", status: "Absent" },
    { id: 2, name: "Sathirisha", status: "Absent" },
    { id: 3, name: "Raji", status: "Absent" },
    { id: 4, name: "Divya", status: "Absent" },
  ]);

  const markStatus = (id, status) => {
    setStudents(
      students.map((s) =>
        s.id === id ? { ...s, status } : s
      )
    );
  };

  const presentCount = students.filter(s => s.status === "Present").length;
  const absentCount = students.length - presentCount;

  return (
    <div className="container">
      <style>{`
        body {
          background: linear-gradient(to right, #667eea, #764ba2);
          font-family: Arial;
        }
        .container {
          width: 420px;
          margin: 40px auto;
          background: white;
          padding: 20px;
          border-radius: 15px;
          box-shadow: 0 10px 20px rgba(0,0,0,0.25);
        }
        h2 {
          text-align: center;
          color: #f97316;
          margin-bottom: 20px;
        }
        .student {
          display: grid;
          grid-template-columns: 120px 90px 170px;
          align-items: center;
          padding: 10px;
          margin-bottom: 10px;
          border-radius: 10px;
          background: #f3f4f6;
        }
        .status-present {
          color: green;
          font-weight: bold;
        }
        .status-absent {
          color: red;
          font-weight: bold;
        }
        button {
          border: none;
          padding: 6px 10px;
          border-radius: 6px;
          cursor: pointer;
          color: white;
          font-size: 13px;
        }
        .present-btn {
          background: #22c55e;
        }
        .absent-btn {
          background: #ef4444;
          margin-left: 5px;
        }
        .count-box {
          margin-top: 15px;
          text-align: center;
          font-weight: bold;
          background: #eef2ff;
          padding: 10px;
          border-radius: 8px;
        }
      `}</style>

      <h2>📋 Attendance Tracker</h2>

      {students.map((s) => (
        <div key={s.id} className="student">
          <span>{s.name}</span>

          <span
            className={
              s.status === "Present"
                ? "status-present"
                : "status-absent"
            }
          >
            {s.status}
          </span>

          <div>
            <button
              className="present-btn"
              onClick={() => markStatus(s.id, "Present")}
            >
              Present
            </button>
            <button
              className="absent-btn"
              onClick={() => markStatus(s.id, "Absent")}
            >
              Absent
            </button>
          </div>
        </div>
      ))}

      <div className="count-box">
        Present: {presentCount} | Absent: {absentCount}
      </div>
    </div>
  );
}

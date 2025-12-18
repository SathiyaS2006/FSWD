import React, { useState } from "react";

export default function CourseEnroll() {
  const [studentName, setStudentName] = useState("");
  const [course, setCourse] = useState("");
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const handleEnroll = (e) => {
    e.preventDefault();

    if (studentName && course) {
      setEnrolledCourses([...enrolledCourses, { studentName, course }]);
      setStudentName("");
      setCourse("");
    }
  };

  return (
    <>
      {/* CSS inside component */}
      <style>{`
        body {
          margin: 0;
          font-family: Arial, sans-serif;
          background: linear-gradient(135deg, #43cea2, #185a9d);
        }

        .container {
          width: 420px;
          margin: 60px auto;
          background: white;
          padding: 25px;
          border-radius: 15px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.3);
        }

        h2 {
          text-align: center;
          color: #185a9d;
        }

        input, select {
          width: 100%;
          padding: 10px;
          margin: 10px 0;
          border-radius: 6px;
          border: 1px solid #ccc;
          font-size: 14px;
        }

        button {
          width: 100%;
          padding: 12px;
          background: #43cea2;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          cursor: pointer;
        }

        button:hover {
          background: #2fa37a;
        }

        .list {
          margin-top: 20px;
          background: #f2f2f2;
          padding: 15px;
          border-radius: 10px;
        }

        .list h3 {
          margin-top: 0;
          color: #333;
        }

        .list p {
          margin: 6px 0;
          font-weight: bold;
        }
      `}</style>

      <div className="container">
        <h2>📚 Course Enrollment Form</h2>

        <form onSubmit={handleEnroll}>
          <input
            type="text"
            placeholder="Student Name"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            required
          />

          <select
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            required
          >
            <option value="">Select Course</option>
            <option>Full Stack Development</option>
            <option>Data Science</option>
            <option>Artificial Intelligence</option>
            <option>IoT</option>
          </select>

          <button type="submit">Enroll</button>
        </form>

        {enrolledCourses.length > 0 && (
          <div className="list">
            <h3>✅ Enrolled Students</h3>
            {enrolledCourses.map((item, index) => (
              <p key={index}>
                {item.studentName} → {item.course}
              </p>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

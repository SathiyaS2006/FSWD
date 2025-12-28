import React, { useState } from "react";

function HotelReservation() {
  const [data, setData] = useState({
    name: "",
    days: "",
    room: "",
    services: []
  });

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    if (type === "checkbox") {
      setData({
        ...data,
        services: checked
          ? [...data.services, value]
          : data.services.filter(item => item !== value)
      });
    } else {
      setData({ ...data, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("🏨 Hotel Reserved Successfully!");
  };

  return (
    <div style={styles.page}>
      <form style={styles.form} onSubmit={handleSubmit}>

        <h2 style={styles.heading}>Hotel Reservation Form</h2>

        <label style={styles.label}>Guest Name</label>
        <input
          type="text"
          name="name"
          style={styles.input}
          placeholder="Enter your name"
          onChange={handleChange}
        />

        <label style={styles.label}>Number of Days</label>
        <input
          type="number"
          name="days"
          style={styles.input}
          placeholder="Enter days"
          onChange={handleChange}
        />

        <label style={styles.label}>Room Type</label>
        <select name="room" style={styles.input} onChange={handleChange}>
          <option value="">Select Room</option>
          <option>Standard</option>
          <option>Deluxe</option>
          <option>Suite</option>
        </select>

        <label style={styles.label}>Extra Services</label>
        <div style={styles.checkbox}>
          <label>
            <input type="checkbox" value="Breakfast" onChange={handleChange} /> Breakfast
          </label>
          <label>
            <input type="checkbox" value="Airport Pickup" onChange={handleChange} /> Airport Pickup
          </label>
          <label>
            <input type="checkbox" value="Laundry" onChange={handleChange} /> Laundry
          </label>
        </div>

        <button type="submit" style={styles.submitBtn}>
          Reserve Now
        </button>

      </form>
    </div>
  );
}

/* ===== SAME COLOR THEME & FORMAT ===== */
const styles = {
  page: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },

  form: {
    width: "360px",
    background: "rgba(255,255,255,0.86)",
    padding: "25px",
    borderRadius: "15px",
    boxShadow: "0 6px 18px rgba(0,0,0,0.2)",
    fontFamily: "Arial"
  },

  heading: {
    textAlign: "center",
    marginBottom: "12px",
    color: "#d63384",
    fontWeight: "700"
  },

  label: {
    fontWeight: "600",
    fontSize: "14px",
    marginTop: "8px"
  },

  input: {
    width: "100%",
    padding: "8px",
    border: "1px solid #bbb",
    borderRadius: "8px",
    margin: "5px 0"
  },

  checkbox: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    margin: "6px 0"
  },

  submitBtn: {
    width: "100%",
    padding: "10px",
    marginTop: "12px",
    background: "#ff8ac6",
    color: "#fff",
    fontWeight: "bold",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer"
  }
};

export default HotelReservation;

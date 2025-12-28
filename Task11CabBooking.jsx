import React from "react";

function CabBooking() {
  function bookCab() {
    let name = prompt("Enter Passenger Name:");
    if (!name) {
      alert("Name is required!");
      return;
    }

    let pickup = prompt("Enter Pickup Location:");
    if (!pickup) {
      alert("Pickup location is required!");
      return;
    }

    let drop = prompt("Enter Drop Location:");
    if (!drop) {
      alert("Drop location is required!");
      return;
    }

    let cabType = prompt(
      "Select Cab Type:\n1. Mini\n2. Sedan\n3. SUV"
    );

    let farePerKm = 0;
    let cabName = "";

    if (cabType === "1") {
      cabName = "Mini";
      farePerKm = 12;
    } else if (cabType === "2") {
      cabName = "Sedan";
      farePerKm = 18;
    } else if (cabType === "3") {
      cabName = "SUV";
      farePerKm = 25;
    } else {
      alert("Invalid cab type!");
      return;
    }

    let distance = prompt("Enter Distance (in KM):");
    if (distance <= 0 || isNaN(distance)) {
      alert("Enter valid distance!");
      return;
    }

    let totalFare = farePerKm * distance;

    let confirmBooking = confirm(
      "Confirm Cab Booking?\n\n" +
      "Name: " + name +
      "\nCab Type: " + cabName +
      "\nPickup: " + pickup +
      "\nDrop: " + drop +
      "\nDistance: " + distance + " km" +
      "\nTotal Fare: ₹" + totalFare
    );

    if (confirmBooking) {
      alert("🚕 Cab Booked Successfully!\nHave a safe journey 😊");
    } else {
      alert("❌ Cab Booking Cancelled");
    }
  }

  return (
    <div style={{ textAlign: "center", marginTop: "80px" }}>
      <h2>Online Cab Booking</h2>
      <button
        onClick={bookCab}
        style={{
          padding: "10px 20px",
          background: "#ff8ac6",
          border: "none",
          color: "white",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "16px"
        }}
      >
        Book Cab
      </button>
    </div>
  );
}

export default CabBooking;

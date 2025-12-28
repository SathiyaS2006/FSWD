import React from "react";

export default function FlightTicket() {
  const bookTicket = () => {
    // Prompt dialogs for user input
    const name = prompt("Enter Passenger Name:");
    if (!name) {
      alert("Booking cancelled! Name is required.");
      return;
    }

    const source = prompt("Enter Source City:");
    const destination = prompt("Enter Destination City:");

    if (!source || !destination) {
      alert("Booking cancelled! Travel details missing.");
      return;
    }

    // Confirmation dialog
    const confirmBooking = confirm(
      `Please confirm your booking:\n\nName: ${name}\nFrom: ${source}\nTo: ${destination}`
    );

    if (confirmBooking) {
      alert(
        `✅ Ticket Booked Successfully!\n\nPassenger: ${name}\nRoute: ${source} → ${destination}`
      );
    } else {
      alert("❌ Booking Cancelled by User.");
    }
  };

  return (
    <>
      {/* Internal CSS */}
      <style>{`
        .ticket-box {
          width: 350px;
          margin: 80px auto;
          padding: 25px;
          border-radius: 12px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.3);
          text-align: center;
          font-family: Arial;
          background: #f9f9ff;
        }

        .ticket-box h2 {
          color: #3f37c9;
          margin-bottom: 15px;
        }

        .ticket-box p {
          font-size: 14px;
          color: #444;
          margin-bottom: 20px;
        }

        .book-btn {
          padding: 12px 20px;
          font-size: 16px;
          border: none;
          border-radius: 8px;
          background: #4361ee;
          color: white;
          cursor: pointer;
        }

        .book-btn:hover {
          background: #3a0ca3;
        }
      `}</style>

      <div className="ticket-box">
        <h2>✈ Flight Ticket Booking</h2>
        <p>Book your flight using dialog boxes</p>
        <button className="book-btn" onClick={bookTicket}>
          Book Ticket
        </button>
      </div>
    </>
  );

}

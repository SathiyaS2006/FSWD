import React, { useState } from "react";

function Products() {
  const [category, setCategory] = useState("Electronics");

  const productData = {
    Electronics: [
      { id: 1, name: "Laptop" },
      { id: 2, name: "Mobile Phone" }
    ],
    Clothing: [
      { id: 3, name: "T-Shirt" },
      { id: 4, name: "Jeans" }
    ],
    Books: [
      { id: 5, name: "React Guide" },
      { id: 6, name: "JavaScript Basics" }
    ]
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>

        <h2 style={styles.heading}>🛒 Product Browser</h2>

        {/* CATEGORY NAVIGATION */}
        <div style={styles.nav}>
          <button onClick={() => setCategory("Electronics")} style={styles.navBtn}>
            Electronics
          </button>
          <button onClick={() => setCategory("Clothing")} style={styles.navBtn}>
            Clothing
          </button>
          <button onClick={() => setCategory("Books")} style={styles.navBtn}>
            Books
          </button>
        </div>

        {/* PRODUCT LIST */}
        <div style={styles.list}>
          <h3 style={styles.subHeading}>{category}</h3>

          {productData[category].map((item) => (
            <div key={item.id} style={styles.card}>
              {item.name}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

/* ===== STYLES ===== */
const styles = {
  page: {
    width: "100vw",
    minHeight: "100vh",
    background: "linear-gradient(135deg, #fbc2eb, #a6c1ee)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Arial"
  },

  container: {
    width: "90%",
    maxWidth: "600px",
    background: "#fff",
    padding: "25px",
    borderRadius: "18px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.25)"
  },

  heading: {
    textAlign: "center",
    color: "#6a0572",
    marginBottom: "15px"
  },

  nav: {
    display: "flex",
    justifyContent: "space-around",
    marginBottom: "20px"
  },

  navBtn: {
    padding: "8px 14px",
    border: "none",
    borderRadius: "20px",
    background: "#845ec2",
    color: "#fff",
    cursor: "pointer",
    fontWeight: "bold"
  },

  list: {
    textAlign: "center"
  },

  subHeading: {
    color: "#ff6f91",
    marginBottom: "10px"
  },

  card: {
    background: "#f3f0ff",
    padding: "10px",
    borderRadius: "12px",
    marginBottom: "8px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.15)"
  }
};

export default Products;

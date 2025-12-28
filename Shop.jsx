import React, { useState } from "react";

function Shop() {
  const products = [
    { id: 1, name: "Wireless Mouse", price: 599 },
    { id: 2, name: "Keyboard", price: 999 },
    { id: 3, name: "Headphones", price: 1499 }
  ];

  const [cartCount, setCartCount] = useState(0);

  const addToCart = (product) => {
    setCartCount(cartCount + 1);
    alert("🛒 Added to Cart:\n" + product.name + " - ₹" + product.price);
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>

        <h2 style={styles.heading}>🛍️ Simple E-Commerce Store</h2>
        <p style={styles.cart}>Cart Items: {cartCount}</p>

        <div style={styles.productList}>
          {products.map((p) => (
            <div key={p.id} style={styles.card}>
              <h3 style={styles.productName}>{p.name}</h3>
              <p style={styles.price}>₹ {p.price}</p>
              <button
                style={styles.button}
                onClick={() => addToCart(p)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

/* ===== COLORFUL STYLES ===== */
const styles = {
  page: {
    width: "100vw",
    minHeight: "100vh",
    background: "linear-gradient(135deg, #f6d365, #fda085)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Arial"
  },

  container: {
    width: "90%",
    maxWidth: "700px",
    background: "#fff",
    padding: "25px",
    borderRadius: "16px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.25)"
  },

  heading: {
    textAlign: "center",
    color: "#ff6f00",
    marginBottom: "10px"
  },

  cart: {
    textAlign: "center",
    fontWeight: "bold",
    color: "#6a0572",
    marginBottom: "20px"
  },

  productList: {
    display: "flex",
    gap: "15px",
    flexWrap: "wrap",
    justifyContent: "center"
  },

  card: {
    width: "200px",
    background: "#fff7f0",
    padding: "15px",
    borderRadius: "14px",
    boxShadow: "0 6px 15px rgba(0,0,0,0.2)",
    textAlign: "center"
  },

  productName: {
    color: "#333",
    marginBottom: "6px"
  },

  price: {
    color: "#009688",
    fontWeight: "bold",
    marginBottom: "10px"
  },

  button: {
    width: "100%",
    padding: "8px",
    background: "linear-gradient(45deg, #ff6f00, #ff9f43)",
    color: "white",
    border: "none",
    borderRadius: "18px",
    fontWeight: "bold",
    cursor: "pointer"
  }
};

export default Shop;

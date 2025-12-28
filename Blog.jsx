import React, { useState } from "react";

function Blog() {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const addComment = (e) => {
    e.preventDefault();

    if (!comment) {
      alert("Please enter a comment!");
      return;
    }

    setComments([...comments, comment]);
    setComment("");
  };

  return (
    <div style={styles.page}>
      <div style={styles.blogContainer}>

        {/* BLOG POST */}
        <div style={styles.post}>
          <h2 style={styles.title}>🌐 My Tech Blog</h2>
          <p style={styles.content}>
            React helps in building fast and interactive user interfaces.
            This blog demonstrates a responsive layout with real-time
            comment updates using React state.
          </p>
        </div>

        {/* COMMENTS SECTION */}
        <div style={styles.commentsBox}>
          <h3 style={styles.commentTitle}>Comments</h3>

          <form onSubmit={addComment}>
            <input
              type="text"
              placeholder="Write a comment..."
              style={styles.input}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <button type="submit" style={styles.button}>
              Add
            </button>
          </form>

          <div style={styles.commentList}>
            {comments.map((c, index) => (
              <p key={index} style={styles.commentItem}>
                💬 {c}
              </p>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

/* ===== RESPONSIVE & COLORFUL STYLES ===== */
const styles = {
  page: {
    width: "100vw",
    minHeight: "100vh",
    background: "linear-gradient(135deg, #ffecd2, #fcb69f)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Arial",
    padding: "20px"
  },

  blogContainer: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
    maxWidth: "800px"
  },

  post: {
    flex: "1 1 300px",
    background: "#fff",
    padding: "20px",
    borderRadius: "15px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.2)"
  },

  title: {
    color: "#ff6f00",
    marginBottom: "10px"
  },

  content: {
    fontSize: "15px",
    lineHeight: "1.5"
  },

  commentsBox: {
    flex: "1 1 280px",
    background: "#fff",
    padding: "20px",
    borderRadius: "15px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.2)"
  },

  commentTitle: {
    color: "#6a0572",
    marginBottom: "10px"
  },

  input: {
    width: "100%",
    padding: "8px",
    borderRadius: "8px",
    border: "1px solid #bbb",
    marginBottom: "8px"
  },

  button: {
    width: "100%",
    padding: "8px",
    background: "linear-gradient(45deg, #ff6f00, #ff9f43)",
    color: "#fff",
    border: "none",
    borderRadius: "18px",
    fontWeight: "bold",
    cursor: "pointer"
  },

  commentList: {
    marginTop: "12px"
  },

  commentItem: {
    background: "#fff3e0",
    padding: "6px 10px",
    borderRadius: "10px",
    marginBottom: "6px"
  }
};

export default Blog;

import React, { useState } from "react";

export default function Quiz() {
  const questions = [
    {
      question: "1. Which language is used for web apps?",
      options: ["Python", "Java", "JavaScript", "C++"],
      answer: "JavaScript",
    },
    {
      question: "2. What does CSS stand for?",
      options: [
        "Computer Style Sheets",
        "Cascading Style Sheets",
        "Creative Style System",
        "Colorful Style Sheets",
      ],
      answer: "Cascading Style Sheets",
    },
    {
      question: "3. Which tag is commonly used in React?",
      options: ["<component>", "<div>", "<react>", "<script>"],
      answer: "<div>",
    },
    {
      question: "4. Which hook is used to manage state?",
      options: ["useFetch", "useEffect", "useState", "useRef"],
      answer: "useState",
    },
    {
      question: "5. React is a _____?",
      options: ["Framework", "Library", "Language", "Database"],
      answer: "Library",
    },
  ];

  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState("");
  const [showResult, setShowResult] = useState(false);

  const nextQuestion = () => {
    if (selected === questions[currentQ].answer) {
      setScore(score + 1);
    }

    setSelected("");

    if (currentQ + 1 < questions.length) {
      setCurrentQ(currentQ + 1);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.quizBox}>
        <h2 style={styles.title}>📝 Mini Online Quiz</h2>

        {!showResult ? (
          <>
            <h3 style={styles.question}>
              {questions[currentQ].question}
            </h3>

            {questions[currentQ].options.map((option, index) => (
              <button
                key={index}
                onClick={() => setSelected(option)}
                style={{
                  ...styles.option,
                  background:
                    selected === option ? "#ffd166" : "#f1f1f1",
                }}
              >
                {option}
              </button>
            ))}

            <button
              style={styles.nextBtn}
              onClick={nextQuestion}
              disabled={!selected}
            >
              Next
            </button>

            <p style={styles.score}>
              Score: {score} / {questions.length}
            </p>
          </>
        ) : (
          <div style={styles.result}>
            <h2>🎉 Quiz Completed</h2>
            <h3>Your Score: {score} / {questions.length}</h3>
          </div>
        )}
      </div>
    </div>
  );
}

/* ========= STYLES ========= */
const styles = {
  page: {
    width: "100vw",
    height: "100vh",
    background: "linear-gradient(135deg, #667eea, #db5abbff)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Arial",
  },

  quizBox: {
    width: "380px",
    background: "#fff",
    padding: "25px",
    borderRadius: "15px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
    textAlign: "center",
  },

  title: {
    color: "#cc3bc0ff",
    marginBottom: "15px",
  },

  question: {
    marginBottom: "15px",
    color: "#333",
  },

  option: {
    width: "100%",
    padding: "10px",
    margin: "6px 0",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    fontWeight: "600",
  },

  nextBtn: {
    marginTop: "12px",
    width: "100%",
    padding: "10px",
    background: "#554ebbff",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontWeight: "bold",
    cursor: "pointer",
  },

  score: {
    marginTop: "10px",
    fontWeight: "600",
  },

  result: {
    color: "#5a189a",
  },
};

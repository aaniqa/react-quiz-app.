import { useState } from "react";

const questions = [
  {
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Madrid"],
    answer: "Paris",
  },
  {
    question: "Who developed React?",
    options: ["Google", "Facebook", "Microsoft", "Amazon"],
    answer: "Facebook",
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Creative Style Sheets",
      "Cascading Style Sheets",
      "Computer Style System",
      "Control Style Syntax",
    ],
    answer: "Cascading Style Sheets",
  },
];

export default function App() {
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  function handleAnswer(option) {
    if (option === questions[currentQ].answer) {
      setScore(score + 1);
    }

    const nextQ = currentQ + 1;
    if (nextQ < questions.length) {
      setCurrentQ(nextQ);
    } else {
      setShowResults(true);
    }
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px", fontFamily: "Arial" }}>
      <h1>Quiz App</h1>
      {!showResults ? (
        <div>
          <h2>
            Question {currentQ + 1}/{questions.length}
          </h2>
          <p>{questions[currentQ].question}</p>
          {questions[currentQ].options.map((opt) => (
            <button
              key={opt}
              onClick={() => handleAnswer(opt)}
              style={{
                display: "block",
                margin: "10px auto",
                padding: "10px 20px",
                cursor: "pointer",
              }}
            >
              {opt}
            </button>
          ))}
        </div>
      ) : (
        <div>
          <h2>
            You scored {score} out of {questions.length}
          </h2>
          <button
            onClick={() => {
              setCurrentQ(0);
              setScore(0);
              setShowResults(false);
            }}
            style={{ padding: "10px 20px", cursor: "pointer" }}
          >
            Restart Quiz
          </button>
        </div>
      )}
    </div>
  );
}

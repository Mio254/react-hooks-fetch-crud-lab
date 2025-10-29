import React, { useState } from "react";

function QuestionForm({ onAddItem }) {
  const [prompt, setPrompt] = useState("");
  const [answers, setAnswers] = useState(["", "", ""]);
  const [correctIndex, setCorrectIndex] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();

    const newQuestion = {
      id: Date.now(), // simple unique ID
      prompt,
      answers,
      correctIndex,
    };

    onAddItem(newQuestion);

    // reset form
    setPrompt("");
    setAnswers(["", "", ""]);
    setCorrectIndex(0);
  }

  function handleAnswerChange(index, value) {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = value;
    setAnswers(updatedAnswers);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Prompt:
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
      </label>
      {answers.map((ans, index) => (
        <label key={index}>
          Answer {index + 1}:
          <input
            type="text"
            value={ans}
            onChange={(e) => handleAnswerChange(index, e.target.value)}
          />
        </label>
      ))}
      <label>
        Correct Answer:
        <select
          value={correctIndex}
          onChange={(e) => setCorrectIndex(parseInt(e.target.value, 10))}
        >
          {answers.map((_, index) => (
            <option key={index} value={index}>
              {index + 1}
            </option>
          ))}
        </select>
      </label>
      <button type="submit">Add Question</button>
    </form>
  );
}

export default QuestionForm;

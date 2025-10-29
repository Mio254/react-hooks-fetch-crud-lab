import React from "react";

function QuestionItem({ item, onUpdateItem, onDeleteItem }) {
  function handleAnswerChange(e) {
    const updatedQuestion = { ...item, correctIndex: parseInt(e.target.value) };

    fetch(`http://localhost:4000/questions/${item.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedQuestion),
    })
      .then((r) => r.json())
      .then((data) => onUpdateItem(data));
  }

  function handleDeleteClick() {
    fetch(`http://localhost:4000/questions/${item.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => onDeleteItem(item));
  }

  const answerOptions = item.answers.map((a, index) => (
    <option key={index} value={index}>
      {a}
    </option>
  ));

  return (
    <li>
      <h4>{item.prompt}</h4>
      <label>
        Correct Answer:
        <select value={item.correctIndex} onChange={handleAnswerChange}>
          {answerOptions}
        </select>
      </label>
      <button onClick={handleDeleteClick}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;

import React from "react";

function QuestionItem({ item, onDeleteItem, onUpdateItem }) {
  if (!item) return null;

  function handleChange(e) {
    const updatedIndex = parseInt(e.target.value, 10);

    fetch(`http://localhost:4000/questions/${item.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ correctIndex: updatedIndex }),
    })
      .then((r) => r.json())
      .then((updatedItem) => onUpdateItem(updatedItem))
      .catch((err) => console.error("Update failed:", err));
  }

  function handleDeleteClick() {
    fetch(`http://localhost:4000/questions/${item.id}`, {
      method: "DELETE",
    })
      .then(() => onDeleteItem(item))
      .catch((err) => console.error("Delete failed:", err));
  }

  return (
    <li>
      <h3>{item.prompt}</h3>
      <label>
        Correct Answer:
        <select
          aria-label="Correct Answer"
          value={item.correctIndex}
          onChange={handleChange}
        >
          {item.answers?.map((ans, index) => (
            <option key={index} value={index}>
              {ans}
            </option>
          ))}
        </select>
      </label>
      <button onClick={handleDeleteClick}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;

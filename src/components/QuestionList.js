import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, onDeleteItem, onUpdateItem }) {
  return (
    <section>
      <h2>Question List</h2>
      <ul>
        {questions.map((q) => (
          <QuestionItem
            key={q.id} // ensures each child has a unique key
            item={q}
            onDeleteItem={onDeleteItem}
            onUpdateItem={onUpdateItem}
          />
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;

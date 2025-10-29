import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, onDeleteItem, onUpdateItem }) {
  const questionItems = questions.map((q) => (
    <QuestionItem
      key={q.id}
      item={q}
      onDeleteItem={onDeleteItem}
      onUpdateItem={onUpdateItem}
    />
  ));

  return (
    <section>
      <h2>Question List</h2>
      <ul>{questionItems}</ul>
    </section>
  );
}

export default QuestionList;

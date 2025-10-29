import React, { useEffect, useState } from "react";
import QuestionList from "./QuestionList";
import QuestionForm from "./QuestionForm";

function App() {
  const [questions, setQuestions] = useState([]);
  const [page, setPage] = useState("List"); // "List" or "Form"

  // Fetch questions when the component mounts
  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((r) => r.json())
      .then((data) => setQuestions(data))
      .catch((error) => console.error("Fetch error:", error));
  }, []);

  // Handle adding a new question
  function handleAddQuestion(newQuestion) {
    setQuestions([...questions, newQuestion]);
    setPage("List");
  }

  // Handle deleting a question
  function handleDeleteQuestion(deletedQuestion) {
    const updatedQuestions = questions.filter(
      (q) => q.id !== deletedQuestion.id
    );
    setQuestions(updatedQuestions);
  }

  // Handle updating a question’s correct answer
  function handleUpdateQuestion(updatedQuestion) {
    const updatedQuestions = questions.map((q) =>
      q.id === updatedQuestion.id ? updatedQuestion : q
    );
    setQuestions(updatedQuestions);
  }

  return (
    <main className="App">
      <h1>Quiz Manager</h1>

      <nav>
        <button onClick={() => setPage("List")}>View Questions</button>
        <button onClick={() => setPage("Form")}>New Question</button>
      </nav>

      {page === "List" ? (
        <QuestionList
          questions={questions}
          onDeleteItem={handleDeleteQuestion}
          onUpdateItem={handleUpdateQuestion}
        />
      ) : (
        <QuestionForm onAddItem={handleAddQuestion} />
      )}
    </main>
  );
}

export default App;

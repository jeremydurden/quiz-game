import { useState, useEffect } from "react";
import Question from "./Question";
import { nanoid } from "nanoid";

function Main() {
  const [questions, setQuestions] = useState([]);

  function getNewQuestions(data) {
    const newQuestions = data.map((question) => {
      return {
        id: nanoid(),
        question: question.question,
        correctAnswer: question.correct_answer,
        answers: question.incorrect_answers,
      };
    });
    return newQuestions;
  }

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&type=multiple")
      .then((res) => res.json())
      .then((data) => setQuestions(getNewQuestions(data.results)))
      .catch((error) => console.log(error));
  }, []);
  console.log(questions, "questions");
  const questionArray = questions.map((question) => {
    return <Question key={question.id} question={question} />;
  });
  console.log(questionArray, "Question Array");
  return (
    <main className="main--container">
      {questionArray}
      <button className="main--button">Check Answers</button>
    </main>
  );
}

export default Main;

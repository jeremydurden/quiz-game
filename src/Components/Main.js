import { useState, useEffect } from "react";
import Question from "./Question";
import { nanoid } from "nanoid";

function Main() {
  const [questions, setQuestions] = useState([]);

  function mixAnswers(questionList) {
    for (let i = questionList.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [questionList[i], questionList[j]] = [questionList[j], questionList[i]];
    }
    return questionList;
  }

  function collectAnswers(answersArray, correctAnswer) {
    return answersArray.map((answer) => {
      return {
        isHeld: false,
        isCorrect: answer === correctAnswer ? true : false,
        answer: answer,
        id: nanoid(),
      };
    });
  }

  function getNewQuestions(data) {
    const newQuestions = data.map((question) => {
      return {
        id: nanoid(),
        question: question.question,
        correctAnswer: question.correct_answer,
        answers: collectAnswers(
          mixAnswers([...question.incorrect_answers, question.correct_answer]),
          question.correct_answer
        ),
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

  const questionArray = questions.map((question) => {
    return <Question key={question.id} question={question.question} />;
  });

  return (
    <main className="main--container">
      {questionArray}
      <button className="main--button">Check Answers</button>
    </main>
  );
}

export default Main;

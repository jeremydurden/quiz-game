import { useState, useEffect } from "react";
import Question from "./Question";
import { nanoid } from "nanoid";

function Main() {
  const [questions, setQuestions] = useState([]);

  // Uses the Durstenfeld Shuffle algorithm to mix the answers array
  function mixAnswers(questionList) {
    for (let i = questionList.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [questionList[i], questionList[j]] = [questionList[j], questionList[i]];
    }
    return questionList;
  }

  //creates an array of objects for each possible answer — passes in the correct answer as a secondary argument
  //to check against the mixed array and assign that object w/ a true value in 'inCorrect'
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

  //gets called during the fetch command when setting the 'questions' state
  //maps over the data and changes each question to an object
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

  //fetches data from the API
  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&type=multiple")
      .then((res) => res.json())
      .then((data) => setQuestions(getNewQuestions(data.results)))
      .catch((error) => console.log(error));
  }, []);

  //creates an array of Question components
  const questionArray = questions.map((question) => {
    return (
      <Question
        key={question.id}
        question={question.question}
        correctAnswer={question.correctAnswer}
        answers={question.answers}
      />
    );
  });

  return (
    <main className="main--container">
      {questionArray}
      <button className="main--button">Check Answers</button>
    </main>
  );
}

export default Main;

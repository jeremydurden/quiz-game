import { useState, useEffect } from "react";
import Question from "./Question";

function Main() {
  const [data, setData] = useState([]);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&type=multiple")
      .then((res) => res.json())
      .then((data) => setData(data.results));
  }, []);

  const answersArray = [];

  data.forEach((result) => {
    answersArray.push(result.correct_answer, result.incorrect_answers);
  });

  const flatAnswersArray = answersArray.flat();

  function arraySplit(flatAnswersArray) {
    let array = [];
    array.push(flatAnswersArray.slice(0, 4));
    array.push(flatAnswersArray.slice(4, 8));
    array.push(flatAnswersArray.slice(8, 12));
    array.push(flatAnswersArray.slice(12, 16));
    array.push(flatAnswersArray.slice(16, 20));
    return array;
  }

  const finalAnswers = arraySplit(flatAnswersArray);

  const finalAnswersObjects = finalAnswers.map((group) => {
    return group.map((answer, index) => {
      if (index === 0) {
        return {
          answer: answer,
          correct: true,
        };
      } else {
        return {
          answer: answer,
          correct: false,
        };
      }
    });
  });

  useEffect(() => {
    setAnswers(finalAnswersObjects);
  }, [data]);

  const questionArray = data.map((result, index) => {
    return (
      <Question
        key={index}
        question={result.question}
        answers={answers[index]}
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

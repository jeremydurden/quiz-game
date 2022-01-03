import { useState, useEffect } from "react";
import Question from "./Question";

function Main() {
  const [data, setData] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [run, setRun] = useState(false);

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&type=multiple")
      .then((res) => res.json())
      .then((data) => setData(data.results));
  }, [run]);

  const questionArray = data.map((result, index) => {
    return (
      <Question key={index} question={result.question} answers={answers} />
    );
  });

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

  console.log(finalAnswers);

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
  }, []);

  return (
    <main className="main--container">
      {questionArray ? questionArray : "loading"}
      <button className="main--button">Check Answers</button>
    </main>
  );
}

export default Main;

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

  //the answers that come back from the data are split up so you get 1 correct answer seperately from 3 incorrect answers
  //this loops over the data and puts all of the answers into one array w/ the correct answer followed by an array of 3 incorrect answers
  data.forEach((result) => {
    answersArray.push(result.correct_answer, result.incorrect_answers);
  });

  //This flattens the array so that the incorrect answers are no longer nested
  const flatAnswersArray = answersArray.flat();

  //this function splits the flattened array so that the correct answer is put into a nested array w/ its matching incorrect answers
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

  //This nests over each array and changes the items in the array to objects—the zero index is always the correct answer
  const finalAnswersObjects = finalAnswers.map((group) => {
    return group.map((answer, index) => {
      if (index === 0) {
        return {
          answer: answer,
          selected: true,
          correct: true,
          id: index.toString(),
        };
      } else {
        return {
          answer: answer,
          selected: false,
          correct: false,
          id: index.toString(),
        };
      }
    });
  });

  useEffect(() => {
    setAnswers(finalAnswersObjects);
  }, [data]);

  function selectAnswer(event, id) {
    setAnswers((prevAnswers) => {
      console.log(prevAnswers.length, "pa");
      return prevAnswers.map((answer, index) => {
        console.log(answer, "answer");
        console.log(answer.id, "answer.id");
        console.log(answer.length, "answer.length");
        return answer.id === id
          ? { ...answer, selected: !answer.selected }
          : answer;
      });
    });
  }

  const questionArray = data.map((result, index) => {
    return (
      <Question
        key={index}
        question={result.question}
        answers={answers[index]}
        selectAnswer={selectAnswer}
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

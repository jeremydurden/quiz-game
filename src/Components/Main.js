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
        isSelected: false,
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
  const questionArray = questions.map((question, index) => {
    return (
      <Question
        key={question.id}
        id={question.id}
        question={question.question}
        correctAnswer={question.correctAnswer}
        answers={question.answers}
        selectAnswer={selectAnswer}
      />
    );
  });

  // first checks that the id property on the question and the id on the question element match
  //if they don't match it just returns the whole question
  //if they do match:
  //it creates an empty array and then checks the id property of the answer vs the id on the answer element
  //if the answer id's don't match it just returns the whole answer back to the empty array
  //otherwise, it creates a new object, uses the spread operator to spread in the old answer and updates the state of isSelected to replace the old
  //property -- refactored to first mark all isSelected properties to false -- this prevents user from selecting more than one answer per question
  //everything is returned as a new object w/ the questions spread in and the answer property replaced by the new answer array

  //this needs to be refactored to "unselect" a previously selected answer when trying to make a decision so that the user can
  //only select 1 answer for each question.

  function selectAnswer(questionId, answerId) {
    setQuestions((prevQuestions) =>
      prevQuestions.map((question) => {
        if (question.id === questionId) {
          let answersArray = question.answers.map((answer) => {
            answer.isSelected = false;
            return answer.id === answerId
              ? { ...answer, isSelected: !answer.isSelected }
              : answer;
          });
          return { ...question, answers: answersArray };
        } else {
          return question;
        }
      })
    );
  }

  return (
    <main className="main--container">
      {questionArray}
      <button className="main--button">Check Answers</button>
    </main>
  );
}

export default Main;

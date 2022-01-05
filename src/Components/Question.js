import { useEffect } from "react";

function Question({ question, answers, selectAnswer }) {
  const styles = {
    selected: {
      background: "rgba(214, 219, 245, 1)",
    },
    notSelected: {
      background: "white",
    },
  };

  const answersArray = answers.map((answer, index) => {
    return (
      <p
        key={index}
        style={answer.selected ? styles.selected : styles.notSelected}
        correct={answer.correct}
        className="question--answer"
        onClick={(event) => selectAnswer(event, answer.id)}
        id={index}
        selected={answer.selected}
      >
        {answer.answer}
      </p>
    );
  });

  let shuffledArray = answersArray
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  console.log(shuffledArray);
  return (
    <div className="question--container">
      <h2 className="question--h2">{question}</h2>
      <div className="question--answer-container">{shuffledArray}</div>
    </div>
  );
}

export default Question;

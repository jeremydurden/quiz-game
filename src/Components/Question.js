import Answer from "./Answer";

function Question(props) {
  const questions = props.question
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&amp;/g, "&");

  const styles = {
    selected: {
      background: "rgba(214, 219, 245, 1)",
    },
    notSelected: {
      background: "white",
    },
  };

  const answers = props.answers.map((answer) => {
    return (
      <Answer
        answer={answer}
        isCorrect={answer.isCorrect}
        id={answer.id}
        key={answer.id}
      />
    );
  });

  return (
    <div className="question--container">
      <h2 className="question--h2">{questions}</h2>
      <div className="question--answer-container">{answers}</div>
    </div>
  );
}

export default Question;

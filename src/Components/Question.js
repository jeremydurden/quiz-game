import Answer from "./Answer";

function Question(props) {
  const questions = props.question
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/&iacute;/g, "í")
    .replace(/&aacute;/g, "á")
    .replace(/&eacute;/g, "é")
    .replace(/&atilde;/g, "ã")
    .replace(/&ndash;/g, "-");

  const answers = props.answers.map((answer) => {
    return (
      <Answer
        answer={answer}
        isCorrect={answer.isCorrect}
        isSelected={answer.isSelected}
        id={answer.id}
        key={answer.id}
        questionId={props.id}
        selectAnswer={props.selectAnswer}
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

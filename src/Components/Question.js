function Question({ question, answers }) {
  const answersArray = answers.map((answer, index) => {
    return (
      <p key={index} correct={answer.correct} className="question--answer">
        {answer.answer}
      </p>
    );
  });

  let shuffledArray = answersArray
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  return (
    <div className="question--container">
      <h2 className="question--h2">{question}</h2>
      <div className="question--answer-container">{shuffledArray}</div>
    </div>
  );
}

export default Question;

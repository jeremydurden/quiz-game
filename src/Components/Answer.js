function Answer(props) {
  const answers = props.answer.answer
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&amp;/g, "&");

  console.log(props.isCorrect);

  return <p className="answer--answer">{answers}</p>;
}

export default Answer;

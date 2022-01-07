function Answer(props) {
  const answers = props.answer.answer
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/&iacute;/g, "í")
    .replace(/&aacute;/g, "á")
    .replace(/&eacute;/g, "é")
    .replace(/&atilde;/g, "ã")
    .replace(/&ndash;/g, "-");

  const styles = {
    selected: {
      background: "rgba(214, 219, 245, 1)",
    },
    notSelected: {
      background: "white",
    },
  };

  return (
    <p
      style={props.isSelected ? styles.selected : styles.notSelected}
      onClick={() => props.selectAnswer(props.questionId, props.id)}
      className="answer--answer"
    >
      {answers}
    </p>
  );
}

export default Answer;

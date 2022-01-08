function Answer(props) {
  const answers = props.answer
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/&iacute;/g, "í")
    .replace(/&aacute;/g, "á")
    .replace(/&eacute;/g, "é")
    .replace(/&atilde;/g, "ã")
    .replace(/&ndash;/g, "-")
    .replace(/&ntilde;/g, "ñ")
    .replace(/&ocirc;/g, "ô")
    .replace(/&rsquo;/g, "'")
    .replace(/&uuml;/g, "ü")
    .replace(/&uacute;/g, "ú")
    .replace(/&pi;/g, "π")
    .replace(/&aring;/g, "å");

  const styles = {
    selected: {
      background: "rgba(214, 219, 245, 1)",
      borderColor: "rgba(214, 219, 245, 1)",
    },
    notSelected: {
      background: "white",
    },
    selectedWrongAnswer: props.isSelected
      ? {
          background: "rgba(248, 188, 188, 1)",
          borderColor: "rgba(248, 188, 188, 1)",
        }
      : props.isCorrect
      ? {
          background: "rgba(148, 215, 162, 1.1)",
          borderColor: "rgba(148, 215, 162, 1.1)",
          opacity: ".5",
        }
      : { background: "white", opacity: ".5" },
    selectedCorrectAnswer: props.isSelected
      ? {
          background: "rgba(148, 215, 162, 1)",
          borderColor: "rgba(148, 215, 162, 1)",
        }
      : {},
  };

  console.log(props.answer, props.isCorrect);

  return (
    <p
      style={
        props.finalScoreCheck
          ? props.isSelected && props.isCorrect
            ? styles.selectedCorrectAnswer
            : styles.selectedWrongAnswer
          : props.isSelected
          ? styles.selected
          : styles.notSelected
      }
      onClick={() => props.selectAnswer(props.questionId, props.id)}
      className="answer--answer"
    >
      {answers}
    </p>
  );
}

export default Answer;

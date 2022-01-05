import { useEffect } from "react";

function Question({ question }) {
  const questions = question.question
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'");

  const styles = {
    selected: {
      background: "rgba(214, 219, 245, 1)",
    },
    notSelected: {
      background: "white",
    },
  };

  return (
    <div className="question--container">
      <h2 className="question--h2">{questions}</h2>
    </div>
  );
}

export default Question;

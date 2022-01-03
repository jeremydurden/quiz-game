function Question({ question }) {
  return (
    <div className="question--container">
      <h2 className="question--h2">{question}</h2>
      <div className="question--answer-container">
        <p className="question--answer">Cabbage Patch Kids</p>
        <p className="question--answer">Transformers</p>
        <p className="question--answer">Care Bears</p>
        <p className="question--answer">Rubik's Cube</p>
      </div>
    </div>
  );
}

export default Question;

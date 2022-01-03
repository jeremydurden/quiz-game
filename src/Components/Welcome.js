function Welcome({ quizButton }) {
  return (
    <div className="welcome--container">
      <h1 className="welcome--title">Quizzical</h1>
      <h3 className="welcome--sub-title">
        How many questions can you get right?
      </h3>
      <button onClick={quizButton} className="welcome--button">
        Start Quiz
      </button>
    </div>
  );
}

export default Welcome;

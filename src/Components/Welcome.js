function Welcome({ quizButton }) {
  return (
    <div className="welcome--container">
      <h1 className="welcome--title">Quizzical</h1>
      <h3 className="welcome--sub-title">
        Welcome! What sort of quiz would you like to take?
      </h3>
      <button onClick={quizButton} className="welcome--button">
        Start Quiz
      </button>
      <form className="welcome--formContainer" action=""></form>
    </div>
  );
}

export default Welcome;

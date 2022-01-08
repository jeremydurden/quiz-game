function Welcome({ quizButton }) {
  return (
    <div className="welcome--container">
      <h1 className="welcome--title">Quizzical</h1>
      <h3 className="welcome--sub-title">
        Welcome! What sort of quiz would you like to take?
      </h3>
      <form className="welcome--formContainer" action="">
        <label htmlFor="genre">Genre</label>
        <select name="genre" id="genre">
          <option value="9">General Knowledge</option>
          <option value="10">Books</option>
          <option value="11">Film</option>
          <option value="12">Music</option>
          <option value="13">Musicals & Theater</option>
          <option value="14">Television</option>
          <option value="15">Video Games</option>
          <option value="16">Board Games</option>
          <option value="17">Science & Nature</option>
          <option value="18">Computers</option>
          <option value="19">Mathematics</option>
          <option value="20">Mythology</option>
          <option value="21">Sports</option>
          <option value="22">Geography</option>
          <option value="23">History</option>
          <option value="24">Politics</option>
          <option value="25">Art</option>
          <option value="26">Celebrities</option>
          <option value="27">Animals</option>
          <option value="28">Vehicles</option>
          <option value="29">Comic Books</option>
          <option value="30">Gadgets</option>
          <option value="31">Anime & Manga</option>
          <option value="32">Cartoons</option>
          <option value="">Mixed Genres</option>
        </select>
        <label htmlFor="numberOfQuestions">Number of Questions</label>
        <select name="numberOfQuestions" id="number">
          <option value="9">5</option>
          <option value="9">10</option>
          <option value="9">20</option>
        </select>
        <label htmlFor="difficulty">Difficulty</label>
        <select name="difficulty" id="difficulty">
          <option value="9">Easy</option>
          <option value="9">Medium</option>
          <option value="9">Difficult</option>
          <option value="9">Mixed Difficulty</option>
        </select>
      </form>
      <button onClick={quizButton} className="welcome--button">
        Start Quiz
      </button>
    </div>
  );
}

export default Welcome;

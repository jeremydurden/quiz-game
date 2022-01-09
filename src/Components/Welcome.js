function Welcome({ handleSubmit, formData, handleFormData }) {
  return (
    <div className="welcome--container">
      <h1 className="welcome--title">Quizzical</h1>
      <h3 className="welcome--sub-title">
        Welcome! What sort of quiz would you like to take?
      </h3>
      <form className="welcome--formContainer" onSubmit={handleSubmit}>
        <div className="welcome--genre">
          <label htmlFor="genre">Genre</label>
          <select
            name="category"
            id="genre"
            value={formData.category}
            onChange={handleFormData}
          >
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
          </select>
        </div>
        <div className="welcome--difficulty">
          <label htmlFor="difficulty">Difficulty</label>
          <select
            name="difficulty"
            id="difficulty"
            value={formData.difficulty}
            onChange={handleFormData}
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="difficult">Difficult</option>
          </select>
        </div>
        <div className="welcome--numberOfQuestions">
          <label htmlFor="questionCount">Number of Questions</label>
          <select
            name="questionCount"
            id="questionCount"
            value={formData.questionCount}
            onChange={handleFormData}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
          </select>
        </div>
        <button className="welcome--button">Start Quiz</button>
      </form>
    </div>
  );
}

export default Welcome;

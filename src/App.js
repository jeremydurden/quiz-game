import { useState } from "react";

import Welcome from "./Components/Welcome";
import Main from "./Components/Main";

function App() {
  const [startQuiz, setStartQuiz] = useState(false);
  const [formData, setFormData] = useState({
    questionCount: 1,
    category: "",
    difficulty: "",
  });

  function handleFormData(event) {
    setFormData((prevFormData) => {
      return { ...prevFormData, [event.target.name]: event.target.value };
    });
  }

  function quizButton() {
    setStartQuiz(true);
  }

  function tryAgain() {
    setStartQuiz(false);
  }

  return (
    <>
      {!startQuiz ? (
        <Welcome
          quizButton={quizButton}
          formData={formData}
          handleFormData={handleFormData}
        />
      ) : (
        <Main tryAgain={tryAgain} />
      )}
    </>
  );
}

export default App;

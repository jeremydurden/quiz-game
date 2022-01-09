import { useState } from "react";

import Welcome from "./Components/Welcome";
import Main from "./Components/Main";

function App() {
  const [startQuiz, setStartQuiz] = useState(false);
  const [formData, setFormData] = useState({
    questionCount: 5,
    category: "general knowledge",
    difficulty: "easy",
  });

  function handleFormData(event) {
    setFormData((prevFormData) => {
      return { ...prevFormData, [event.target.name]: event.target.value };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setStartQuiz(true);
    console.log(formData);
  }

  function tryAgain() {
    setStartQuiz(false);
  }

  return (
    <>
      {!startQuiz ? (
        <Welcome
          handleSubmit={handleSubmit}
          formData={formData}
          handleFormData={handleFormData}
        />
      ) : (
        <Main tryAgain={tryAgain} formData={formData} />
      )}
    </>
  );
}

export default App;

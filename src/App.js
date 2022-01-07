import { useState } from "react";

import Welcome from "./Components/Welcome";
import Main from "./Components/Main";

function App() {
  const [startQuiz, setStartQuiz] = useState(false);

  function quizButton() {
    setStartQuiz(true);
  }

  function tryAgain() {
    setStartQuiz(false);
  }

  return (
    <>
      {!startQuiz ? (
        <Welcome quizButton={quizButton} />
      ) : (
        <Main tryAgain={tryAgain} />
      )}
    </>
  );
}

export default App;

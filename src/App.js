import { useState } from "react";

import Welcome from "./Components/Welcome";
import Main from "./Components/Main";

function App() {
  const [startQuiz, setStartQuiz] = useState(false);

  function quizButton() {
    setStartQuiz(true);
  }

  return <>{!startQuiz ? <Welcome quizButton={quizButton} /> : <Main />}</>;
}

export default App;

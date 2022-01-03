import { useState, useEffect } from "react";

import Welcome from "./Components/Welcome";
import Main from "./Components/Main";

function App() {
  const [data, setData] = useState([]);
  const [startQuiz, setStartQuiz] = useState(false);

  useEffect(() => {
    console.log("fetch");
    fetch("https://opentdb.com/api.php?amount=5&type=multiple")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  console.log(data);
  function quizButton() {
    console.log("start quiz");
    setStartQuiz(true);
  }

  return <>{!startQuiz ? <Welcome quizButton={quizButton} /> : <Main />}</>;
}

export default App;

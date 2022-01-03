import { useState, useEffect } from "react";
import Question from "./Question";

function Main() {
  const [data, setData] = useState([]);
  useEffect(() => {
    console.log("fetch");
    fetch("https://opentdb.com/api.php?amount=5&type=multiple")
      .then((res) => res.json())
      .then((data) => setData(data.results));
  }, []);

  const questionArray = data.map((result) => {
    return <Question key={result.index} question={result.question} />;
  });

  console.log(data);
  return (
    <main className="main--container">
      {questionArray ? questionArray : "loading"}
      <button className="main--button">Check Answers</button>
    </main>
  );
}

export default Main;

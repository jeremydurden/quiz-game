import { useState } from "react";

import Welcome from "./Components/Welcome";
import Main from "./Components/Main";

function App() {
  const [data, setData] = useState(true);
  return <>{!data ? <Welcome /> : <Main />}</>;
}

export default App;

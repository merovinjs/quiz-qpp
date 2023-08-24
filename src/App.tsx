import Intro from "./pages/intro/Intro";
import Quiz from "./pages/quiz/Quiz";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Intro />}></Route>
          <Route path="/quiz:/diffucult/:amount" element={<Quiz />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

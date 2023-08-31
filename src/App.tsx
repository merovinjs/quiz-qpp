import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import Turk from "./pages/Turk/Turk";
import Math from "./pages/math/Math";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/Turk" element={<Turk />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Math" element={<Math />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

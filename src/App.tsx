import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import Turk from "./pages/Turk/Turk";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/turk" element={<Turk />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

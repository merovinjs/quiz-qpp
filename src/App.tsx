import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import Turk from "./pages/Turk/Turk";
import Mathe from "./pages/Mathe/Mathe";
import { Odevler } from "./pages/odev/Odevler";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/turk" element={<Turk />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/odev" element={<Odevler />}></Route>
          <Route path="/mathe" element={<Mathe />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

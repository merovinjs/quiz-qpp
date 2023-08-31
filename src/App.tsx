import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import T2020 from "./pages/t2020/T2020";
import Home from "./pages/home/Home";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/t2020" element={<T2020 />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

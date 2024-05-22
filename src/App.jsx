import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "./About";
import Home from "./Home";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/forms/:userId" element={<About />} />
        <Route path="/create-forms" element={<About />} />

      </Routes>
    </Router>
  );
}

export default App;

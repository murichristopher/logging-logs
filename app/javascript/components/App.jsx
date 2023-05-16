import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Log from "./Log.jsx";
import Home from "./Home.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/logs" element={<Home />} />
        <Route path="/logs/:id" element={<Log />} />
      </Routes>
    </Router>
  );
};

export default App;

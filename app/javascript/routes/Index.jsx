import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ActionSpace from "../components/ActionSpace";

export default (
  <Router>
    <Routes>
      <Route path="/" element={<ActionSpace />} />
    </Routes>
  </Router>
);

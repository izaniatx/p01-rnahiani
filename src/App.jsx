import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CalendarPage from "./pages/CalendarPage";
import PlanPage from "./pages/PlanPage";
import InicioPage from "./pages/inicio";

function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<InicioPage />} />
        <Route path="/calendario" element={<CalendarPage />} />
        <Route path="/planes" element={<PlanPage />} />
      </Routes>
    </Router>
  );
}

export default App;
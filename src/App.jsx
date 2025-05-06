import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard'
import AirMagPage from "./pages/AirMagPage";
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Dashboard />} />

      </Routes>
    </Router>
  );
}

export default App

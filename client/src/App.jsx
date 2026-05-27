import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import RecruiterDashboard from "./pages/RecruiterDashboard";

function App() {
  return (
    <div>
      <Routes>
        <Route path = "/" element={<Home />} />
        <Route path = "/login" element={<Login />} />
        <Route path = "/register" element={<Register />} />
        <Route path = "/dashboard" element={<Dashboard />} />
        <Route path = "/recruiter-dashboard" element={<RecruiterDashboard />} />
      </Routes>
    </div>
  );
}
export default App;
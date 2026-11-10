import { Navigate, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import RecruiterDashboard from "./pages/RecruiterDashboard";
import Internships from "./pages/Internships";

function DashboardRoute() {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  if (!token || !role) {
    return <Navigate to="/login" replace />;
  }

  if (role === "recruiter") {
    return <Navigate to="/recruiter-dashboard" replace />;
  }

  return role === "student" ? <Dashboard /> : <Navigate to="/login" replace />;
}

function RecruiterDashboardRoute() {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  if (!token || !role) {
    return <Navigate to="/login" replace />;
  }

  return role === "recruiter" ? (
    <RecruiterDashboard />
  ) : (
    <Navigate to="/dashboard" replace />
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/internships" element={<Internships />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<DashboardRoute />} />
      <Route
        path="/recruiter-dashboard"
        element={<RecruiterDashboardRoute />}
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
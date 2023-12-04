import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Login from "./views/Auth/Login";
import Register from "./views/Auth/Register";

import "./App.css";
import DepartmentDetails from "./views/Departments/DepartmentDetails";
import EmployeeDetails from "./views/Employees/EmployeeDetails.";

const Dashboard = lazy(() => import("./views/Dashboard"));
const Departments = lazy(() => import("./views/Departments"));
const Employees = lazy(() => import("./views/Employees"));

const App = () => {
  return (
    <div className="App" style={{ height: "100vh" }}>
      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/departments" element={<Departments />} />
            <Route
              path="/departments/view/:id"
              element={<DepartmentDetails />}
            />
            <Route path="/employees" element={<Employees />} />
            <Route path="/employees/view/:id" element={<EmployeeDetails />} />
          </Routes>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Router>
      </Suspense>
      <ToastContainer hideProgressBar autoClose={1500} />
    </div>
  );
};

export default App;

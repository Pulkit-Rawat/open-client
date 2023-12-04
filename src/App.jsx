import { lazy, Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Login from "./views/Auth/Login";
import Register from "./views/Auth/Register";

import "./App.css";

const Dashboard = lazy(() => import("./views/Dashboard"));
const Chat = lazy(() => import("./views/Chat"));
const Settings = lazy(() => import("./views/Settings"));
const ProtectedRoute = lazy(() => import('./layout'))

const App = () => {
  return (
    <div className="App" style={{ height: "100vh" }}>
      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <Routes>
            <Route element={<ProtectedRoute />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/app/chat" element={<Chat />} />
              <Route path="/settings" element={<Settings />} />
            </Route>

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Router>
      </Suspense>
      <ToastContainer hideProgressBar autoClose={1500} />
    </div>
  );
};

export default App;

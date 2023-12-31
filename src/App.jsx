import { lazy, Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Login from "./views/Auth/Login";
import Register from "./views/Auth/Register";

import "./App.css";
import { useThemeContext } from "./hooks/useThemeToggle";

const Dashboard = lazy(() => import("./views/Dashboard"));
const Chat = lazy(() => import("./views/Chat"));
const Settings = lazy(() => import("./views/Settings"));
const ProtectedRoute = lazy(() => import("./layout"));
const Profile = lazy(() => import('./views/Account/Profile'))

const App = () => {
  const {theme} = useThemeContext();
  console.log("theme", theme);
  return (
    <div className={`App ${theme == 'dark' ? 'dark-mode' : ''}`} style={{ height: "100vh" }}>
      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <Routes>
            <Route element={<ProtectedRoute />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/app/chat" element={<Chat />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/account/profile" element={<Profile/>}>
              </Route>
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

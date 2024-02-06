import { lazy, Suspense } from "react";
import { Provider } from "react-redux";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { useThemeContext } from "./hooks/useThemeToggle";
import store from "./store";
import Login from "./views/Auth/Login";
import Register from "./views/Auth/Register";

import "./App.css";

const Dashboard = lazy(() => import("./views/Dashboard"));
const Chat = lazy(() => import("./views/Chat"));
const Settings = lazy(() => import("./views/Settings"));
const ProtectedRoute = lazy(() => import("./layout"));
const Profile = lazy(() => import("./views/Account/Profile"));
const Employees = lazy(() => import("./views/Employees"));
const Products = lazy(() => import("./views/Products"));
const Cart = lazy(() => import("./views/Cart"));
const OrderSummary = lazy(() => import("./views/OrderSummary"));

const App = () => {

  const { theme } = useThemeContext();
  return (
    <div
      className={`App ${theme == "dark" ? "dark-mode" : ""}`}
      style={{ height: "100vh" }}
    >
      <Provider store={store}>
        <Suspense fallback={<div>Loading...</div>}>
          <Router>
            <Routes>
              <Route element={<ProtectedRoute />}>
                <Route path="/" element={<Dashboard />} />
                <Route path="/app/chat" element={<Chat />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/account/profile" element={<Profile />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/products" element={<Products />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/order-summary" element={<OrderSummary />} />
              </Route>

              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </Router>
        </Suspense>

        <ToastContainer hideProgressBar autoClose={1500} />
      </Provider>
    </div>
  );
};

export default App;

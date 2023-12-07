import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Nav, Navbar, NavbarBrand, NavItem, NavLink } from "reactstrap";

import SampleLogo from "../../assets/logo.png";
import { useOnlineStatus } from "../../hooks/useOnlineStatus";

import "./styles.scss";
import "react-toastify/dist/ReactToastify.css";
import { useThemeContext } from "../../hooks/useThemeToggle";

const AppNavbar = () => {
  const isOnline = useOnlineStatus();
  let userName = localStorage.getItem("userName") || "";
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const { toggleTheme } = useThemeContext();

  return (
    <div className="app-navbar">
      <Navbar color="light" light expand="md" className="header">
        <NavbarBrand href="/" className="d-flex align-items-center">
          <img
            src={SampleLogo}
            height={30}
            width={30}
            alt="logo"
            className={`avatar rounded-circle border ${
              isOnline ? "border-success" : "border-danger"
            }`}
          />
          <div className="d-flex align-items-center">
            <p className="mx-2">{userName}</p>
          </div>
        </NavbarBrand>
        <Nav className="ml-auto- w-100" navbar>
          <NavItem className="d-flex flex-grow-1 justify-content-center align-items-center">
            <b>Chatbot AI</b>
          </NavItem>
          <NavItem className="d-flex">
            <NavLink href="#" onClick={handleLogout}>
              <Button color="danger" size="sm" outline>
                Logout
              </Button>
            </NavLink>
            <NavLink href="#" onClick={toggleTheme}>
              <Button outline color="primary" size="sm">
                Change Theme
              </Button>
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default AppNavbar;

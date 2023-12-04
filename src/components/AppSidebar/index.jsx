import React, { useEffect, useState } from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import "./sidebar.scss";
import { Link, useLocation } from "react-router-dom";

const AppSidebar = () => {
  const [activeTab, setActiveTab] = useState(1);
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname.includes("/employees")) {
      setActiveTab(2);
    } else if (pathname.includes("/departments")) {
      setActiveTab(1);
    } else {
      setActiveTab(0);
    }
  });

  return (
    <Nav vertical className="sidebar  pt-3 ">
      <NavItem
        className={`${activeTab == 1 && "nav-active"} pointer`}
        onClick={() => setActiveTab(1)}
      >
        <Link to="/departments" className="text-dark nav-link text-start">
          Departments
        </Link>
      </NavItem>
      <NavItem
        className={`${activeTab == 2 && "nav-active"} pointer`}
        onClick={() => setActiveTab(2)}
      >
        <Link to="/employees" className="text-dark nav-link text-start">
          Employees
        </Link>
      </NavItem>
    </Nav>
  );
};

export default AppSidebar;

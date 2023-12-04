import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Nav, NavItem } from "reactstrap";

import "./sidebar.scss";

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
  }, [pathname]);

  return (
    <Nav vertical className="sidebar  pt-3 ">
      <NavItem
        className={`${activeTab == 1 && "nav-active"} pointer`}
        onClick={() => setActiveTab(1)}
      >
        <Link to="/app/chat" className="text-dark nav-link text-start">
          Chat
        </Link>
      </NavItem>
      <NavItem
        className={`${activeTab == 2 && "nav-active"} pointer`}
        onClick={() => setActiveTab(2)}
      >
        <Link to="/settings" className="text-dark nav-link text-start">
          Settings
        </Link>
      </NavItem>
    </Nav>
  );
};

export default AppSidebar;

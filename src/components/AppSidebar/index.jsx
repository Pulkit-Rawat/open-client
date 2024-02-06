import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import AccountOptions from "./AccountOptions";

import "./styles.scss";

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
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/app/chat">Chat</Link>
        </li>
        <li>
          <Link to="/settings">Settings</Link>
        </li>
        <li>
          <Link to="/employees">Employees</Link>
        </li>
        <li>
          <Link to="products">
            Products
          </Link>
        </li>
        <li>
          <Link to="#">
            <AccountOptions />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AppSidebar;

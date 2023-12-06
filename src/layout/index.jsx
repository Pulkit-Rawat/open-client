import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";

import AppNavbar from "../components/AppNavbar";
import AppSidebar from "../components/AppSidebar";

import "./styles.scss";

const ProtectedRoute = () => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("token") ? true : false;

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, []);

  return (
    <Container className="m-0 p-0" fluid>
      <Row className="m-0 p-0">
        <Col xs={12} className="px-0">
          <AppNavbar />
        </Col>
      </Row>

      <div className="app-wrapper">
        <AppSidebar />
        <Outlet />
      </div>
    </Container>
  );
};

export default ProtectedRoute;

import React from "react";
import AppLayout from "../../layout";
import { Card, CardBody, Row, Col } from "reactstrap";

const index = () => {
  return (
    <AppLayout>
      <Row className="w-100 m-0 p-0 mt-4">
        <Col xs={4}>
          <Card>
            <CardBody className="dash-card">
              <h4>Employees</h4>
              <p>1024</p>
            </CardBody>
          </Card>
        </Col>
        <Col xs={4}>
          <Card>
            <CardBody className="dash-card">
              <h4>Managers</h4>
              <p>1024</p>
            </CardBody>
          </Card>
        </Col>
        <Col xs={4}>
          <Card>
            <CardBody className="dash-card">
              <h4>Departments</h4>
              <p>1024</p>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </AppLayout>
  );
};

export default index;

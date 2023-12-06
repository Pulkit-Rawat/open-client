import React from "react";
import { Card, CardBody, Row, Col } from "reactstrap";

const index = () => {
  return (
    <>
      <Row className="w-100 m-0 p-0 mt-3">
        <Col xs={4} className="pointer">
          <Card >
            <CardBody>
              <h3>Chats</h3>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default index;

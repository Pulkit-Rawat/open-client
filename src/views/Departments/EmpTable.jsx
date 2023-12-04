import React from "react";
import { Card, CardBody, Table, Button } from "reactstrap";

const EmpTable = ({ records = [] }) => {
  return (
    <>
      <h5 className="mt-2">Assigned Employees</h5>
      <Card>
        <CardBody>
          <Table striped responsive>
            <thead>
              <tr>
                <th>S. No.</th>
                <th>Employee Name</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {records.length
                ? records.map((item, index) => (
                    <tr key={index}>
                      <td scope="row">{index + 1}</td>
                      <td>{item.name || "N/A"}</td>
                      <td>{item.email}</td>
                      <td>
                        <Button className="me-3" color="primary" size="sm">
                          View
                        </Button>
                      </td>
                    </tr>
                  ))
                : ""}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </>
  );
};

export default EmpTable;

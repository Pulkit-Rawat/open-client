import React, { useState } from "react";
import { Table, Button, Card, CardBody } from "reactstrap";
import AssignDepartmentModal from "./AssignDepartmentModal";
import { useNavigate } from "react-router-dom/dist";

const DataTable = ({ records = [], departments = [] }) => {
  const isManager = localStorage.getItem("role") == 1;
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [isOpen, setOpen] = useState(false);

  const toggle = () => setOpen(false);

  const handleViewDetails = (item) => {
    navigate(`/employees/view/${item._id}`);
  };

  const assignDepartment = (data) => {
    setOpen(true);
    setData(data);
  };

  return (
    <div className="bg-info-">
      <div className="text-center">
        <h4>Employees</h4>
      </div>
      <Card className="mt-3">
        <CardBody>
          <Table striped responsive>
            <thead>
              <tr>
                <th>S. No.</th>
                <th>Email</th>
                <th>Employee Name</th>
                <th>Contact</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {records.length
                ? records.map((item, index) => (
                    <tr key={index}>
                      <td scope="row">{index + 1}</td>
                      <td>{item.email}</td>
                      <td>{item.userName ? item.userName : "N/A"}</td>
                      <td>{item.mob}</td>
                      <td>
                        <Button
                          className="me-3"
                          color="primary"
                          size="sm"
                          onClick={() => handleViewDetails(item)}
                        >
                          View
                        </Button>
                        {isManager && (
                          <Button
                            className="me-3"
                            color="success"
                            size="sm"
                            onClick={() => assignDepartment(item)}
                          >
                            Assign Department
                          </Button>
                        )}
                      </td>
                    </tr>
                  ))
                : ""}
            </tbody>
          </Table>
        </CardBody>
      </Card>
      <AssignDepartmentModal
        isOpen={isOpen}
        empData={data}
        toggle={toggle}
        departments={departments}
      />
    </div>
  );
};

export default DataTable;

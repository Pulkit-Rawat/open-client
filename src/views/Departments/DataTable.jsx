import React from "react";
import { Table, Button, Card, CardBody } from "reactstrap";
import { MdDeleteForever } from "react-icons/md";
import { api } from "../../utilities/axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const DataTable = ({ getDepartments = null, departments = [] }) => {
  const navigate = useNavigate();
  const isManager = localStorage.getItem("role") == 1;

  const handleViewDetails = (item) => {
    navigate(`/departments/view/${item._id}`);
  };

  const deleteDepartment = async (dptId = "") => {
    try {
      let payload = {
        dptId,
      };
      const { data } = await api.post("deleteDepartment", payload);
      if (data.success) {
        toast.success(data.message);
        return getDepartments();
      }
      return toast.error("Unable to delete department.");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Card>
      <CardBody>
        <Table striped responsive>
          <thead>
            <tr>
              <th>S. No.</th>
              <th>Department Name</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {departments.length
              ? departments.map((item, index) => (
                  <tr key={index}>
                    <td scope="row">{index + 1}</td>
                    <td>{item.dptName}</td>
                    <td>{item.desc}</td>
                    <td>
                      <Button
                        onClick={() => handleViewDetails(item)}
                        className="me-3"
                        color="primary"
                        size="sm"
                      >
                        View
                      </Button>
                      {isManager && (
                        <MdDeleteForever
                          size={24}
                          color="red"
                          onClick={() => deleteDepartment(item._id)}
                        />
                      )}
                    </td>
                  </tr>
                ))
              : ""}
          </tbody>
        </Table>
      </CardBody>
    </Card>
  );
};

export default DataTable;

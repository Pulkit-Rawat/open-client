import { useParams } from "react-router-dom";
import AppLayout from "../../layout";
import { Card, CardBody } from "reactstrap";
import { api } from "../../utilities/axios";
import { useEffect, useState } from "react";

const EmployeeDetails = () => {
  const { id } = useParams();
  const [userDetail, setUserDetail] = useState({});
  const getEmployeeDetailByID = async () => {
    try {
      const { data } = await api.post(`/getEmployeeByID`, { id });
      console.log("data", data);
      setUserDetail(data.data);
    } catch (Err) {
      console.log("Error from Employee Details", Err);
    }
  };
  useEffect(() => {
    getEmployeeDetailByID();
  }, []);
  return (
    <AppLayout>
      <h5>Employee Details</h5>
      <Card className="m-2">
        <CardBody>
          <div className="d-flex flex-column align-items-start">
            <p className="fw-bold text-dark">
              Employee ID:<span className="fw-light ps-2">{id}</span>
            </p>
            <p className="fw-bold text-dark">
              Name:
              <span className="fw-light ps-2">
                {userDetail.userName || "N/A"}
              </span>
            </p>
            <p className="fw-bold text-dark">
              Contact:<span className="fw-light ps-2">{userDetail.mob}</span>
            </p>
            <p className="fw-bold text-dark">
              Role:
              <span className="fw-light ps-2">
                {userDetail.role == 1 ? "Manager" : "Employee"}
              </span>
            </p>
          </div>
        </CardBody>
      </Card>
    </AppLayout>
  );
};
export default EmployeeDetails;

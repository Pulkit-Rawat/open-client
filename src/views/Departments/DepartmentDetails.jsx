import { useParams } from "react-router-dom";
import AppLayout from "../../layout";
import { Card, CardBody } from "reactstrap";
import { api } from "../../utilities/axios";
import { useEffect, useState } from "react";
import EmpTable from "./EmpTable";

const DepartmentDetails = () => {
  const { id } = useParams();
  const [dptDetails, setDptDetails] = useState({});
  const [empList, setEmpList] = useState([]);

  const getDepartmentDetails = async () => {
    try {
      const { data } = await api.post(`/getDepartmentByID`, { id });
      console.log("data", data);
      setDptDetails(data.data);
      setEmpList(data.empList);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getDepartmentDetails();
  }, []);

  return (
    <AppLayout>
      <h5>Department Details</h5>
      <Card>
        <CardBody>
          <div className="d-flex flex-column align-items-start">
            <p className="fw-bold text-dark">
              Department Id:<span className="fw-light ps-2">{id}</span>
            </p>
            <p className="fw-bold text-dark">
              Department Name:
              <span className="fw-light ps-2">
                {dptDetails.dptName || "N/A"}
              </span>
            </p>
            <p className="fw-bold text-dark">
              Description:
              <span className="fw-light ps-2">{dptDetails.desc}</span>
            </p>
          </div>
        </CardBody>
      </Card>
      <EmpTable records={empList} />
    </AppLayout>
  );
};
export default DepartmentDetails;

import React, { useState } from "react";
import { toast } from "react-toastify";
import { Row, Col, Input, Label, Button, Spinner } from "reactstrap";
import { api } from "../../utilities/axios";
import "react-toastify/dist/ReactToastify.css";

const AddDepartment = () => {
  const [isLoading, setLoading] = useState(false);

  let dptModel = {
    dptName: "",
    desc: "",
  };

  const [dptData, setDptData] = useState(dptModel);

  const handleChange = ({ target: { name, value } }) => {
    setDptData({ ...dptData, [name]: value });
  };

  //create a department
  const createDepartment = async () => {
    try {
      setLoading(true);
      const { data } = await api.post("/createDepartment", dptData);
      if (data.success) {
        setDptData(dptModel);
        setLoading(false);
        return toast.success(data.message);
      }
      toast.error(data.message, {
        hideProgressBar: true,
        toastId: "err-dpt-toast",
      });
      setDptData(dptModel);
      setLoading(false);
      return;
    } catch (err) {
      setLoading(false);
      toast.error("Something went wrong.", {
        hideProgressBar: true,
        toastId: "err-dpt-toast",
      });
      console.log(err);
    }
  };

  return (
    <div>
      <div>
        <p>Add a Department</p>
      </div>
      <div>
        <Row className="w-75 mx-auto">
          <Col xs={12} md={6} className="text-start my-1">
            <Label>Department Name</Label>
            <Input
              name="dptName"
              value={dptData.dptName}
              onChange={handleChange}
            />
          </Col>
          <Col xs={12} md={6} className="text-start my-1">
            <Label>Description</Label>
            <Input name="desc" value={dptData.desc} onChange={handleChange} />
          </Col>
          <div className="text-end mt-2">
            <Button
              disabled={isLoading || !dptData.dptName || !dptData.desc}
              onClick={createDepartment}
              color="primary"
              className="px-3 w-25"
            >
              {isLoading ? <Spinner size={"sm"} /> : "Save"}
            </Button>
          </div>
        </Row>
      </div>
    </div>
  );
};

export default AddDepartment;

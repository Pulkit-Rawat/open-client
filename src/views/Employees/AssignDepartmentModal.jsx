import React, { useState } from "react";
import Select from "react-select";
import { toast } from "react-toastify";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import { api } from "../../utilities/axios";

const AssignDepartmentModal = ({
  isOpen = false,
  toggle = null,
  departments = [],
  empData = {},
}) => {
  const [currDept, setCurrDept] = useState("");
  const assignDept = async () => {
    try {
      let payload = {
        dptId: currDept,
        userId: empData._id,
      };
      const { data } = await api.post("assignDeptToEmployee", payload);
      if (data.success) {
        toggle();
        return toast.success(
          data.message || "Department assigned successfully"
        );
      }
      return toast.error(data.message || "Unable to assign department");
    } catch (err) {
      return toast.error("Unable to assign department");
      console.log(err);
    }
  };

  return (
    <Modal centered isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>Assign Department</ModalHeader>
      <ModalBody>
        <div>
          <p>Select Department</p>
          <Select
            onChange={(e) => setCurrDept(e.value)}
            options={departments}
          />
        </div>
        <div className="text-end mt-2">
          <Button
            onClick={assignDept}
            outline
            color="primary"
            size="sm"
            className="ms-auto px-4"
          >
            Save
          </Button>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default AssignDepartmentModal;

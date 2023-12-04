import React, { useEffect, useState } from "react";
import AppLayout from "../../layout";
import { Button, Row } from "reactstrap";
import DataTable from "./DataTable";
import { api } from "../../utilities/axios";
import AddDepartment from "./AddDepartment";

const Departments = () => {
  const isManager = localStorage.getItem("role") == 1;
  const [isCreateView, setCreateView] = useState(false);
  const [departments, setDepartments] = useState([]);

  const getDepartments = async () => {
    try {
      const { data } = await api.get("/getAllDepartments");
      if (data.success) {
        setDepartments(data.data);
      }
      console.log("getAllDepartments: ", data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (isCreateView) return () => {};
    getDepartments();
  }, [isCreateView]);

  return (
    <AppLayout>
      <div className="w-100 p-2">
        <div className="text-center">
          <h4>Departments</h4>
        </div>
        {isManager && (
          <div className="text-end p-1">
            <Button
              onClick={() => setCreateView(!isCreateView)}
              size="sm"
              color="primary"
            >
              {isCreateView ? "View Departments" : "Create"}
            </Button>
          </div>
        )}
        {isCreateView && isManager ? (
          <AddDepartment />
        ) : (
          <DataTable
            getDepartments={getDepartments}
            departments={departments}
          />
        )}
      </div>
    </AppLayout>
  );
};

export default Departments;

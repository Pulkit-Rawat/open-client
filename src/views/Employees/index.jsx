import axios from "axios";
import { useEffect, useState } from "react";

import DataTable from "./DataTable";

const Employees = () => {
  const [records, setRecords] = useState([])

  const getEmployeeRecords = async () => {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users",
        {
          headers: {
            "Allow-access-allow-origin": "*",
          },
        }
      );
      setRecords(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getEmployeeRecords();
    return;
  }, []);

  return <div className="w-100">
    <h3 className="mt-1">Employees</h3>

    <DataTable records={records} setRecords={setRecords} />
    
  </div>;
};

export default Employees;

import React, { useEffect, useState } from "react";
import { Button, Table } from "reactstrap";

const DataTable = ({ records = [] }) => {
  const [list, setList] = useState([]);
  const [key, setKey] = useState("");

  const handleSearch = () => {
    if (!key) {
      setList(records);
      return;
    }
    let res = list.filter(
      (item) =>
        item.name.toLowerCase().includes(key.toLowerCase()) ||
        item.email.toLowerCase().includes(key.toLowerCase()) ||
        item.website.toLowerCase().includes(key.toLowerCase())
    );
    setList(res);
  };

  console.log("map: ",list.map(item => {}))

  const sortList = (col) => {
    let arr = list.sort((a, b) => {
      let s1 = a[col].toLowerCase();
      let s2 = b[col].toLowerCase();
      if (s1 < s2) {
        return -1;
      }
      if (s1 > s2) {
        return 1;
      }
      if (s1 === s2) {
        return 0;
      }
    });
    return setList([...arr]);
  };

  useEffect(() => {
    setList(records);
  }, [records]);

  return (
    <div>
      <div>
        <div className="d-flex align-items-center justify-content-end mx-2  ">
          <input
            type="text"
            value={key}
            className="form-control w-25 mx-2"
            onChange={({ target: { value } }) => setKey(value)}
          />
          <Button onClick={handleSearch} color="primary" size="sm">
            Search
          </Button>
        </div>
      </div>
      <Table striped>
        <thead>
          <tr>
            <th>ID</th>
            <th>
              Name{" "}
              <Button
                onClick={() => sortList("name")}
                color="primary"
                size="sm"
              >
                Sort
              </Button>
            </th>
            <th>
              Email{" "}
              <Button
                onClick={() => sortList("email")}
                color="primary"
                size="sm"
              >
                Sort
              </Button>
            </th>
            <th>
              Website{" "}
              <Button
                onClick={() => sortList("website")}
                color="primary"
                size="sm"
              >
                Sort
              </Button>
            </th>
          </tr>
        </thead>
        <tbody>
          {list.map((item, index) => (
            <tr key={item.id}>
              <th scope="row">{item.id}</th>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.website}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default DataTable;

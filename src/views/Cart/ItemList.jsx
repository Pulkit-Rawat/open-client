import React from "react";
import { Button, Card } from "reactstrap";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.length
        ? items.map((item) => (
            <Card className="m-2 p-2 d-flex flex-row justify-content-between align-items-center">
              <div>
                <p>{item?.brand || "-"}</p>
                <p>{item?.model || "-"}</p>
                <p>{item?.sp || "-"}</p>
              </div>
              <div>
                <Button color="primary" className="px-3" outline>
                  Buy
                </Button>
              </div>
            </Card>
          ))
        : ""}
    </div>
  );
};

export default ItemList;

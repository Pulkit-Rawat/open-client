import React from "react";
import { useDispatch } from "react-redux";
import { Button, Card } from "reactstrap";

import { removeFromCart } from "../../reducers/productsReducer";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const removeItemFromCart = (pID) => {
    dispatch(removeFromCart(pID));
  };
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
                <Button size="sm" color="primary" className="px-3" outline>
                  Buy
                </Button>
                <Button
                  onClick={() => removeItemFromCart(item.pID)}
                  size="sm"
                  color="danger"
                  className="px-3 ms-1"
                  outline
                >
                  Delete
                </Button>
              </div>
            </Card>
          ))
        : ""}
    </div>
  );
};

export default ItemList;

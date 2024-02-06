import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Card, CardBody } from "reactstrap";

import { addToCart } from "../../reducers/productsReducer";

const ItemCard = ({ item = {} }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const addItemToCart = () => {
    dispatch(addToCart(item));
    navigate("/cart");
  };

  return (
    <Card className="w-100 py-2">
      <CardBody>
        <p>{item?.brand || ""}</p>
        <p>{item?.model || ""}</p>
        <p>{item?.sp || ""}</p>
      </CardBody>
      <Button
        size="sm w-25 mx-auto"
        color="primary"
        outline
        onClick={addItemToCart}
      >
        Buy
      </Button>
    </Card>
  );
};

export default ItemCard;

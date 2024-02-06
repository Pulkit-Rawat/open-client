import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Button, Card } from "reactstrap";

import { api } from "../../utilities/axios";
import ItemList from "./ItemList";

const Cart = ({ item = {} }) => {

  const productsState = useSelector(state => state.products)

  const [items, setItems] = useState(productsState.items)


  const createPaymentSession = async () => {
    try {
      let payload = {};
      const {data} = await api.post("/createPaymentSession", payload);
      if(!data.status){
        toast.error(data.error)
        return;
      }
      if(data.url){
        window.location.href = data.url
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setItems(productsState.items)
  }, [productsState.items])
  
  return (
    <div className="w-100">
      <h3>Cart</h3>
      <div>
        <p className="text-end mx-2">Items in cart: {items.length}</p>
        <ItemList items={items} />
      </div>
    </div>
  );
};

export default Cart;

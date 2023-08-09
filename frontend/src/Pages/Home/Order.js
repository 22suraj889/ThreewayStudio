import { Button } from "@material-ui/core";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { accessChat } from "../../Redux/Actions/ChatAction";

const Order = ({ order }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onChatBtnClick = () => {
    dispatch(accessChat(order.manufacturer));
    navigate("/chat");
  };
  return (
    <div className="w-2/4 bg-red-200 flex flex-col justify-center mt-6 pt-6 pr-6 pl-6 pb-3">
      <p>OrderID: {order.orderID}</p>
      <div className="flex justify-around items-center mt-3">
        <p>Source: {order.source}</p>
        <p>Destination: {order.destination}</p>
      </div>
      <div className="flex justify-around mt-3 mb-3">
        <p>Pickup: {order.pickup}</p>
        <p>Quantity: {order.quantity}</p>
      </div>
      <div className="flex justify-center">
        <Button
          variant="contained"
          color="primary"
          style={{ width: "10rem", height: "3rem" }}
          onClick={onChatBtnClick}
        >
          Chat
        </Button>
      </div>
    </div>
  );
};

export default Order;

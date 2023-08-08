import React, { useEffect, useState } from "react";
import { fetchOrders } from "../../Redux/Actions/OrderAction";
import { useDispatch, useSelector } from "react-redux";
import Order from "./Order";
import { Button, TextField } from "@material-ui/core";
import searchCheckHandler from "./SearchCheckHandler";

const initialSearch = {
  orderID: "",
  source: "",
  destination: "",
};
const Transporter = () => {
  const [search, setSearch] = useState(initialSearch);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const [ordersReceived, setOrdersReceived] = useState([]);
  const allOrders = useSelector((state) => state.orders);
  useEffect(() => {
    dispatch(fetchOrders());
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, []);

  const getAllOrdersHandler = () => {
    const currentTransporterOrders = allOrders.filter(
      (order) => order.transporter === user.result._id
    );
    setOrdersReceived(currentTransporterOrders);
  };

  useEffect(() => {
    getAllOrdersHandler();
  }, [allOrders]);

  // filtering the order based on search parameters
  const filterOrderHandler = () => {
    let filteredOrders = ordersReceived;
    filteredOrders = searchCheckHandler(filteredOrders, search);
    setOrdersReceived(filteredOrders);
    setSearch(initialSearch);
  };
  const handleSearch = (e) => {
    setSearch({ ...search, [e.target.name]: e.target.value });
  };

  console.log(ordersReceived);
  return (
    <div className="flex flex-col items-center">
      <h1 className="font-bold text-lg	">Orders</h1>
      <div className="flex justify-around w-4/5	">
        <TextField
          name="orderID"
          label="Search with orderID"
          type="text"
          value={search.orderID}
          onChange={handleSearch}
        />
        <TextField
          name="source"
          label="Search with source"
          type="text"
          value={search.source}
          onChange={handleSearch}
        />
        <TextField
          name="destination"
          label="Search with destination"
          type="text"
          value={search.destination}
          onChange={handleSearch}
        />
        <Button
          variant="contained"
          color="primary"
          style={{ width: "10rem", height: "3rem" }}
          onClick={filterOrderHandler}
        >
          Search
        </Button>
        <Button
          variant="contained"
          color="primary"
          style={{ width: "10rem", height: "3rem" }}
          onClick={getAllOrdersHandler}
        >
          All Orders
        </Button>
      </div>
      {ordersReceived.map((order) => (
        <Order key={order._id} order={order} />
      ))}
    </div>
  );
};

export default Transporter;

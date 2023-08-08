import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import uniqid from "uniqid";
import { getAllUsers } from "../../Redux/Actions/AuthAction";
import { Navigate, useNavigate } from "react-router-dom";
import { addOrder } from "../../Redux/Actions/OrderAction";

const initialOrderData = {
  manufacturer: "",
  orderID: uniqid(),
  source: "",
  destination: "",
  quantity: 1,
  pickup: "",
  transporter: "",
};

const Manufacturer = ({ user }) => {
  initialOrderData.manufacturer = user?.result?._id;
  initialOrderData.pickup = user?.result?.address;
  const [orderData, setOrderData] = useState(initialOrderData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const allUsers = useSelector((state) => state.allUsers);
  const transporters = allUsers?.filter((user) => user.type === "transporter");
  useEffect(() => {
    dispatch(getAllUsers());
  }, [navigate, dispatch]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(addOrder(orderData));
    setOrderData(initialOrderData);
  };
  const handleChangeAuthData = (e) => {
    setOrderData({ ...orderData, [e.target.name]: e.target.value });
  };
  return (
    <div className="min-h-screen bg-cover bg-center flex flex-col	 items-center justify-center">
      <h1 className="font-semibold">Make Order</h1>
      <form
        onSubmit={onSubmitHandler}
        className="bg-white w-96 flex flex-col rounded-lg shadow-lg p-10 max-w-xl"
      >
        <TextField
          name="orderID"
          label="Order ID"
          type="text"
          value={orderData.orderID}
          onChange={handleChangeAuthData}
        />
        <TextField
          name="source"
          label="Source"
          type="text"
          value={orderData.source}
          onChange={handleChangeAuthData}
        />
        <TextField
          name="destination"
          label="Destination"
          type="text"
          value={orderData.destination}
          onChange={handleChangeAuthData}
        />
        <TextField
          name="pickup"
          label="Pickup"
          type="text"
          value={user.result.address}
          onChange={handleChangeAuthData}
        />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Transporter</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="transporter"
            value={orderData.transporter}
            label="Transporter"
            onChange={handleChangeAuthData}
          >
            {transporters.map((user) => (
              <MenuItem key={user._id} value={user.name}>
                {user.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="quantity"
            value={orderData.quantity}
            label="Quantity"
            onChange={handleChangeAuthData}
          >
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
          </Select>
        </FormControl>
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Manufacturer;

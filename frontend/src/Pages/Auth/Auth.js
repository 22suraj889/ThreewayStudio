import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { useDispatch } from "react-redux";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { register, login } from "../../Redux/Actions/AuthAction";
import { useNavigate } from "react-router-dom";

const initialUserData = {
  name: "",
  email: "",
  password: "",
  type: "",
  address: "",
};

const Auth = () => {
  const [showLogin, setShowLogin] = useState(true);
  const [authData, setAuthData] = useState(initialUserData);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (showLogin) {
      dispatch(login(authData));
    } else {
      dispatch(register(authData));
    }
    navigate("/");
    setAuthData(initialUserData);
  };
  const switchMode = () => {
    setShowLogin(!showLogin);
  };
  const handleChangeAuthData = (e) => {
    setAuthData({ ...authData, [e.target.name]: e.target.value });
  };
  return (
    <div className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center">
      <h1 className="text-lg font-bold">{showLogin ? "Login" : "Register"}</h1>
      <form
        className="bg-white flex flex-col rounded-lg shadow-lg p-10 max-w-xl"
        onSubmit={onSubmitHandler}
      >
        {!showLogin && (
          <TextField
            name="name"
            label="Name"
            type="text"
            value={authData.name}
            onChange={handleChangeAuthData}
          />
        )}
        <TextField
          name="email"
          label="Email"
          type="email"
          value={authData.email}
          onChange={handleChangeAuthData}
        />
        <TextField
          name="password"
          label="Password"
          type="password"
          value={authData.password}
          onChange={handleChangeAuthData}
        />
        {!showLogin && (
          <TextField
            name="address"
            label="Address"
            type="address"
            value={authData.password}
            onChange={handleChangeAuthData}
          />
        )}
        {!showLogin && (
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="type"
              value={authData.type}
              label="Type"
              onChange={handleChangeAuthData}
            >
              <MenuItem value="Manufacturer">Manufacturer</MenuItem>
              <MenuItem value="Transporter">Tranporter</MenuItem>
            </Select>
          </FormControl>
        )}
        <div className="flex flex-col h-24 justify-between items-center mt-6">
          <Button variant="contained" color="primary" type="submit">
            {showLogin ? "Login" : "Register"}
          </Button>
          <Button variant="text" color="primary" onClick={switchMode}>
            {showLogin
              ? "Don't have the account? Click to register!"
              : "Already have the account? Click to login!"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Auth;

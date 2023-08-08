import { Button } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../Redux/Actions/AuthAction";

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("profile"));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="flex justify-around bg-zinc-800 text-slate-50 p-2.5 items-center">
      <h1>Welcome {user?.result?.name}</h1>
      <p
        className="cursor-pointer"
        onClick={() => {
          navigate("/");
        }}
      >
        Dashboard
      </p>
      <p
        className="cursor-pointer"
        onClick={() => {
          navigate("/chat");
        }}
      >
        Chat
      </p>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          dispatch(logout());
          navigate("/auth");
        }}
      >
        Logout
      </Button>
    </div>
  );
};

export default Navbar;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMsg } from "../../Redux/Actions/MessageAction";

const AllChats = ({ chat, setCurrentChat }) => {
  const user = JSON.parse(localStorage.getItem("profile"));
  const dispatch = useDispatch();
  const onClickChatHandler = () => {
    dispatch(fetchMsg(chat._id));
    setCurrentChat(chat);
  };

  let name = "";
  if (chat?.users[0]?.name === user._id) {
    name = chat?.users[0]?.name;
  } else {
    name = chat?.users[1]?.name;
  }
  return <div onClick={onClickChatHandler}>{name}</div>;
};

export default AllChats;

import React, { useEffect, useState } from "react";
import AllChats from "./AllChats";
import ChatBox from "./ChatBox";
import { useDispatch, useSelector } from "react-redux";
import { getChats } from "../../Redux/Actions/ChatAction";
import { useNavigate } from "react-router-dom";

const Chat = () => {
  const [chats, setChats] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const allChats = useSelector((state) => state.chats);
  useEffect(() => {
    dispatch(getChats());
    setChats(allChats);
  }, [dispatch, navigate]);

  console.log(chats);
  return (
    <div className="flex">
      <AllChats />
      <ChatBox />
    </div>
  );
};

export default Chat;

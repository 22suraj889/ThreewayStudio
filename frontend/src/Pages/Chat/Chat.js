import React, { useEffect, useState } from "react";
import AllChats from "./AllChats";
import ChatBox from "./ChatBox";
import { useDispatch, useSelector } from "react-redux";
import { getChats } from "../../Redux/Actions/ChatAction";
import { useNavigate } from "react-router-dom";

const Chat = () => {
  const [chats, setChats] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const dispatch = useDispatch();
  const allChats = useSelector((state) => state.chats);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getChats());
  }, []);

  useEffect(() => {
    setChats(allChats);
  }, [allChats]);
  console.log(currentChat);
  return (
    <div className="flex  min-h-screen mt-5">
      <div className="w-1/4 border-r-pink-600	">
        {chats?.map((c) => (
          <AllChats key={c?._id} chat={c} setCurrentChat={setCurrentChat} />
        ))}
      </div>
      <div className="w-3/4">
        <ChatBox currentChat={currentChat} />
      </div>
    </div>
  );
};

export default Chat;

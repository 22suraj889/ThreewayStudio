import React, { useEffect, useState } from "react";
import AllChats from "./AllChats";
import ChatBox from "./ChatBox";
import { useDispatch, useSelector } from "react-redux";
import { getChats } from "../../Redux/Actions/ChatAction";
import { useNavigate } from "react-router-dom";
import io from "socket.io-client";
import { fetchMsg, sendMsg } from "../../Redux/Actions/MessageAction";
const ENDPOINT = "http://localhost:5000";
let socket, selectedChatCompare;

const Chat = () => {
  const [chats, setChats] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [currentAllMessages, setCurrentAllMessages] = useState([]);
  const [socketConnected, setSocketConnected] = useState(false);
  const dispatch = useDispatch();
  const allChats = useSelector((state) => state.chats);
  const allMessages = useSelector((state) => state.messages);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getChats());

    const user = JSON.parse(localStorage.getItem("profile"));
    socket = io(ENDPOINT);
    socket.emit("setup", user?.result);
    socket.on("connection", () => setSocketConnected(true));
  }, []);

  useEffect(() => {
    setChats(allChats);
  }, [allChats]);

  useEffect(() => {
    socket.emit("join chat", currentChat?._id);
    selectedChatCompare = currentChat;
    setCurrentAllMessages(allMessages);
  }, [currentChat]);

  useEffect(() => {
    socket.on("message received", (newMessageReceived) => {
      if (
        !selectedChatCompare ||
        selectedChatCompare._id !== newMessageReceived.chat._id
      ) {
        // notification
      } else {
        setCurrentAllMessages([...currentAllMessages, newMessageReceived]);
      }
    });
  });

  useEffect(() => {
    const data = currentAllMessages?.find(msg => msg._id === currentChat)
    // socket.emit("new message", currentAllMessages);
  }, [currentAllMessages]);

  return (
    <div className="flex  min-h-screen mt-5">
      <div className="w-1/4 border-r-pink-600	">
        {chats?.map((c) => (
          <AllChats key={c?._id} chat={c} setCurrentChat={setCurrentChat} />
        ))}
      </div>
      <div className="w-3/4">
        <ChatBox
          currentAllMessages={currentAllMessages}
          setCurrentAllMessages={setCurrentAllMessages}
          currentChat={currentChat}
          socket={socket}
        />
      </div>
    </div>
  );
};

export default Chat;

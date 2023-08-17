import { Button, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendMsg } from "../../Redux/Actions/MessageAction";
import Messages from "./Messages";

const ChatBox = ({
  currentAllMessages,
  setCurrentAllMessages,
  currentChat,
  socket,
}) => {
  const [message, setMessage] = useState("");

  const user = JSON.parse(localStorage.getItem("profile"));
  const dispatch = useDispatch();
  const allMessages = useSelector((state) => state.messages);
  const onSendBtnClick = () => {
    dispatch(sendMsg(message, currentChat?._id, socket));
    setMessage("");
  };
  useEffect(() => {
    setCurrentAllMessages(allMessages);
  }, [allMessages]);

  let name = "";
  if (currentChat?.users[0]?._id === user?.result._id) {
    name = currentChat?.users[1]?.name;
  } else {
    name = currentChat?.users[0]?.name;
  }
  return (
    <div>
      <h1>Chat with {name}</h1>
      <div>
        {currentAllMessages && (
          <Messages currentAllMessages={currentAllMessages} />
        )}
      </div>
      <div className="absolute bottom-1.5	">
        <TextField
          name="content"
          label="Write Message"
          type="text"
          value={message}
          style={{ width: "50rem" }}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={onSendBtnClick}>
          Send
        </Button>
      </div>
    </div>
  );
};

export default ChatBox;

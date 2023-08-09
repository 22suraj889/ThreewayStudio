import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { sendMessage } from "../../Apis/Apis";

const ChatBox = ({ currentChat }) => {
  const [message, setMessage] = useState(null);
  const dispatch = useDispatch();
  const onSendBtnClick = () => {
    sendMessage(message, currentChat._id);
  };
  return (
    <div>
      <h1>Chat with {currentChat?.users[0]?.name}</h1>
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

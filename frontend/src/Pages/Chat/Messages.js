import React from "react";
import ScrollableFeed from "react-scrollable-feed";
import { isSameSenderMargin, isSameUser } from "./ChatLogic";
const Messages = ({ currentAllMessages }) => {
  const user = JSON.parse(localStorage.getItem("profile"));
  console.log(currentAllMessages, user);

  return (
    <ScrollableFeed>
      {currentAllMessages?.map((msg, i) => (
        <div key={msg._id}>
          <span
            style={{
              background: `${
                msg.sender._id === user.result._id ? "#BEE3F8" : "#B9F5D0"
              }`,
              borderRadius: "20px",
              padding: "5px 15px",
              maxWidth: "75%",
              marginTop: isSameUser(currentAllMessages, msg, i, user.result._id)
                ? "3rem"
                : "10rem",
              marginLeft: isSameSenderMargin(
                currentAllMessages,
                msg,
                i,
                user.result._id
              ),
            }}
          >
            {msg.content}
          </span>
        </div>
      ))}
    </ScrollableFeed>
  );
};

export default Messages;

import React from "react";

const AllChats = ({ chat, setCurrentChat }) => {
  return (
    <div
      onClick={() => {
        setCurrentChat(chat);
        console.log(chat);
      }}
    >
      {chat?.users[0]?.name}
    </div>
  );
};

export default AllChats;

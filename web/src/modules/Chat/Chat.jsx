import React from "react";
import "./Chat.scss";
import { MdSearch } from "react-icons/md";

const Chat = () => {
  return (
    <>
      <div className="chat">
        <header>
          <span> Chat</span>
          <MdSearch />
        </header>
      </div>
    </>
  );
};

export default Chat;

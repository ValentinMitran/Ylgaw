import React from "react";
import "./Chat.scss";
import UserList from "./ui/UserList";
import { useState } from "react";
import OpenChat from "./ui/OpenChat";

const Chat = ({ isChatOpen, setIsChatOpen }) => {
  const [selectedConvo,setSelectedConvo] = useState(false);

  return (
    <>
      {isChatOpen ? selectedConvo ? <OpenChat username={selectedConvo} setSelectedConvo={setSelectedConvo}/> : <UserList setSelectedConvo={setSelectedConvo}/> : null}
      {isChatOpen ? (
        <div className="ghost-wrap" onClick={() => setIsChatOpen(false)}></div>
      ) : null}
    </>
  );
};

export default Chat;

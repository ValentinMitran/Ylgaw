import React from "react";
import "./Chat.scss";
import { MdSearch, MdMessage } from "react-icons/md";

const Chat = ({ isChatOpen, setIsChatOpen }) => {
  return (
    <>
      {isChatOpen ? (
        <div className="chat">
          <header>
            <span> Chat</span>
            <MdSearch />
          </header>
          <div className="user">
            <img
              src="https://vuely.theironnetwork.org/static/avatars/user-28.jpg"
              alt="2"
            />
            <span>mrx</span>
            <MdMessage />
          </div>
          <div className="user">
            <img
              src="https://vuely.theironnetwork.org/static/avatars/user-35.jpg"
              alt="1"
            />
            <span>Valentin</span>
            <MdMessage />
          </div>
        </div>
      ) : null}

      {isChatOpen ? (
        <div className="ghost-wrap" onClick={() => setIsChatOpen(false)}></div>
      ) : null}
    </>
  );
};

export default Chat;
